import NextLink from 'next/link'
import { EmptyStateIllustration } from '~/app/components/empty-state-illustration'
import { PageLayout } from './page-layout'

export function NotFoundPage() {
  return (
    <PageLayout>
      <div className="flex flex-col justify-center h-lvh px-10">
        <div className="flex flex-col space-y-4 items-center bg-white px-8 py-12 rounded-xl">
          <EmptyStateIllustration />
          <h1 className="text-2xl">Page not found</h1>
          <p>
            <NextLink className="text-link" href="/">
              Go to homepage
            </NextLink>
          </p>
        </div>
      </div>
    </PageLayout>
  )
}
