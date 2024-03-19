import { Product } from '~/app/types'
import productsCollection from './mock-data/products'

export function getProductBySlug(slug: string): Product | null {
  const product = productsCollection.find((product) => {
    const id = product.id
    const brand = toKebabCase(product.brand)
    const _slug = `${id}-${brand}`
    return _slug === slug
  })

  return product || null
}

function toKebabCase(str: string): string {
  return str
    .split(' ') // Split the string into words
    .map((word) => word.toLowerCase()) // Convert each word to lowercase
    .join('-') // Join the words with hyphens
}
