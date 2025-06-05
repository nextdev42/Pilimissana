import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Fade from "react-reveal/Fade"

import HeroImage from "../images/3D-liquid-abstract-2.webp"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query GalleryImagesQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/gallery/" } }
        sort: { frontmatter: { title: ASC } }
      ) {
        nodes {
          id
          frontmatter {
            title
            image
          }
        }
      }
    }
  `)

  const galleryItems = data.allMarkdownRemark.nodes

  return (
    <div className="max-w-7xl mx-auto mt-10">
      <Fade duration={2200}>
        <div className="flex flex-row justify-space xxs:flex-col-reverse xs:flex-col-reverse sm:flex-row xxs:flex-col xs:flex-col sm:flex-row mb-5">
          <div className="max-h-80 w-1/2 flex flex-col justify-center bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-4 xxs:w-full xs:w-full sm:w-full lg:w-full">
            <h1 className="text-black opacity-70 text-4xl font-semibold">
              GALLERY
            </h1>
            <h1 className="text-white text-6xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-6xl">
              Holo Starter Theme
            </h1>
            <p className="text-lg mt-4 text-white opacity-70 xxs:text-sm sm:text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="rounded-xl w-auto h-full object-cover flex justify-center">
            <img src={HeroImage} alt="HeroImage" />
          </div>
        </div>
      </Fade>

      <div className="max-w-7xl mx-auto px-8 mt-5">
        <Fade bottom cascade>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            {galleryItems.map(({ id, frontmatter }) => (
              <a
                key={id}
                href="#"
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 md:h-80"
              >
                <img
                  src={frontmatter.image}
                  loading="lazy"
                  alt={frontmatter.title}
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  {frontmatter.title}
                </span>
              </a>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Gallery
