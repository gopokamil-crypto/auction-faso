-- Migration: Fix Users RLS Policy
-- Run this in Supabase SQL Editor

-- Enable RLS on users table (if not already enabled)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Drop existing policy if it exists to avoid conflicts
DROP POLICY IF EXISTS "Allow public read" ON users;

-- Create a policy that allows public read access to the users table
-- This is necessary for the admin panel to fetch users using the anon key
CREATE POLICY "Allow public read" ON users
  FOR SELECT TO anon
  USING (true);
