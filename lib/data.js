const gql = String.raw

export const GET_POSTS = gql`
  query posts {
    posts(where: {orderby: {field: DATE, order: DESC}}, first: 10) {
      nodes {
        id
        title
        content
        date
        excerpt
        slug
        featuredImage {
          node {
            sourceUrl
            altText
            caption
            mediaDetails {
              height
              width
            }
          }
        }
      }
    }
  }
`


