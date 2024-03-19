import { PageLayout } from './page-layout'
import { TopActions } from './top-actions'
import { ProductActions } from './product-actions'
import { ProductDescription } from './product-description'
import { NotFoundPage } from './not-found-page'
import { getProductBySlug } from '../services/get-product-by-slug'

export interface ProductDetailsPageProps {
  slug: string
}

export function ProductDetailsPage({ slug }: ProductDetailsPageProps) {
  const product = getProductBySlug(slug)

  if (!product) {
    return <NotFoundPage />
  }

  return (
    <PageLayout topActions={<TopActions />} bottomActions={<ProductActions />}>
      <ProductDescription product={product} />
    </PageLayout>
  )
}
