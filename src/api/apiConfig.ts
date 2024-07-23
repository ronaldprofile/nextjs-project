import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.API_URL
})

export const nextApiUrl =
  process.env.NODE_ENV === 'development' ? process.env.BASE_URL : ''

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
    const response = await axios.get(`/api/managment/${subdomain}`)

    const data = response.data
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
