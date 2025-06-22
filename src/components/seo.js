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

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const siteUrl = site.siteMetadata.siteUrl
  const canonical = pathname ? `${siteUrl}${pathname}` : siteUrl
  const metaImage = image ? `${siteUrl}${image}` : `${siteUrl}/img/Polish_20250609_183326692.jpg`

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      link={[
        {
          rel: "canonical",
          href: canonical,
        },
      ]}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "article",
        },
        {
          property: "og:url",
          content: canonical,
        },
        {
          property: "og:image",
          content: metaImage,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:creator",
          content: site.siteMetadata?.author || "",
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
        {
          name: "twitter:image",
          content: metaImage,
        },
      ].concat(meta)}
    />
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
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  pathname: PropTypes.string,
}

export default Seo
