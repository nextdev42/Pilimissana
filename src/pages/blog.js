import React from "react"
import BlogHeader from "../components/Blog/blogHeader"
import BlogsContainer from "../components/Blog/blogsContainer"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { getSrc } from "gatsby-plugin-image"

const Blog = ({ data }) => {
  const HeaderPost = data?.allMarkdownRemark?.edges[0]
  const otherPosts = data?.allMarkdownRemark?.edges.slice(1)

  const featuredImage =
    HeaderPost?.node?.frontmatter?.featuredimage?.childImageSharp?.gatsbyImageData

  return (
    <Layout>
      <Seo
        title="Pilimissana - Blog"
        description="Makala za uraibu zilizo andaliwa na wataalamu wetu kwa lengo la kuelimisha na kusaidia jamii juu ya maradhi ya uraibu"
        pathname="/blog"
        image={getSrc(featuredImage)}
      />
      <BlogHeader post={HeaderPost} />
      <BlogsContainer data={otherPosts} />
    </Layout>
  )
}

export default Blog

export const WorkPageQuery = graphql`
  query IndexPage {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      limit: 30
      sort: { frontmatter: { date: DESC } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD:MM:YYYY hh:mm a")
            title
            description
            featuredimage {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`
