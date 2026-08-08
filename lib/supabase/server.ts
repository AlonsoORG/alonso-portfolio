// lib/supabase/server.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL! // or hardcode if not sensitive
const supabaseKey = process.env.SUPABASE_KEY! // service role or anon key, server-only

export const supabase = createClient(supabaseUrl, supabaseKey)