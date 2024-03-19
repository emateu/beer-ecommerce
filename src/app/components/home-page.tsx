import NextLink from 'next/link'
import { DocumentIcon } from '@heroicons/react/24/outline'
import { PageLayout } from './page-layout'

export function HomePage() {
  return (
    <PageLayout>
      <div className="flex flex-col justify-center h-lvh px-10">
        <div className="flex flex-col space-y-5 bg-white px-8 py-12 rounded-xl">
          <h1 className="text-2xl">Welcome to the Beer E-Commerce Challenge!</h1>
          <p>
            <a className="inline-flex align-middle text-link" href="/challenge.pdf" target="_blank">
              <DocumentIcon className="inline w-6 h-6 mr-1" /> Download PDF with test instructions
            </a>
          </p>

          <h2 className="text-xl">Product Links</h2>
          <ul className="list-disc pl-5 space-y-2">
            {[
              '/127-modelo-especial',
              '/374-miller-lite',
              '/743-corona-premier',
              '/841-lagunitas-ipa',
            ].map((slug) => (
              <li key={slug}>
                <NextLink className="text-link" href={slug}>
                  {slug}
                </NextLink>
              </li>
            ))}
          </ul>

          <h2 className="text-xl">API Endpoints</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <NextLink className="text-link" href="/api/stock-price/10170">
                /api/stock-price/{'{code}'}
              </NextLink>
            </li>
          </ul>
        </div>
      </div>
    </PageLayout>
  )
}
