import { Suspense } from 'react'
import Loading from './loading'
import { Draft } from '@/components/Draft'
import { Metadata } from 'next'
import { siteService } from './domain/site'
import { headers } from 'next/headers'

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers()
  const host = headersList.get('x-forwarded-host')
  const protocol = headersList.get('x-forwarded-proto')
  const path = `${protocol}://${host}/`

  const data = await siteService.getSitePage(path, 'home')

  return {
    title: data.title
  }
}

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Draft />
      </Suspense>
    </>
  )
}
