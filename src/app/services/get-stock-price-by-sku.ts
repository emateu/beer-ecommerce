import { StockPrice } from '~/app/types'
import stockPriceCollection from './mock-data/stock-price'

export function getStockPriceBySku(id?: number | string): StockPrice | null {
  if (!id) return null

  return (stockPriceCollection as Record<number | string, StockPrice>)[id] || null
}
