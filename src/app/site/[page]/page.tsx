import { Metadata, ResolvingMetadata } from 'next'
import { Suspense } from 'react'
import Loading from '../../loading'
import { siteService } from '@/app/domain/site'
import Link from 'next/link'

type Props = {
  params: { page: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateStaticParams() {
  const pages = await siteService.getListPage()

  console.log(pages)

  // return pages.map(({ url }) => ({
  //   page: url
  // }))

  return [{ page: 'home' }, { page: 'teste' }]
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
      <div className='m-10'>
        <Link href='/'>Voltar</Link>

        <h1 className='mt-3 text-3xl'>
          Dynamic page:
          <span className='text-purple-500'>{data.title}</span>
        </h1>
      </div>
    </Suspense>
  )
}
