import type { NextRequest } from 'next/server'
import { getStockPriceBySku } from '~/app/services/get-stock-price-by-sku'

export async function GET(request: NextRequest, context: { params: { code: string } }) {
  const sku = context.params.code
  const data = getStockPriceBySku(sku)
  return Response.json(data)
}
