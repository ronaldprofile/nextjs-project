import { api } from '@/api/apiConfig'

async function getSite() {
  const response = await api.get('/sites/api/resume-file')
  return response.data
}

export const siteService = { getSite }
