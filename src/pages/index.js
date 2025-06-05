import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

// Components
import Header from "../components/Home/header"
import FeatureSection from "../components/Home/featureSection"
import Testimonial from "../components/Home/testimonial"
import FeaturedBlog from "../components/FeaturedBlog"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <div className="h-auto w-screen">
    <Layout>
      <Seo
        title="PILI MISSANA - Sober house foundation"
        description="Tuna toa tiba za maradhi ya uraibu wa madawa ya kulevya kama vile pombe, bangi, heroin, cocaine, tramadol, na dawa nyingine za kulevya"
      />
      <Header />
      <FeatureSection />
      <FeaturedBlog posts={data.allMarkdownRemark.edges.slice(0, 3)} />
      <Testimonial />
    </Layout>
  </div>
)
export const query = graphql`
  query HomePageQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      sort: { frontmatter: { date: DESC } }
      limit: 3
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          rawMarkdownBody
        }
      }
    }
  }
`

export default IndexPage
