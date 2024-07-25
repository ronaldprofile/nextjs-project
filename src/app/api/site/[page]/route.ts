import { NextRequest, NextResponse } from 'next/server'
import { redirect } from 'next/navigation'
export async function GET(
  req: NextRequest,
  { params }: { params: { page: string } }
) {
  // const url = req.nextUrl.host

  const store = 'storer'
  const page = params.page

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_GEST_API_BASE_URL}/info/api/site/${store}/?page=${page}`,
    { cache: 'no-cache' }
  )

  // if (true) {
  //   return NextResponse.redirect(new URL('/_not-found', req.nextUrl))
  // }

  const data = await response.json()

  return NextResponse.json(data)
}
