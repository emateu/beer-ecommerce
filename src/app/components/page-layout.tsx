import { ReactNode } from 'react'

export interface PageLayoutProps {
  topActions?: ReactNode
  bottomActions?: ReactNode
  children: ReactNode
}

export function PageLayout({ children, topActions, bottomActions }: PageLayoutProps) {
  return (
    <>
      <div className="w-full max-w-2xl m-auto flex flex-col h-lvh">
        {topActions && (
          <header className="flex justify-between items-center py-6 px-8">{topActions}</header>
        )}
        <main className="grow flex flex-col">{children}</main>
      </div>
      {bottomActions}
    </>
  )
}
