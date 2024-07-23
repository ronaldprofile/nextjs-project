import { Metadata } from 'next'
import Image from 'next/image'
import { Suspense } from 'react'
import Loading from './loading'
import { siteService } from '@/domain/site/siteService'
// import { nextApiUrl } from '@/api/apiConfig'

export async function generateMetadata(): Promise<Metadata> {
  const data = await siteService.getSite()

  return {
    title: data.site_settings.site_name,
    description: data.site.description,
    icons: {
      icon: data.site_settings.image
    }
  }
}

export default async function Home() {
  const response = await fetch(`/api/client`)

  const site = await response.json()

  return (
    <Suspense fallback={<Loading />}>
      <div className='max-w-7xl mx-auto'>
        <header className='py-4 px-6 flex items-center justify-between'>
          <h1 className='text-white text-2xl'>
            {site.site_settings.site_name}
          </h1>

          <Image
            src={site.site_settings?.logo}
            alt=''
            width={200}
            height={100}
          />
        </header>

        <main className=''></main>
      </div>
    </Suspense>
  )
}
