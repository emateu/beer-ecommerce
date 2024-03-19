import { Metadata } from 'next'
import { HomePage } from '~/app/components/home-page'
import { getMetaTitle } from './utils/get-meta-title'
import { FAVICON_PATH } from './constants'

export const metadata: Metadata = {
  title: getMetaTitle(),
  description: `Welcome to the Beer E-Commerce Challenge!`,
  icons: {
    icon: FAVICON_PATH,
    shortcut: FAVICON_PATH,
  },
}

export default function Page() {
  return <HomePage />
}
