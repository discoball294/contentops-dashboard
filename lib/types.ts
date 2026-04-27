export type Account = {
  id: string
  handle: string           // e.g. @dariladang_id
  platform: 'instagram' | 'tiktok' | 'both'
  niche: string            // search query for NewsAPI
  brand_name: string
  brand_colors: {
    primary: string
    accent: string
    background: string
  }
  tone: string
  language: string
  content_pillars: string[]
  hashtags_mandatory: string[]
  brand_identity_text: string   // full brand doc text
  brand_file_url?: string       // Google Drive file URL
  active: boolean
  created_at: string
  instagram_username?: string
  tiktok_username?: string
  news_domains?: string[]
  negative_keywords?: string[]
}

export type ContentLog = {
  id: string
  account_id: string
  account_handle: string
  date: string
  article_title: string
  article_url: string
  source: string
  pillar: 'UMKM' | 'Petani' | 'Fakta' | 'Mitos'
  angle: string
  slides: {
    slide_number: number
    function: string
    text: string
    illustration: string
  }[]
  caption_instagram: string
  caption_tiktok: string
  hashtags: string
  image_url: string
  visual_prompt: string
  status: 'pending' | 'approved' | 'rejected' | 'published'
  approved_by?: string
  approved_at?: string
  published_at?: string
  rejection_note?: string
}
