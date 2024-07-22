import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://apicomercial.podiotecnologia.com.br'
})

api.interceptors.request.use(config => {
  if (typeof window !== 'undefined') {
    console.log('interceptor request')
    console.log(window.location.host)
  }

  return config
})
