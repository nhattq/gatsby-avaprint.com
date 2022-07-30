import React from "react"
import { Helmet } from "react-helmet"
// import { useStaticQuery, graphql } from "gatsby"

// const query = graphql`
//   {
//     site {
//       siteMetadata {
//         author
//         siteDesc: description
//         image
//         siteUrl
//         siteTitle: title
//       }
//     }
//   }
// `
const SEO = () => {
  // const { site } = useStaticQuery(query)
  // const {
  //   siteDesc,
  //   siteTitle,
  //   siteUrl,
  //   image,
  // } = site.siteMetadata
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`AvaPrint.COM`}>
      {/* <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" /> */}
      {/* <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} /> */}
      {/* <title>Dreamship Clone</title> */}
      {/* <script data-ad-client="ca-pub-2747200200619029" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> */}
    </Helmet>
  )
}

export default SEO
