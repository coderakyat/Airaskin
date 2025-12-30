import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

let supabase: SupabaseClient;

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn(
        'Missing Supabase environment variables. Data fetching will return empty arrays. ' +
        'Please check your .env file and ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set.'
    );
    // Create a dummy client that won't work but won't crash the app
    supabase = createClient('https://placeholder.supabase.co', 'placeholder-key');
} else {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export { supabase };
