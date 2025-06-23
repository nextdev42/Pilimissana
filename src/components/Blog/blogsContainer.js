import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { marked } from "marked"

const BlogsContainer = ({ data }) => {
  const posts = data?.map(item => ({
    featuredimage: item.node.frontmatter.featuredimage,
    title: item.node.frontmatter.title,
    description: item.node.frontmatter.description,
    slug: item.node.fields.slug,
  }))

  return (
    <div className="max-w-7xl mx-auto mt-10 px-8 text-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((blog, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl bg-white shadow-md animate-fade-in transition-transform hover:scale-105"
          >
            <Link to={blog.slug} className="block">
              <GatsbyImage
                image={getImage(blog.featuredimage)}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
            </Link>
            <div className="p-6">
              <Link to={blog.slug}>
                <h2 className="text-2xl font-semibold mb-3 hover:text-purple transition-colors">
                  {blog.title}
                </h2>
              </Link>
              <p
                className="text-sm text-gray-600"
                dangerouslySetInnerHTML={{
                  __html: marked.parse(blog.description || ""),
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Form */}
      <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-pink to-purple text-center text-black">
        <h2 className="text-3xl font-bold">KUPATA MAKALA ZETU</h2>
        <p className="text-lg mt-2 opacity-70">
          Jiunge kwenye newsletter, tuta kutumia vitu vizuri tu!
        </p>

        <form
          name="newsletter"
          method="POST"
          data-netlify="true"
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <input type="hidden" name="form-name" value="newsletter" />
          <input
            type="email"
            name="email"
            required
            placeholder="Weka Email yako"
            className="w-full sm:w-auto p-2 rounded text-black"
          />
          <button
            type="submit"
            className="bg-white border border-purple text-purple font-medium px-6 py-2 rounded-lg hover:bg-purple hover:text-white transition-all"
          >
            Jiunge
          </button>
        </form>
      </div>
    </div>
  )
}

export default BlogsContainer
