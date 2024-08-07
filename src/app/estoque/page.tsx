import { Suspense } from 'react'
import { Metadata } from 'next'
import Loading from '../loading'
import { siteService } from '../domain/site'
import { headers } from 'next/headers'

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers()
  const host = headersList.get('x-forwarded-host')
  const protocol = headersList.get('x-forwarded-proto')
  const path = `${protocol}://${host}/`

  const data = await siteService.getSitePage(path, 'estoque')

  return {
    title: data.title
  }
}

export default async function Stock() {
  const headersList = headers()
  const host = headersList.get('x-forwarded-host')
  const protocol = headersList.get('x-forwarded-proto')
  const path = `${protocol}://${host}/`

  const data = await siteService.getSitePage(path, 'estoque')

  return (
    <Suspense fallback={<Loading />}>
      <div>
        <h1 className='text-3xl'>
          <span className='text-purple-500'>{data.title}</span>
        </h1>
      </div>
    </Suspense>
  )
}
