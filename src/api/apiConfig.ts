import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://apicomercial.podiotecnologia.com.br'
})
