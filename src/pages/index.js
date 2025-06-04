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
        title="Holo - Gatsby Theme"
        description="Holo is a visually striking and highly customizable open source theme built on the powerful Gatsby framework and integrated with the versatile Decap CMS."
      />
      <Header />
      <FeatureSection />
      <FeaturedBlog posts={data.allMarkdownRemark.edges.slice(0, 3)} />
      <Testimonial />
    </Layout>
  </div>
)

export default IndexPage
