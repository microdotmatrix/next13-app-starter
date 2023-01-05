import Image from 'next/image'

async function fetchProduct({ slug }) {
  const handle = slug
  const res = await fetch('https://shadow-work-dev.myshopify.com/api/2022-10/graphql.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': '848d24de823edfb8703e15a747bf8132'
    },
    body: JSON.stringify({
      query: `query getProduct($handle: String!) {
        product(handle: $handle) {
          id
          title
          description
          images(first: 10) {
            edges {
              node {
                id
                altText
                originalSrc
              }
            }
          }
        }
      }`,
      variables: { handle }
    }),
  }).then((res) => res.json())
  return res.data?.product
}

export default async function ProductPage({ params }) {
  const product = await fetchProduct({ slug: params.slug.toString() })
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      {product.images.edges.map((image, i) => {
        const { id, altText, originalSrc } = image.node
        return (
          <Image key={i} src={originalSrc} alt={altText} width={500} height={500} />
        )
      })}
    </div>
  )
}