import { ShoppingBagIcon } from '@heroicons/react/24/outline'

export function ProductActions() {
  return (
    <div className="fixed bottom-0 left-0 w-full">
      <div className="w-full max-w-2xl m-auto flex space-x-6 py-6 px-8 bg-white">
        <button
          type="button"
          className="focus-style border border-beer-orange rounded-lg w-14 h-14 flex justify-center items-center"
        >
          <ShoppingBagIcon className="h-6 w-6 text-beer-orange" />
        </button>
        <button
          type="button"
          className="focus-style flex-grow bg-beer-orange text-white font-medium rounded-lg"
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}
