import { api } from '@/api/apiConfig'

async function getSite(store?: string) {
  const response = await api.get('sites/api/resume-file', {
    params: {
      store
    }
  })
  return response.data
}

export const siteService = { getSite }
