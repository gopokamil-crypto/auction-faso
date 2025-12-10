import http.server
import socketserver
import json
import sqlite3
import os
from urllib.parse import urlparse, parse_qs

# Use PORT from environment variable for Render, default to 3000 for local
PORT = int(os.environ.get('PORT', 3000))
DB_FILE = 'database/douanes.db'
SCHEMA_FILE = 'database/schema.sql'

def init_db():
    if not os.path.exists('database'):
        os.makedirs('database')
    
    conn = sqlite3.connect(DB_FILE)
    cursor = conn.cursor()
    
    with open(SCHEMA_FILE, 'r') as f:
        schema = f.read()
        cursor.executescript(schema)
    
    conn.commit()
    conn.close()
    print("Database initialized.")

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        parsed_path = urlparse(self.path)

        # Handle agent slug URLs (e.g., /gouv/, /u/index.html)
        path_parts = parsed_path.path.strip('/').split('/')

        # Check if first part is a potential agent slug
        # Skip if: it's empty, a known folder, or an HTML file at root level
        is_root_html_file = len(path_parts) == 1 and path_parts[0].endswith('.html')
        known_paths = ['api', 'css', 'js', 'images', 'database', 'favicon.ico']

        if (len(path_parts) >= 1 and path_parts[0] and
            path_parts[0] not in known_paths and
            not is_root_html_file):
            # This is an agent slug URL
            agent_slug = path_parts[0]

            # Determine the actual file to serve
            if len(path_parts) == 1:
                # /gouv/ or /gouv -> serve index.html
                self.path = '/index.html'
            else:
                # /gouv/catalogue.html -> serve catalogue.html
                # Remove the slug from the path
                self.path = '/' + '/'.join(path_parts[1:])

        # API: Get Users
        if parsed_path.path == '/api/users':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            
            conn = sqlite3.connect(DB_FILE)
            conn.row_factory = sqlite3.Row
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM users ORDER BY created_at DESC")
            rows = cursor.fetchall()
            users = [dict(row) for row in rows]
            conn.close()
            
            self.wfile.write(json.dumps(users).encode())
            return

        # API: Get Payment Settings
        if parsed_path.path == '/api/payment-settings':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            
            conn = sqlite3.connect(DB_FILE)
            conn.row_factory = sqlite3.Row
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM payment_settings LIMIT 1")
            row = cursor.fetchone()
            conn.close()
            
            if row:
                self.wfile.write(json.dumps(dict(row)).encode())
            else:
                self.wfile.write(json.dumps({}).encode())
            return

        # Serve Static Files
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        data = json.loads(post_data.decode('utf-8'))
        
        parsed_path = urlparse(self.path)

        # API: Register User
        if parsed_path.path == '/api/register':
            try:
                conn = sqlite3.connect(DB_FILE)
                cursor = conn.cursor()
                cursor.execute("""
                    INSERT INTO users (full_name, phone, city, nina_number, vehicle_id)
                    VALUES (?, ?, ?, ?, ?)
                """, (data['full_name'], data['phone'], data['city'], data.get('nina_number'), data.get('vehicle_id')))
                conn.commit()
                conn.close()
                
                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"status": "success"}).encode())
            except Exception as e:
                self.send_response(500)
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode())
            return

        # API: Update Payment Settings
        if parsed_path.path == '/api/payment-settings':
            try:
                conn = sqlite3.connect(DB_FILE)
                cursor = conn.cursor()
                # Check if exists
                cursor.execute("SELECT id FROM payment_settings LIMIT 1")
                exists = cursor.fetchone()
                
                if exists:
                    cursor.execute("""
                        UPDATE payment_settings 
                        SET account_number=?, account_name=?
                        WHERE id=?
                    """, (data['account_number'], data['account_name'], exists[0]))
                else:
                    # For insert, we still need all fields if it's a fresh DB, but user only asked to modify update logic.
                    # However, to be safe, I'll keep the insert as is or assume the DB is initialized.
                    # The schema initializes it.
                    cursor.execute("""
                        INSERT INTO payment_settings (method_name, account_number, account_name, ussd_code)
                        VALUES (?, ?, ?, ?)
                    """, ('Orange Money', data['account_number'], data['account_name'], '#144#33...'))
                
                conn.commit()
                conn.close()
                
                self.send_response(200)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"status": "success"}).encode())
            except Exception as e:
                self.send_response(500)
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e)}).encode())
            return

if __name__ == "__main__":
    init_db()
    # Allow address reuse to avoid "Address already in use" errors during restarts
    socketserver.TCPServer.allow_reuse_address = True
    # Bind to 0.0.0.0 for Render deployment (allows external connections)
    with socketserver.TCPServer(("0.0.0.0", PORT), CustomHandler) as httpd:
        print(f"Server running on port {PORT}")
        print(f"Local: http://localhost:{PORT}")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")
            pass
