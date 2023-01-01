export default async function BlogLayout({ children }) {
  return (
    <>
      <div className="posts">
        { children }
      </div>
    </>
  )
}