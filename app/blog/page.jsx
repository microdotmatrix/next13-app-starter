import { Suspense } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { BrickLoader } from '@ui/loaders'
import { GET_POSTS } from '@lib/queries/posts'

export async function fetchPosts() {
  try {
    const res = await fetch(`https://sourcecodesavage.me/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: GET_POSTS,
      }),
      next: {
        revalidate: 0,
      }
    }).then((res) => res.json())
    return res.data.posts
  } catch (error) {
    return new Error(error.statusText)
  }
}

export default async function BlogPage() {
  const posts = await fetchPosts()
  if (!posts) {
    return <div>Failed to load posts!</div>
  }
  return (
    <Suspense fallback={<BrickLoader />}>
      {posts?.nodes.map((post, i) => (
        <div className="flex flex-row justify-between items-center gap-4 mb-8" key={i}>
          <div className="w-1/2 overflow-hidden relative" style={{ blockSize: '400px' }}>
            <Image
              src={post.featuredImage?.node.sourceUrl || `https://unsplash.it/90${i}?random&gravity=center` }
              alt={post.title}
              width={post.featuredImage?.node.mediaDetails.width || 500}
              height={post.featuredImage?.node.mediaDetails.height || 500}
              className="object-cover w-full h-full"
            />
          </div>
          <div className='w-1/2'>
            <h2 className='text-3xl'>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
            <Link href={`/blog/${post.slug}`} className="btn">Read More</Link>
          </div>
        </div>
      ))}
    </Suspense>
  )
}