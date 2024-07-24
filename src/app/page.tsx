'use client'
import { Suspense, useEffect, useState } from 'react'
import Image from 'next/image'
import Loading from './loading'
import { siteService } from '@/app/domain/site/siteService'

export default function Home() {
  const [site, setSite] = useState<any>()

  async function getStoreSite() {
    try {
      const data = await siteService.getSite()
      if (data) {
        setSite(data)
      }
    } catch (error) {
    } finally {
    }
  }

  useEffect(() => {
    getStoreSite()
  }, [])

  return (
    <Suspense fallback={<Loading />}>
      {site && (
        <div className='max-w-7xl mx-auto'>
          <header className='py-4 px-6 flex items-center justify-between'>
            <h1 className='text-black text-2xl'>
              {site.site_settings.site_name}
            </h1>

            <Image
              src={site.site_settings?.logo}
              alt=''
              width={200}
              height={100}
            />
          </header>
        </div>
      )}
    </Suspense>
  )
}
