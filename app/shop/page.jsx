import Link from 'next/link'

async function testShop() {
  const res = await fetch('https://shadow-work-dev.myshopify.com/api/2022-10/graphql.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': '848d24de823edfb8703e15a747bf8132'
    },
    body: JSON.stringify({
      query: `query MyQuery {
        products(first: 10) {
          edges {
            node {
              id
              title
              description
              handle
            }
          }
        }
      }
      `,
    }),
  }).then((res) => res.json())
  return res.data?.products?.edges
}

export default async function ShopPage() {
  const products = await testShop()
  return (
    <div>
      <h1>Shop Page</h1>
      {products?.map((product, i) => {
        const { id, title, description, handle } = product.node
        return (
          <div key={i}>
            <h2><Link href={`/shop/${handle}`}>{title}</Link></h2>
            <p>{description}</p>
          </div>
        )
      })}
    </div>
  )
}