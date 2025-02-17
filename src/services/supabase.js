import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://rsvjzkmprdtmvnngvhcq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJzdmp6a21wcmR0bXZubmd2aGNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk2MzYxNjcsImV4cCI6MjA1NTIxMjE2N30.vuZzX4nGmBrPPKaddYGAnfZ9NEAbN5JC882A2QcElAw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
