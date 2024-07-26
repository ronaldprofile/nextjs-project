export interface SitePage {
  id: number
  sections: SiteSection[]
  list_seo: any
  title: string
  content: string
  status: boolean
  title_seo: any
  url: string
  video_url: string
  image: any
  title_banner: any
  url_banner: any
  removable: boolean
  created_at: string
  updated_at: string
  seo: any
  site: number
}

export interface SiteSection {
  id: number
  title: string
  image: string
  order: string
  type: string
  max_items: string
  type_view: string
  created_at: string
  updated_at: string
  components: SiteSectionComponent[]
  show_arrows: boolean
  show_dots: boolean
  autoplay: boolean
  has_text: boolean
  has_form: boolean
  has_link: boolean
  is_slider: boolean
  viewing_time: number
  margin: boolean
}

export interface SiteSectionComponent {
  id: number
  url_video: any
  title: string
  description: string
  url_page: any
  created_at: string
  updated_at: string
  section: number
}
