import { api } from '@/api/apiConfig'
import { SitePage } from './siteTypes'
import { redirect } from 'next/navigation'

async function getResumeSite() {
  const response = await api.get('/sites/api/resume-file')
  return response.data
}

async function getSitePage(url: string, page: string): Promise<SitePage> {
  console.log({ url })

  const response = await fetch(`${url}api/site/${page}`, {
    cache: 'no-cache'
  })

  if (!response.ok) {
    return redirect('/_not-found')
  }

  const data: SitePage = await response.json()
  return data
}

export const siteService = { getResumeSite, getSitePage }
