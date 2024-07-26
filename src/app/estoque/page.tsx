import { Suspense } from 'react'
import { Metadata } from 'next'
import Loading from '../loading'
import { siteService } from '../domain/site'

export async function generateMetadata(): Promise<Metadata> {
  const data = await siteService.getSitePage('estoque')

  return {
    title: data.title
  }
}

export default async function Stock() {
  const data = await siteService.getSitePage('estoque')

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
