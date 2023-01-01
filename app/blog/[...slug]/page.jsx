import { fetchPost } from './layout'

export default async function PostPage({ params }) {
  let slug = params.slug.toString()
  const post = await fetchPost(slug)

  if (!post) {
    return <div>Failed to load post!</div>
  }

  const { content } = post
  return (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  )
}