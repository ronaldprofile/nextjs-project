import axios from 'axios'

export const NEXT_BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_COMERCIAL_API
})

api.interceptors.request.use(async config => {
  const subdomain = config.params.store

  const storageKey = `@App:company-info-${subdomain}`
  // const subdomainStorage = localStorage.getItem(storageKey)
  const subdomainStorage = false

  if (subdomainStorage) {
    console.log('já existe')

    config.baseURL = subdomainStorage
    return config
  } else {
    const response = await fetch(
      `${NEXT_BASE_API_URL}/api/managment/${subdomain}`
    )

    const data = await response.json()
    const clientStore = data.result

    // if (!clientStore) {
    //   localStorage.removeItem(storageKey)
    //   localStorage.removeItem('@App:company:name')
    // }

    if (clientStore) {
      // localStorage.setItem(storageKey, clientStore.url_path)
      // localStorage.setItem('@App:company:name', subdomain)

      config.baseURL = clientStore.url_path
      return config
    }
  }

  return config
})
