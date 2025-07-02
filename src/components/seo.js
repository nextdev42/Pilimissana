import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title, image, pathname }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  `)

  const {
    title: defaultTitle,
    description: defaultDescription,
    author,
    siteUrl,
  } = site.siteMetadata

  // Debug logging
  if (typeof window !== "undefined") {
    console.log("SEO → title prop:", title)
    console.log("SEO → default site title:", defaultTitle)
  }

  const safeTitle = (typeof title === "string" && title.trim()) ? title.trim() : null
  const pageTitle = safeTitle || defaultTitle

  const metaDescription = description?.trim() || defaultDescription
  const normalizedPath = pathname ? `/${pathname.replace(/^\/+/, "")}` : ""
  const canonical = `${siteUrl}${normalizedPath}`

  const metaImage = image
    ? image.startsWith("http")
      ? image
      : `${siteUrl}${image.startsWith("/") ? image : `/${image}`}`
    : `${siteUrl}/img/Polish_20250609_183326692.jpg`

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: pageTitle,
    description: metaDescription,
    image: [metaImage],
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: defaultTitle,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/img/Polish_20250609_183326692.jpg`,
      },
    },
    url: canonical,
    mainEntityOfPage: canonical,
  }

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={pageTitle}
      titleTemplate={safeTitle ? `%s | ${defaultTitle}` : `%s`} // Skip template if title not passed
      link={[{ rel: "canonical", href: canonical }]}
      meta={[
        { name: "description", content: metaDescription },
        { property: "og:title", content: pageTitle },
        { property: "og:description", content: metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: canonical },
        { property: "og:image", content: metaImage },
        { property: "og:image:alt", content: pageTitle },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:creator", content: author || "" },
        { name: "twitter:title", content: pageTitle },
        { name: "twitter:description", content: metaDescription },
        { name: "twitter:image", content: metaImage },
      ].concat(meta)}
    >
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  )
}

Seo.defaultProps = {
  lang: "sw",
  meta: [],
  description: "",
  image: null,
  pathname: null,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
}

export default Seo
