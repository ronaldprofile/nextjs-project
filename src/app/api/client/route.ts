import { siteService } from '@/domain/site/siteService'

export async function GET() {
  const data = await siteService.getSite()
  return Response.json(data, { status: 200 })
}
