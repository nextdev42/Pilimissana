import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import LeftIcon from "../images/left-icon.svg"
import RightIcon from "../images/right-icon.svg"
import styled from "styled-components"

const StyledDiv = styled.div`
  & h1 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.5;
  }
  & h2 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.2;
  }
  & h3 {
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 2;
  }
  & h4 {
    font-size: 1.1rem;
    font-weight: 600;
    line-height: 2;
  }
  & a {
    color: #6b46c1;
  }
`

const BlogPost = props => {
  const { pageContext } = props
  const post = props.data.markdownRemark
  const { title, date, description, featuredimage } = post.frontmatter

  const nextSlug = pageContext.next?.fields.slug || "/"
  const previousSlug = pageContext.previous?.fields.slug || "/"

  const nextLinkStatus =
    pageContext.next?.frontmatter.templateKey === "blog-post"
  const previousLinkStatus =
    pageContext.previous?.frontmatter.templateKey === "blog-post"

  let dateObj = new Date(date)
  let formattedDate = dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
  let titlaDate = dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  let isoDate = dateObj.toISOString().split("T")[0]

  return (
    <Layout>
      <Seo title={title} description={description} />
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-[#000000] lg:mb-6 lg:text-4xl dark:text-black">
                {title}
              </h1>
              {description && (
                <p className="text-lg text-gray-600 mb-4">{description}</p>
              )}
            </header>

            {featuredimage && (
              <div className="post-content-image">
                <GatsbyImage
                  image={getImage(featuredimage)}
                  className="lg:mb-2 overflow-hidden rounded-xl"
                  alt={title}
                />
              </div>
            )}

            <p className="text-base text-gray-500 dark:text-gray-400 lg:mb-2">
              <time dateTime={isoDate} title={titlaDate}>
                {formattedDate}
              </time>
            </p>

            <StyledDiv
              className="post-content-body text-[#000000]"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            <div className="flex items-center justify-between pt-8">
              <div>
                {previousLinkStatus && (
                  <a
                    className="text-base flex items-center"
                    href={previousSlug}
                    style={{ color: "#131313" }}
                  >
                    <img src={LeftIcon} alt="Previous" width={30} height={30} />
                    <span className="ml-2">
                      {pageContext.previous.frontmatter.title.length > 30
                        ? pageContext.previous.frontmatter.title.slice(0, 30) +
                          "..."
                        : pageContext.previous.frontmatter.title}
                    </span>
                  </a>
                )}
              </div>

              <div>
                {nextLinkStatus && (
                  <a
                    className="text-base flex items-center"
                    href={nextSlug}
                    style={{ color: "#131313" }}
                  >
                    <span className="mr-2">
                      {pageContext.next.frontmatter.title.length > 30
                        ? pageContext.next.frontmatter.title.slice(0, 30) +
                          "..."
                        : pageContext.next.frontmatter.title}
                    </span>
                    <img src={RightIcon} alt="Next" width={30} height={30} />
                  </a>
                )}
              </div>
            </div>
          </article>
        </div>
      </main>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date
        description
        featuredimage {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
