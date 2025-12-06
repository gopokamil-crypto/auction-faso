-- Migration: Add Contact Settings Table
-- Run this migration in Supabase SQL Editor

-- Contact Settings Table for managing WhatsApp contact number
CREATE TABLE IF NOT EXISTS contact_settings (
    id SERIAL PRIMARY KEY,
    whatsapp_number TEXT NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert Default WhatsApp Contact (only if table is empty)
INSERT INTO contact_settings (whatsapp_number)
SELECT '+22373173924'
WHERE NOT EXISTS (SELECT 1 FROM contact_settings LIMIT 1);

-- Enable Row Level Security
ALTER TABLE contact_settings ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read" ON contact_settings
  FOR SELECT TO anon
  USING (true);

-- Allow public update access (for admin panel)
CREATE POLICY "Allow public update" ON contact_settings
  FOR UPDATE TO anon
  USING (true)
  WITH CHECK (true);
