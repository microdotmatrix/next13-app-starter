import { Meta } from '@components/meta'

import { fetchPost } from './layout'

export default async function Head({ params }) {
  let slug = params.slug.toString()
  const seo = await fetchPost(slug)
  return (
    <Meta seo={seo} />
  )
}