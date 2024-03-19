import { useEffect, useState } from 'react'
import { Product, StockPrice } from '~/app/types'
import { getStockPriceBySku } from '../services/get-stock-price-by-sku'

export interface UseProductStockPriceParams {
  product: Product
}

export function useProductStockPrice({ product }: UseProductStockPriceParams) {
  const [sku, setSku] = useState(product?.skus.at(0)?.code ?? '')
  const defaultVariantSku = product?.skus.at(0)?.code
  const [stockPrice, setStockPrice] = useState(getStockPriceBySku(defaultVariantSku) || undefined)

  useEffect(() => {
    const getStockPrice = () => {
      fetch(`/api/stock-price/${sku}`)
        .then((res) => res.json() as unknown as StockPrice)
        .then((data) => {
          setStockPrice(data)
        })
    }

    getStockPrice()
    const interval = setInterval(getStockPrice, 1000 * 5) // 5 seconds

    return () => clearInterval(interval)
  }, [sku, setStockPrice])

  return {
    sku,
    stockPrice,
    setSku,
  }
}
