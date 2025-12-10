-- Migration: Add agents table for multi-agent WhatsApp system
-- Created: 2025-12-10

-- Create agents table
CREATE TABLE IF NOT EXISTS agents (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    whatsapp_number TEXT NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for fast lookups
CREATE INDEX IF NOT EXISTS idx_agents_slug ON agents(slug);
CREATE INDEX IF NOT EXISTS idx_agents_active ON agents(is_active);

-- Insert Agent 1 as the super agent (root URL)
INSERT INTO agents (name, slug, whatsapp_number, is_active)
SELECT 'Agent Principal', 'root', '22373173924', true
WHERE NOT EXISTS (SELECT 1 FROM agents WHERE slug = 'root');

-- Insert example additional agents
INSERT INTO agents (name, slug, whatsapp_number, is_active)
SELECT 'Agent U', 'u', '22300000001', true
WHERE NOT EXISTS (SELECT 1 FROM agents WHERE slug = 'u');

INSERT INTO agents (name, slug, whatsapp_number, is_active)
SELECT 'Agent Gouv', 'gouv', '22300000002', true
WHERE NOT EXISTS (SELECT 1 FROM agents WHERE slug = 'gouv');

-- Add RLS (Row Level Security) policies for public access
ALTER TABLE agents ENABLE ROW LEVEL SECURITY;

-- Allow public read access to active agents
CREATE POLICY "Allow public read access to active agents"
ON agents FOR SELECT
USING (is_active = true);

-- Allow public read access to all agents for admin
CREATE POLICY "Allow public read access to all agents"
ON agents FOR SELECT
USING (true);

-- Allow public insert access (for admin creation)
CREATE POLICY "Allow public insert access"
ON agents FOR INSERT
WITH CHECK (true);

-- Allow public update access (for admin updates)
CREATE POLICY "Allow public update access"
ON agents FOR UPDATE
USING (true);

-- Allow public delete access (for admin deletion)
CREATE POLICY "Allow public delete access"
ON agents FOR DELETE
USING (true);
