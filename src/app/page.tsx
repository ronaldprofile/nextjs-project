import { Suspense } from 'react'
import Loading from './loading'
import { Draft } from '@/components/Draft'
import { Metadata } from 'next'
import { siteService } from './domain/site'

export async function generateMetadata(): Promise<Metadata> {
  const data = await siteService.getSitePage('home')

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
