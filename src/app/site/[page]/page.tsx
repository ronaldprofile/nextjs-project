import { Metadata, ResolvingMetadata } from 'next'
import { Suspense } from 'react'
import Loading from '../../loading'
import { siteService } from '@/app/domain/site'

type Props = {
  params: { page: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params }: Props,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const data = await siteService.getSitePage(params.page)

  return {
    title: data.title
  }
}

export default async function SitePage({ params }: Props) {
  const data = await siteService.getSitePage(params.page)

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
