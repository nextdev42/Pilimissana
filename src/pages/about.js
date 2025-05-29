import React from "react"
import AboutPage from "../components/about/aboutPage"
import AboutTwo from "../components/about/aboutTwopage"
import AboutGrid from "../components/about/aboutGrid"
import Seo from "../components/seo"

import Layout from "../components/layout"
import AboutExtra from "../components/about/aboutExtra"
import AboutHeader from "../components/about/aboutHeader"

const About = () => {
  return (
    <Layout>
      <Seo
        title="Kuhusu - PILI Misana Foundation"
        description="Hii ni Sober house ya kwanza kuanzishwa Tanzania  bara mwaka 2012,na ilianza na waraibu 15 tu,na sasa imesaidiq waraibu zaidi ya 3500,na huduma tunazotoa ni tiba kwa waraibu wa pombe,bangi,heroin,cocaine,tramadol,na dawa nyingine za kulevya."
      ></Seo>
      <AboutHeader></AboutHeader>
      <AboutPage></AboutPage>
      <AboutGrid></AboutGrid>
      <AboutExtra></AboutExtra>
      <AboutTwo></AboutTwo>
    </Layout>
  )
}

export default About
