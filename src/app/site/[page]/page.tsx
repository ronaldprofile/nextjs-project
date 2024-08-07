import { Metadata, ResolvingMetadata } from 'next'
import { Suspense } from 'react'
import Loading from '../../loading'
import { siteService } from '@/app/domain/site'
import Link from 'next/link'
import { headers } from 'next/headers'

type Props = {
  params: { page: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

// export async function generateStaticParams() {
//   const headersList = headers()
//   const host = headersList.get('x-forwarded-host')
//   const protocol = headersList.get('x-forwarded-proto')
//   const path = `${protocol}://${host}/`

//   const pages = await siteService.getListPage(path)

//   return pages.map(({ url }) => ({
//     page: url
//   }))
// }

export async function generateMetadata(
  { params }: Props,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const headersList = headers()
  const host = headersList.get('x-forwarded-host')
  const protocol = headersList.get('x-forwarded-proto')
  const path = `${protocol}://${host}/`

  const data = await siteService.getSitePage(path, params.page)

  return {
    title: data.title
  }
}

// export async function generateMetadata(
//   { params }: Props,
//   _parent: ResolvingMetadata
// ): Promise<Metadata> {
//   const data = await siteService.getSitePage(params.page)

//   return {
//     title: data.title
//   }
// }

export default async function SitePage({ params }: Props) {
  const headersList = headers()
  const host = headersList.get('x-forwarded-host')
  const protocol = headersList.get('x-forwarded-proto')
  const path = `${protocol}://${host}/`

  const data = await siteService.getSitePage(path, params.page)

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
