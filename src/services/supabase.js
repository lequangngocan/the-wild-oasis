import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bjkadmwmmkxeikccaxbw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqa2FkbXdtbWt4ZWlrY2NheGJ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2MzE0OTMsImV4cCI6MjA2ODIwNzQ5M30.EtjLlNzeH3_Mjwojo1Y0EvlqzRrqFqcW6xEOZWCxctQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
