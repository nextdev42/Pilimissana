import React from "react"
import AboutTeamCard from "./aboutTeamCard"

const AboutGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-20 grid grid-cols-3 gap-16 justify-items-center xxs:grid-cols-1 sm:grid-cols-3">
      <AboutTeamCard
        imgSrc="https://i.postimg.cc/25QCt4TX/Polish-20250602-192514223.jpg"
        position="Holographic Liquid"
      ></AboutTeamCard>
      <AboutTeamCard
        imgSrc="https://i.postimg.cc/WbBzjWWc/Holographic-Liquid2.webp"
        position="Holographic Liquid"
      ></AboutTeamCard>
      <AboutTeamCard
        imgSrc="https://i.postimg.cc/907FTc4F/Holographic-Liquid1.webp"
        position="Holographic Liquid"
      ></AboutTeamCard>
    </div>
  )
}

export default AboutGrid
