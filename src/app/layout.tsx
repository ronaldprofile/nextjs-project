import { RootContextProvider } from '@/context/RootContext'
import { Inter } from 'next/font/google'
import './globals.css'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-br' className='bg-zinc-700'>
      <RootContextProvider>
        <body className={inter.className}>{children}</body>
      </RootContextProvider>
    </html>
  )
}
