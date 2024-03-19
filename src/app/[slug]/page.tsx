import type { Metadata } from 'next'
import { getProductBySlug } from '~/app/services/get-product-by-slug'
import { getMetaTitle } from '~/app/utils/get-meta-title'
import { ProductDetailsPage } from '~/app/components/product-details-page'
import { FAVICON_PATH } from '~/app/constants'

export const revalidate = 600 // 10 minutes
export const fetchCache = 'force-cache'

type Props = {
  params: { slug: string }
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const product = getProductBySlug(props.params.slug)

  return {
    title: getMetaTitle(product?.brand),
    description: product?.information,
    openGraph: product?.image
      ? {
          images: [getNextImageUrl(product.image)],
        }
      : undefined,
    icons: {
      icon: FAVICON_PATH,
      shortcut: FAVICON_PATH,
    },
  }
}

export default async function Page(props: Props) {
  return <ProductDetailsPage slug={props.params.slug} />
}

const getNextImageUrl = (path: string) =>
  `https://beer-ecommerce.vercel.app/_next/image?url=${encodeURIComponent(path)}&w=640&q=75`
