import { Metadata, ResolvingMetadata } from 'next'
import { Suspense } from 'react'
import Loading from '../../loading'
import { siteService } from '@/app/domain/site'
import { headers } from 'next/headers'

type Props = {
  params: { page: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const headersList = headers()
  const host = headersList.get('x-forwarded-host')
  const protocol = headersList.get('x-forwarded-proto')
  const path = `${protocol}://${host}/`

  const data = await siteService.getSitePage(path, params.page)

  return {
    title: data.title
  }
}

export default async function SitePage({ params }: Props) {
  const headersList = headers()
  const host = headersList.get('x-forwarded-host')
  const protocol = headersList.get('x-forwarded-proto')
  const path = `${protocol}://${host}/`

  const data = await siteService.getSitePage(path, params.page)

  return (
    <Suspense fallback={<Loading />}>
      <div>
        <h1 className='text-3xl'>
          Dynamic page:
          <span className='text-purple-500'>{data.title}</span>
        </h1>
      </div>
    </Suspense>
  )
}
