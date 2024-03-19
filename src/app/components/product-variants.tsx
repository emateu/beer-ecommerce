import { clsx } from 'clsx'
import { Product } from '~/app/types'

export interface ProductVariantsProps {
  product: Product
  value?: string
  onChange: (value: string) => void
}

export function ProductVariants({ product, value, onChange }: ProductVariantsProps) {
  return (
    <div>
      <h2 className="font-medium mb-2">Size</h2>
      <div className="flex space-x-4">
        {product.skus.map((el, idx) => {
          const isActive = el.code === value
          return (
            <button
              key={el.code}
              onClick={() => onChange(el.code)}
              className={clsx('focus-style text-sm border rounded-2xl px-4 py-2', {
                'text-gray-500 border-gray-500': !isActive,
                'text-beer-orange border-beer-orange': isActive,
              })}
            >
              {el.name}
            </button>
          )
        })}
      </div>
    </div>
  )
}
