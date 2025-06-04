import React from "react"
import Fade from "react-reveal/Fade"
import { Link } from "gatsby"

const FeaturedBlog = ({ posts }) => {
  if (!posts || posts.length === 0) return null

  const [mainPost, ...otherPosts] = posts.slice(0, 3)

  // Trim to 45 words helper
  const trimToWords = (text, count = 45) => {
    if (!text) return ""
    const words = text.trim().split(/\s+/)
    return words.slice(0, count).join(" ") + (words.length > count ? "..." : "")
  }

  return (
    <Fade duration={2200}>
      <div className="bg-transparent">
        <div className="pt-6 px-6 lg:px-0 mx-auto max-w-screen-xl lg:pt-8">
          <h2 className="text-black text-4xl opacity-70 font-semibold pl-4">
            Machapisho Mapya
          </h2>
          <h3 className="text-black pl-4 text-6xl font-bold text-gradient bg-gradient-to-r from-pink to-purple">
            Makala mpya
          </h3>

          {/* Main Featured Post */}
          <div className="blog-hover bg-gradient-to-r from-pink to-purple border mt-10 border-gray-200 rounded-lg p-8 md:p-12 mb-8">
            <h2 className="text-black text-3xl font-semibold mb-2">
              {mainPost.node.frontmatter.title}
            </h2>
            <p className="text-lg text-black opacity-60 mb-6">
              {trimToWords(mainPost.node.rawMarkdownBody, 45)}
            </p>
            <Link
              to={`/blog${mainPost.node.fields.slug}`}
              className="inline-flex items-center py-2.5 px-5 text-base font-medium text-black hover:text-white rounded-lg border border-purple hover:bg-purple transition-all duration-500 ease-in-out"
            >
              Soma zaidi
              <svg className="w-3.5 h-3.5 ml-2" viewBox="0 0 14 10" fill="none">
                <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Other 2 Posts */}
          <div className="grid md:grid-cols-2 gap-8">
            {otherPosts.map(({ node }) => (
              <div key={node.fields.slug} className="blog-hover bg-white rounded-lg p-8 md:p-12">
                <h2 className="text-gray-900 text-3xl font-semibold mb-2">
                  {node.frontmatter.title}
                </h2>
                <p className="text-lg text-gray-500 mb-4">
                  {trimToWords(node.rawMarkdownBody, 45)}
                </p>
                <Link
                  to={`/blog${node.fields.slug}`}
                  className="inline-flex items-center py-2.5 px-5 text-base font-medium text-black hover:text-white rounded-lg border border-purple hover:bg-purple transition-all duration-500 ease-in-out"
                >
                  Soma zaidi
                  <svg className="w-3.5 h-3.5 ml-2" viewBox="0 0 14 10" fill="none">
                    <path d="M1 5h12m0 0L9 1m4 4L9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default FeaturedBlog
