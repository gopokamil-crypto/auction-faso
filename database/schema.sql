-- Database Schema for Douanes Mali Enchères (Supabase/PostgreSQL)

-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    full_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    city TEXT NOT NULL,
    nina_number TEXT,
    vehicle_id INTEGER,
    vehicle_name TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Payment Settings Table
CREATE TABLE IF NOT EXISTS payment_settings (
    id SERIAL PRIMARY KEY,
    method_name TEXT NOT NULL,
    account_number TEXT NOT NULL,
    account_name TEXT NOT NULL,
    ussd_code TEXT,
    is_active BOOLEAN DEFAULT true
);

-- Contact Settings Table
CREATE TABLE IF NOT EXISTS contact_settings (
    id SERIAL PRIMARY KEY,
    whatsapp_number TEXT NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert Default Payment Method (only if table is empty)
INSERT INTO payment_settings (method_name, account_number, account_name, ussd_code)
SELECT 'Orange Money', '+223 00 00 00 00', 'Douanes Mali Enchères', '#144#33...'
WHERE NOT EXISTS (SELECT 1 FROM payment_settings LIMIT 1);

-- Insert Default WhatsApp Contact (only if table is empty)
INSERT INTO contact_settings (whatsapp_number)
SELECT '+22373173924'
WHERE NOT EXISTS (SELECT 1 FROM contact_settings LIMIT 1);
