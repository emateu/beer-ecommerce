export interface Product {
  id: number
  brand: string
  image: string
  style: string
  substyle: string
  abv: string
  origin: string
  information: string
  skus: Array<{
    code: string
    name: string
  }>
}

export interface StockPrice {
  stock: number
  price: number
}
