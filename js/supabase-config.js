// Supabase Configuration
// Douanes Mali Enchères - Production Credentials

const SUPABASE_URL = 'https://jjefdzyjozzoqxufxzay.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqZWZkenlqb3p6b3F4dWZ4emF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ5ODU3NDcsImV4cCI6MjA4MDU2MTc0N30.pbStfbhd8tf_TLqFDs7Er0s33yPGcW0gEZEONgHBBzw';

// Initialize Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
