import React from "react"
import Gallery from "../components/gallery-page"
import Layout from "../components/layout"
import Seo from "../components/seo"

const GalleryPage = () => {
  return (
    <Layout>
      <Seo
        title="Pilimissana Sober - picha"
        description="picha zetu ni sehemu ya kujifunza kwa kujionea mazingira mbali mbali ya sober zetu ambapo waraibu huishi wakipata matibabu, utajionea malazi, makazi, chakula, shughuli mbali mbali za mikono nk"
      ></Seo>
      <Gallery></Gallery>
    </Layout>
  )
}

export default GalleryPage
