import React from "react"
import Fade from "react-reveal/Fade"

const FeaturedBlog = ({ posts }) => {
  return (
    <Fade duration={2200}>
      <div className="bg-transparent">
        <div className="pt-6 px-6 lg:px-0 mx-auto max-w-screen-xl lg:pt-8">
          <h2 className="text-black text-4xl opacity-70 font-semibold pl-4">
            Machapisho Mapya
          </h2>
          <h3 className="text-black pl-4 text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl text-gradient bg-gradient-to-r from-pink to-purple">
            Makala mpya
          </h3>

          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {posts.map(({ node }, index) => {
              const { title, date } = node.frontmatter
              const { slug } = node.fields
              const trimmed = node.rawMarkdownBody
                .replace(/^#+\s+/gm, "") // Remove headings
                .replace(/\*\*|__|[*_`~]/g, "") // Remove emphasis and inline styles
                .split(/\s+/)
                .slice(0, 38)
                .join(" ") + "..
              return (
                <div
                  key={slug}
                  className={`blog-hover rounded-lg p-8 md:p-12 ${
                    index === 0
                      ? "bg-gradient-to-r from-pink to-purple text-black border border-gray-200 mb-8"
                      : "bg-white text-gray-900"
                  }`}
                >
                  <h2 className="text-3xl font-semibold mb-2">{title}</h2>
                  <p className="text-lg font-normal opacity-70 mb-4">
                    {trimmed}
                  </p>
                  <a
                    href={slug}
                    className="transition-all duration-500 ease-in-out inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-black hover:text-white rounded-lg border border-purple hover:bg-purple"
                  >
                    Soma zaidi
                    <svg
                      className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default FeaturedBlog
