import NextLink from 'next/link'
import { ArrowLeftIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid'

export function TopActions() {
  return (
    <>
      <NextLink
        href="/"
        className="focus-style rounded-lg w-10 h-10 flex justify-center items-center bg-white"
      >
        <ArrowLeftIcon className="h-6 w-6 text-[#323232]" />
      </NextLink>
      <div className="font-medium text-lg">Details</div>
      <button className="focus-style rounded-lg w-10 h-10 flex justify-center items-center bg-white">
        <EllipsisHorizontalIcon className="h-6 w-6 text-[#323232]" />
      </button>
    </>
  )
}
