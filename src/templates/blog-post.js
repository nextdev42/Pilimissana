import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import LeftIcon from "../images/left-icon.svg"
import RightIcon from "../images/right-icon.svg"
import styled from "styled-components"
import { marked } from "marked"

const StyledDiv = styled.div`
  & h1 { font-size: 2rem; font-weight: 700; line-height: 1.5; }
  & h2 { font-size: 1.5rem; font-weight: 700; line-height: 2.2; }
  & h3 { font-size: 1.2rem; font-weight: 600; line-height: 2; }
  & h4 { font-size: 1.1rem; font-weight: 600; line-height: 2; }
  & a { color: #6b46c1; }
`

const DescriptionBox = styled.div`
  background-color: #bfdbfe;
  color: #1e40af;
  font-style: italic;
  padding: 1rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

const InfoIcon = styled.span`
  font-size: 1.25rem;
  line-height: 1;
  margin-top: 0.2rem;
`

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { title, description, featuredimage, date } = post.frontmatter

  const nextSlug = pageContext?.next?.fields?.slug || "/"
  const previousSlug = pageContext?.previous?.fields?.slug || "/"

  const nextLinkStatus = pageContext?.next?.frontmatter?.templateKey === "blog-post"
  const previousLinkStatus = pageContext?.previous?.frontmatter?.templateKey === "blog-post"

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric", month: "short", day: "numeric",
  })

  const titleDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  })

  const isoDate = new Date(date).toISOString().split("T")[0]

  return (
    <Layout>
      <Seo title={title} description={description} />

      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-[#000000] lg:mb-6 lg:text-4xl dark:text-black">
                {title}
              </h1>
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
              <time dateTime={isoDate} title={titleDate}>
                {formattedDate}
              </time>
            </p>

            {description && (
              <DescriptionBox>
                <InfoIcon>ℹ️</InfoIcon>
                <div dangerouslySetInnerHTML={{ __html: marked.parseInline(description) }} />
              </DescriptionBox>
            )}

            <StyledDiv
              className="post-content-body text-[#000000]"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            <div className="flex items-center justify-between pt-8">
              <div>
                {previousLinkStatus && (
                  <a className="text-base flex items-center text-[#131313]" href={previousSlug}>
                    <img src={LeftIcon} alt="Previous" width={30} height={30} />
                    <span>
                      {pageContext.previous.frontmatter.title.length > 30
                        ? pageContext.previous.frontmatter.title.slice(0, 30) + "..."
                        : pageContext.previous.frontmatter.title}
                    </span>
                  </a>
                )}
              </div>
              <div>
                {nextLinkStatus && (
                  <a className="text-base flex items-center text-[#131313]" href={nextSlug}>
                    <span>
                      {pageContext.next.frontmatter.title.length > 30
                        ? pageContext.next.frontmatter.title.slice(0, 30) + "..."
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
