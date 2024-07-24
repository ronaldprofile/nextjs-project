import { RootContextProvider } from '@/app/context/RootContext'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='pt-br' className='bg-zinc-700'>
      {/* <RootContextProvider> */}
      <body className={inter.className}>{children}</body>
      {/* </RootContextProvider> */}
    </html>
  )
}
