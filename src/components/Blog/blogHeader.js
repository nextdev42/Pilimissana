import React from "react"
import { Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import Fade from "react-reveal/Fade"
import { marked } from "marked"

const BlogHeader = ({ post }) => {
  const featuredImage = getImage(post.node.frontmatter.featuredimage?.childImageSharp)
  const title = post.node.frontmatter.title
  const slug = post.node.fields.slug

  const rawDescription = post.node.frontmatter.description || ""
  const htmlDescription = marked.parseInline(rawDescription)
  const plainText = htmlDescription.replace(/<[^>]*>?/gm, "")
  const trimmedText = plainText.length > 130 ? plainText.slice(0, 130) + "..." : plainText
  const finalHtml = marked.parseInline(trimmedText)

  return (
    <div className="max-w-7xl xxs:mx-4 sm:mx-auto mt-10">
      <Fade duration={2200}>
        <div className="flex flex-row justify-space xxs:flex-col-reverse sm:flex-row mb-5">
          {/* Text content */}
          <div className="max-h-80 w-11/12 sm:mx-5 xxs:my-5 flex flex-col justify-center bg-gradient-to-r from-pink to-purple p-8 rounded-xl lg:m-5 w-full">
            <Link to={slug} style={{ textDecoration: "none" }}>
              <h1 className="text-white text-2xl font-semibold">{title}</h1>
            </Link>
            <p
              className="text-lg mt-4 text-white opacity-70 xxs:text-sm sm:text-lg"
              dangerouslySetInnerHTML={{ __html: finalHtml }}
            />
          </div>

          {/* Image content */}
          {featuredImage && (
            <div className="my-5 mr-5 w-full overflow-hidden rounded-xl">
              <Link to={slug} style={{ textDecoration: "none", color: "black" }}>
                <div className="max-h-80 w-auto h-full object-cover flex justify-center">
                  <GatsbyImage
                    image={featuredImage}
                    alt={title}
                    className="rounded-xl w-full h-full object-cover"
                  />
                </div>
              </Link>
            </div>
          )}
        </div>
      </Fade>
    </div>
  )
}

export default BlogHeader
