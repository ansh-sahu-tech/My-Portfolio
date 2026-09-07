import { createClient, SupabaseClient } from '@supabase/supabase-js';

let supabaseClient: SupabaseClient | null = null;

export const getSupabaseClient = (url?: string, anonKey?: string): SupabaseClient | null => {
  const supabaseUrl = url || import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = anonKey || import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return null;
  }

  if (!supabaseClient) {
    try {
      supabaseClient = createClient(supabaseUrl, supabaseKey);
    } catch (err) {
      console.error('Failed to initialize Supabase client:', err);
      return null;
    }
  }

  return supabaseClient;
};

export const isSupabaseConfigured = (url?: string, anonKey?: string): boolean => {
  return Boolean((url || import.meta.env.VITE_SUPABASE_URL) && (anonKey || import.meta.env.VITE_SUPABASE_ANON_KEY));
};
