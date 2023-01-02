import { GET_POST_BY_SLUG } from '@lib/queries/posts'

export async function fetchPost(slug) {
  try {
    const res = await fetch(`https://sourcecodesavage.me/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: GET_POST_BY_SLUG,
        variables: { slug }
      }),
      next: {
        revalidate: 60,
      }
    }).then((res) => res.json())
    return res.data.postBy
  } catch (error) {
    return new Error(error.statusText)
  }
}

export default async function PostLayout({ children, params }) {
  let slug = params.slug.toString()
  const post = await fetchPost(slug)
  const postImage = post.featuredImage?.node.sourceUrl || `https://unsplash.it/1600?random&gravity=center`
  return (
    <>
      <header className="w-full h-80 bg-no-repeat bg-cover bg-fixed" style={{ backgroundImage: `url(${postImage})` }}>
        <h1 className="title">{post.title}</h1>
      </header>
      <article className="flex flex-col">
        {children}
      </article>
    </>
  )
}