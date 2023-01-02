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
          nodes {
            id
            title
            description
          }
        }
      }
      `,
    }),
  }).then((res) => res.json())
  return res.data.products
}

export default async function ShopPage() {
  const products = await testShop()
  return (
    <div>
      <h1>Shop Page</h1>
      {products?.nodes.map((product, i) => (
        <div key={i}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  )
}