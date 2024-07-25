import { api } from '@/api/apiConfig'
import { SitePage } from './siteTypes'

async function getResumeSite() {
  const response = await api.get('/sites/api/resume-file')
  return response.data
}

async function getSitePage(page: string): Promise<SitePage> {
  const response = await fetch(`http://localhost:3000/api/site/${page}`, {
    cache: 'no-cache'
  })

  const data: SitePage = await response.json()
  return data
}

export const siteService = { getResumeSite, getSitePage }
