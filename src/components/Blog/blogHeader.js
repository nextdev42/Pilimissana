import { Link } from "gatsby"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import Fade from "react-reveal/Fade"
import { marked } from "marked"

const BlogHeader = ({ post }) => {
  const image = getImage(post.node.frontmatter.featuredimage?.childImageSharp)

  const rawDescription = post.node.frontmatter.description || ""
  const htmlDescription = marked.parseInline(rawDescription)
  const plainText = htmlDescription.replace(/<[^>]*>?/gm, "")
  const trimmedText = plainText.length > 130 ? plainText.slice(0, 130) + "..." : plainText
  const finalHtml = marked.parseInline(trimmedText)

  return (
    <div className="max-w-7xl xxs:mx-4 sm:mx-auto mt-10">
      <Fade duration={2200}>
        <div className="flex flex-row justify-space xxs:flex-col-reverse xs:flex-col-reverse sm:flex-row mb-5">
          <div className="max-h-80 w-11/12 sm:mx-5 xxs:my-5 flex flex-col justify-center bg-gradient-to-r from-pink to-purple p-8 rounded-xl lg:m-5 w-full">
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

          <div className="my-5 mr-5 w-full overflow-hidden rounded-xl">
            {image && (
              <Link to={post.node.fields.slug} style={{ textDecoration: "none", color: "black" }}>
                <div className="max-h-80 w-auto h-full object-cover flex justify-center">
                  <GatsbyImage image={image} alt={post.node.frontmatter.title} className="img" />
                </div>
              </Link>
            )}
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default BlogHeader
