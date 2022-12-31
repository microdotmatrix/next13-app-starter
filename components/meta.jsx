export default async function Meta({ seo }) {
  const {
    title,
    description,
    image,
    metaTitle,
    metaDescription,
    ogTitle,
    ogDescription,
    ogImage,
    twitterImage,
    twitterTitle,
    twitterDescription,
  } = seo;
  return (
    <>
      <title>{metaTitle || title}</title>
  
      <meta name='description' content={metaDescription || description} />
  
      { /* Open Graph */ }
      <meta property='og:site_name' content={title} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={ogTitle || metaTitle || title} />
      <meta property='og:description' content={ogDescription || metaDescription || description} />
      {ogImage || image && <meta property='og:image' content={ogImage || image} />}
  
      { /* Twitter */ }
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={twitterTitle || metaTitle || title} />
      <meta name='twitter:description' content={twitterDescription || metaDescription || description} />
      {ogImage || image && <meta name='twitter:image' content={twitterImage || image} />}
    </>
  )
}