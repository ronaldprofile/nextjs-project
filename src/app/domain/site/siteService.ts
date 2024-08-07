import { api } from '@/api/apiConfig'
import { SitePage } from './siteTypes'
import { redirect } from 'next/navigation'

async function getResumeSite() {
  const response = await api.get('/sites/api/resume-file')
  return response.data
}

async function getSitePage(page: string): Promise<SitePage> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_HOST}/api/site/${page}`,
    {
      cache: 'no-cache'
    }
  )

  if (!response.ok) {
    return redirect('/_not-found')
  }

  const data: SitePage = await response.json()
  return data
}

export const siteService = { getResumeSite, getSitePage }
