import axios from 'axios'

const BASE_URL = process.env.NEXT_PUBLIC_GEST_API_BASE_URL

type GetResult = {
  name_store: string
  url_path: string
}

async function getStore(store: string) {
  const response = await axios.get<{ result: GetResult | null }>(
    `${BASE_URL}/contracts/api/company/${store}/send-company`
  )

  return response.data
}

export const managementService = { getStore }
