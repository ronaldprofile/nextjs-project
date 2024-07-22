import { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import { Suspense } from 'react'
import Loading from './loading'
import { siteService } from '@/domain/site/siteService'

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
  const site = await siteService.getSite()

  return (
    <Suspense fallback={<Loading />}>
      <div className='max-w-7xl mx-auto'>
        <header className='py-4 px-6 flex items-center justify-between'>
          <Image
            src={site.site_settings.logo}
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
