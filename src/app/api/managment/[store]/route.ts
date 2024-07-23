import { managementService } from '@/domain/managment/managmentService'
import { NextRequest, NextResponse } from 'next/server'

export default async function GET(
  req: NextRequest,
  { params }: { params: { store: string } }
) {
  const clientStore = params.store

  const data = await managementService.getStore(clientStore)
  return NextResponse.json(data, { status: 200 })
}
