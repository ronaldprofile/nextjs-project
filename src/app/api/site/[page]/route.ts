import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  req: NextRequest,
  { params }: { params: { page: string } }
) {
  // const store = req.nextUrl.host.split('.')[0]
  // console.log(url)

  const store = 'storer'
  const page = params.page

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_GEST_API_BASE_URL}/info/api/site/${store}/?page=${page}`,
    { cache: 'no-cache' }
  )

  if (!response.ok) {
    return NextResponse.json({ message: 'page not found' }, { status: 404 })
  }

  const data = await response.json()

  return NextResponse.json(data)
}
