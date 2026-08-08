// lib/data/site-metadata.ts
import { unstable_cache } from 'next/cache'
import { supabase } from '@/lib/supabase/server'


export interface AlonsoData {
  id: number
  name: string
  short_description: string
  about_me: string
  // long_description: string
  // og_image: string
}

export const getSiteMetadata: () => Promise<AlonsoData> = unstable_cache(
  async () => {
    const { data, error } = await supabase
      .from('alonso')
      .select('*')
      .single()

    if (error) throw error
    return data 
  },
  ['site-metadata'], // cache key
  // { revalidate: 3600, tags: ['site-metadata'] } // revalidate hourly, or use tags for on-demand
  { revalidate: 600, tags: ['site-metadata'] } // revalidate hourly, or use tags for on-demand
)