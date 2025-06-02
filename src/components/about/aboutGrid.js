import React from "react"
import AboutTeamCard from "./aboutTeamCard"

const AboutGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-20 grid grid-cols-3 gap-16 justify-items-center xxs:grid-cols-1 sm:grid-cols-3">
      <AboutTeamCard
        imgSrc="https://i.postimg.cc/25QCt4TX/Polish-20250602-192514223.jpg"
        position="Waraibu waliopona"
      ></AboutTeamCard>
      <AboutTeamCard
        imgSrc="https://i.postimg.cc/NfVYjgMt/Polish-20250602-194858542.jpg"
        position="Vyakula kama sehemu ya tiba"
      ></AboutTeamCard>
      <AboutTeamCard
        imgSrc="https://i.postimg.cc/ZnWbw0Rf/Polish-20250602-200058560.jpg"
        position="Kazi Mbali Mbali za mikono kama sehemu ya tiba"
      ></AboutTeamCard>
    </div>
  )
}

export default AboutGrid
