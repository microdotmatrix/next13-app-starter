import clsx from 'clsx'

export function PageContent({ children, width }) {
  return (
    <div
      className={clsx("mx-auto px-4 md:px-6 lg:px-10", width === 'content' ? "content-width" : "w-full")}
    >
      {children}
    </div>
  )
}