import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const store = req.nextUrl.host.split('.')[0]
  // const store = 'storer'

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_GEST_API_BASE_URL}/info/api/site/${store}/list-pages`
  )

  if (!response.ok) {
    return NextResponse.json(
      { message: 'something went wrong' },
      { status: 404 }
    )
  }

  const data = await response.json()

  return NextResponse.json(data)
}
