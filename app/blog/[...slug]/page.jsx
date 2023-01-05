import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { PageTransition } from '@components/container'

import { GET_POST_BY_SLUG } from '@lib/queries/posts'

const PostView = dynamic(() => import('@components/blog/view'), { suspense: true })

async function fetchPost(slug) {
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
  
  if (!post) {
    return <div>Failed to load post!</div>
  }
  return (
    <Suspense fallback={"Loading post..."}>
      <PostView post={post} />
    </Suspense>
  )
}