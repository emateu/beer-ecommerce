import React, { useState } from 'react'

interface ShowMoreLessProps {
  children: string
  maxCharacters: number
}

export function ShowMoreLess({ children, maxCharacters }: ShowMoreLessProps) {
  const [showFullText, setShowFullText] = useState(false)

  const toggleShowMore = () => {
    setShowFullText(!showFullText)
  }

  if (children.length <= maxCharacters) {
    return <p className="text-gray-500">{children}</p>
  }

  return (
    <p className="text-gray-500">
      {showFullText ? children : `${children.substring(0, maxCharacters)}...`}
      <button onClick={toggleShowMore} className="text-link ml-2 font-medium">
        {showFullText ? 'Read less' : 'Read more'}
      </button>
    </p>
  )
}
