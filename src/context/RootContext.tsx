'use client'
import { createContext } from 'react'
// import { useRouter } from 'next/navigation'
// import { checkWindowIsAvailable } from '@/utils'
// import axios from 'axios'

const RootContext = createContext({})

export function RootContextProvider({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  // const router = useRouter()

  // async function getClientStore() {
  //   if (checkWindowIsAvailable()) {
  //     const url = window.location.host
  //     const subdomain = url.split('.')[0]
  //     const subdomain = 'storer'

  //     const storageKey = `@App:company-info-${subdomain}`
  //     const subdomainStorage = localStorage.getItem(storageKey)

  //     if (subdomainStorage) {
  //       console.log('já existe')
  //       return
  //     } else {
  //       const { data } = await axios.get(`/api/managment/${subdomain}`)
  //       const clientStore = data.result

  //       if (!clientStore) {
  //         localStorage.removeItem(storageKey)
  //         localStorage.removeItem('@App:company:name')

  //         router.replace('/404')
  //         return
  //       }

  //       localStorage.setItem(storageKey, clientStore.url_path)
  //       localStorage.setItem('@App:company:name', subdomain)
  //     }
  //   }
  // }

  // useEffect(() => {
  //   getClientStore()
  // }, [])

  return <RootContext.Provider value={{}}>{children}</RootContext.Provider>
}
