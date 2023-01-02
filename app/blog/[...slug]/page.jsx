import { Suspense } from 'react'
import { PageTransition } from '@components/container'

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

export default async function PostPage({ params }) {
  let slug = params.slug.toString()
  const post = await fetchPost(slug)
  const postImage = post.featuredImage?.node.sourceUrl || `https://unsplash.it/1600?random&gravity=center`
  if (!post) {
    return <div>Failed to load post!</div>
  }
  return (
    <Suspense fallback={"Loading post..."}>
      <PageTransition width="content">
        <header className="w-full h-80 bg-no-repeat bg-cover bg-fixed" style={{ backgroundImage: `url(${postImage})` }}>
          <h1 className="title">{post.title}</h1>
        </header>
        <article className="flex flex-col">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </PageTransition>
    </Suspense>
  )
}