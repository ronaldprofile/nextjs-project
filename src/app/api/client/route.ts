import { siteService } from '@/app/domain/site/siteService'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const store = req.nextUrl.host.split('.')[0]

  const data = await siteService.getSite(store)
  return NextResponse.json(data)
}
