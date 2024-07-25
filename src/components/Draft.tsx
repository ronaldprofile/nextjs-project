'use client'

import { useEffect, useState } from 'react'
import { siteService } from '@/app/domain/site/siteService'
import Image from 'next/image'
import Link from 'next/link'

export function Draft() {
  const [data, setData] = useState<any>()
  const [loading, setLoading] = useState(false)

  async function getStoreSite() {
    try {
      setLoading(true)
      const data = await siteService.getSite()
      if (data) {
        setData(data)
      }
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getStoreSite()
  }, [])

  if (loading)
    return (
      <>
        <p>Loading...</p>
      </>
    )

  console.log(data)

  return (
    <>
      {data && (
        <div className='max-w-7xl mx-auto'>
          <header className='py-4 px-6 flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <h1 className='text-black text-xl'>
                {data.site_settings.site_name}
              </h1>

              <Image
                src={data.site_settings?.logo}
                alt=''
                width={200}
                height={100}
              />
            </div>

            <nav>
              <ul className='flex items-center gap-4'>
                {data.pages.map((item: any) => (
                  <Link key={item.id} href={`/site/${item.url}`}>
                    <li className='font-medium hover:underline'>
                      {item.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </nav>
          </header>
        </div>
      )}
    </>
  )
}
