import { Suspense } from "react";

import Link from "next/link";
import Image from "next/image";

import { BrickLoader } from "@ui/loaders";
import { GET_POSTS } from "@lib/queries/posts";

import { formatDate } from "@utils/helpers";

export async function fetchPosts() {
  try {
    const res = await fetch(`https://sourcecodesavage.me/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: GET_POSTS,
      }),
      next: {
        revalidate: 60,
      },
    }).then((res) => res.json());
    return res.data.posts;
  } catch (error) {
    return new Error(error.statusText);
  }
}

export default async function BlogPage() {
  const posts = await fetchPosts();
  if (!posts) {
    return <div>Failed to load posts!</div>;
  }
  return (
    <Suspense fallback={<BrickLoader />}>
      {posts?.nodes.map((post, i) => (
        <div
          className="flex flex-row justify-between items-center gap-4 mb-8"
          key={i}
        >
          <div
            className="overflow-hidden relative"
            style={{
              minBlockSize: "420px",
              maxblockSize: "540px",
              maxHeight: "540px",
              height: "100%",
              flex: "2 0 0"
            }}
          >
            <Image
              src={
                post.featuredImage?.node.sourceUrl ||
                `https://unsplash.it/90${i}?random&gravity=center`
              }
              alt={post.title}
              width={post.featuredImage?.node.mediaDetails.width || 500}
              height={post.featuredImage?.node.mediaDetails.height || 500}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="relative" style={{ flex: "3 0 0" }}>
            <header className="flex flex-col gap-1 mb-4">
              <h3 className="title">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <h5 className="my-0">{formatDate(post.date)}</h5>
            </header>
            <article className="p-4 bg-gray-600/10">
              <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
              <Link href={`/blog/${post.slug}`} className="btn">
                Read More
              </Link>
            </article>
          </div>
        </div>
      ))}
    </Suspense>
  );
}
