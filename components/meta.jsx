export default async function Meta({ post }) {
  const {
    title,
    excerpt,
    seo,
  } = post;
  const {
    metaDesc,
    opengraphDescription,
    opengraphImage,
    opengraphTitle,
    twitterDescription,
    twitterImage,
    twitterTitle
  } = seo;
  
  return (
    <>
      <title>{title}</title>
  
      <meta name='description' content={metaDesc || excerpt} />
  
      { /* Open Graph */ }
      <meta property='og:site_name' content={title} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={opengraphTitle ||  title} />
      <meta property='og:description' content={opengraphDescription || metaDesc || excerpt} />
      {opengraphImage && <meta property='og:image' content={opengraphImage} />}
  
      { /* Twitter */ }
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={twitterTitle || title} />
      <meta name='twitter:description' content={twitterDescription || metaDesc || excerpt} />
      {twitterImage && <meta name='twitter:image' content={twitterImage} />}
    </>
  )
}