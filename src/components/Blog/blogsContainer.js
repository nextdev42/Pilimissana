import React from "react"
import Input from "../Atoms/input"
import Button from "../Atoms/button"
import Fade from "react-reveal/Fade"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const BlogsContainer = ({ data }) => {
  const posts = data?.map(item => ({
    featuredimage: item.node.frontmatter.featuredimage,
    title: item.node.frontmatter.title,
    description: item.node.frontmatter.description,
    slug: item.node.fields.slug,
  }))

  return (
    <div className="max-w-7xl mx-auto mt-10 px-8 text-black">
      <Fade bottom cascade>
        <div className="grid grid-cols-3 gap-4 xxs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((blog, i) => (
            <div key={i}>
              <div className="overflow-hidden rounded-xl xxs:w-full">
                <Link to={blog.slug} style={{ textDecoration: "none", color: "black" }}>
                  <GatsbyImage
                    image={getImage(blog.featuredimage)}
                    alt={blog.title}
                    placeholder="none"
                    layout="cover"
                    formats={["auto", "webp", "avif"]}
                    quality={100}
                    className="img"
                  />
                </Link>
              </div>
              <div className="m-6">
                <Link to={blog.slug} style={{ textDecoration: "none", color: "black" }}>
                  <h1 className="text-2xl font-semibold mt-2 mb-4">{blog.title}</h1>
                </Link>
                <p className="text-sm opacity-50 mt-2">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Fade>

      {/* Netlify Newsletter Form */}
      <div className="w-auto p-8 m-4 h-72 sm:h-96 xs:h-96 xxs:h-96 mt-10 bg-gradient-to-r from-pink to-purple rounded-xl flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-black text-center">
          KUPATA MAKALA YETU
        </h2>
        <h3 className="text-lg mt-2 opacity-60 text-black text-center">
          Jiunge kwenye newsletter, tuta kutumia vitu vizuri tu!
        </h3>

        <form
          name="newsletter"
          method="POST"
          data-netlify="true"
          className="mt-10 flex flex-col items-center justify-center"
        >
          <input type="hidden" name="form-name" value="newsletter" />

          <input
            type="email"
            name="email"
            required
            placeholder="weak Email yako"
            className="text-black p-2 rounded mb-4"
          />

          <button
            type="submit"
            className="transition-all duration-500 ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-black hover:text-white rounded-lg border border-purple hover:bg-purple"
          >
            Jiunge
          </button>
        </form>
      </div>
    </div>
  )
}

export default BlogsContainer
