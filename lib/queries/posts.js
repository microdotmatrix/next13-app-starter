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

export const GET_POST_BY_SLUG = gql`
  query post($slug: String!) {
    postBy(slug: $slug) {
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
`

export const GET_POST_SLUGS = gql`
  query postSlugs {
    posts(first: 100) {
      nodes {
        slug
      }
    }
  }
`