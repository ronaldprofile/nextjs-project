import { managementService } from '@/app/domain/managment/managmentService'
import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STORER_API
})

api.interceptors.request.use(
  async config => {
    const url = window.location.host
    // const subdomain = url.split('.')[0]
    const subdomain = 'storer'

    const storageKey = `@App:company-info-${subdomain}`

    const subdomainStorage = localStorage.getItem(storageKey)

    if (subdomainStorage) {
      config.baseURL = subdomainStorage
      return config
    } else {
      const company = await managementService.getStore(subdomain)

      if (company.result) {
        localStorage.setItem(storageKey, company.result.url_path)
        localStorage.setItem('@App:company', subdomain)

        config.baseURL = company.result.url_path
        return config
      } else {
        window.location.href = '/_not-found'
        localStorage.removeItem(storageKey)
        localStorage.removeItem('@App:company')
      }
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }
)
