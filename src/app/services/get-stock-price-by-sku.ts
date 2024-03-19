import { StockPrice } from '~/app/types'
import stockPriceCollection from './mock-data/stock-price'

export function getStockPriceBySku(id?: number | string): StockPrice | null {
  if (!id) return null

  return stockPriceCollection[id] || null
}
