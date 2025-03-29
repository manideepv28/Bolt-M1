import { createClient } from 'npm:@supabase/supabase-js@2.39.3';

export const supabase = createClient(
  Deno.env.get('SUPABASE_URL') || '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || ''
);