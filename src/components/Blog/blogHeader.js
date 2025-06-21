import { Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Fade from "react-reveal/Fade"
import { marked } from "marked"

const BlogHeader = ({ post }) => {
  const image = getImage(post.node.frontmatter.featuredimage)

  const rawDescription = post.node.frontmatter.description || ""

  // Convert Markdown to HTML first
  const htmlDescription = marked.parseInline(rawDescription)

  // Strip HTML tags to count characters
  const plainText = htmlDescription.replace(/<[^>]*>?/gm, "")

  // Trim to 30 characters
  const trimmedText = plainText.length > 30 ? plainText.slice(0, 30) + "..." : plainText

  // Convert trimmed plain text back to Markdown HTML
  const finalHtml = marked.parseInline(trimmedText)

  return (
    <div className="max-w-7xl xxs:mx-4 sm:mx-auto mt-10">
      <Fade duration={2200}>
        <div className="flex flex-row justify-space xxs:flex-col-reverse xs:flex-col-reverse sm:flex-row mb-5">
          <div className="max-h-80 w-11/12 xxs:ml-0 xxs:mr-0 sm:ml-5 sm:mr-5 xxs:mt-5 xxs:mb-5 flex flex-col justify-center bg-gradient-to-r from-pink to-purple p-8 rounded-xl lg:m-5 xxs:w-full xs:w-full sm:w-full lg:w-full">
            <Link to={post.node.fields.slug} style={{ textDecoration: "none" }}>
              <h1 className="text-white text-2xl font-semibold">
                {post.node.frontmatter.title}
              </h1>
            </Link>
            <p
              className="text-lg mt-4 text-white opacity-70 xxs:text-sm sm:text-lg"
              dangerouslySetInnerHTML={{ __html: finalHtml }}
            />
          </div>
          <div
            data-gatsby-image-wrapper=""
            className="my-5 mr-5 xxs:w-full xs:w-full sm:w-full lg:w-full"
          >
            <div className="overflow-hidden rounded-xl xxs:w-full">
              {post.node.frontmatter.featuredimage && (
                <Link
                  to={post.node.fields.slug}
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <div className="max-h-80 w-auto h-full object-cover flex justify-center">
                    <GatsbyImage
                      image={image}
                      alt={post.node.frontmatter.title}
                      placeholder="none"
                      backgroundColor="none"
                      layout="fullWidth"
                      formats={["auto", "webp", "avif"]}
                      quality={100}
                      className="img"
                    />
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default BlogHeader
