import Meta from '@components/meta'
import { GET_POST_SEO } from '@lib/queries/posts'

async function fetchSeo(slug) {
  try {
    const res = await fetch(`https://sourcecodesavage.me/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: GET_POST_SEO,
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

export default async function Head({ params }) {
  let slug = params.slug.toString()
  const post = await fetchSeo(slug)
  return (
    <Meta post={post} />
  )
}