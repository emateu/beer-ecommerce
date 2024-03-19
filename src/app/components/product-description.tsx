'use client'

import NextImage from 'next/image'
import { Product } from '~/app/types'
import { getFormattedPrice } from '~/app/utils/get-formatted-price'
import { useProductStockPrice } from '~/app/hooks/useProductStockPrice'
import { ProductVariants } from './product-variants'
import { ShowMoreLess } from './show-more-less'

export interface ProductDescriptionProps {
  product: Product
}

export function ProductDescription({ product }: ProductDescriptionProps) {
  const { stockPrice, sku, setSku } = useProductStockPrice({ product })

  return (
    <>
      <div className="pb-6">
        <div className="h-[340px] relative">
          <NextImage
            priority
            src={product.image}
            alt={product.brand}
            fill
            className="w-full h-full object-contain mix-blend-multiply"
            sizes="340px"
          />
        </div>
      </div>
      <div className="grow bg-white px-8 py-12 pb-32 rounded-t-3xl">
        <div className="flex justify-between">
          <h1 className="text-2xl font-medium">{product.brand}</h1>
          <div className="text-2xl font-medium text-beer-orange">
            {stockPrice &&
              getFormattedPrice({
                amount: stockPrice.price,
              })}
          </div>
        </div>
        <div className="mt-2 space-x-2 text-gray-500 flex items-center">
          <span>Origin: {product.origin}</span>
          <span className="text-[10px] font-medium">|</span>
          {stockPrice && <span>Stock: {stockPrice.stock}</span>}
        </div>
        <div className="my-6">
          <h2 className="font-medium mb-2">Description</h2>
          <ShowMoreLess maxCharacters={100}>{product.information}</ShowMoreLess>
        </div>
        <ProductVariants product={product} value={sku} onChange={(val) => setSku(val)} />
      </div>
    </>
  )
}
