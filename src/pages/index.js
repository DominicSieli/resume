import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>About Dominic</h1>
    <p>
      Dominic Sieli is a video game and software developer with over 10 years of experience.
      He graduated from ITT Technical Institute with a bachelor's degree in digital entertainment
      and game design. He has been very active in the game development community with accreditation
      on the hit Xbox 360 title Alan Wake, as well as self-published solo projects including 
      Munchy Mo (Google Play), Space Shark (Google Play) and Vector Blade (Xbox One).
    </p>
    <p>
      Dominic is a passionate programmer who is always looking for new challenges and opportunities
      to develop his skills. His stoic optimism gives him the grit and determination to overcome
      difficult tasks and finish challenging projects. Developing and publishing video games is no 
      easy task, especially for a solo developer. Dominic has proven that he can fallow difficult 
      projects to completion and deliver quality software.
    </p>
  </Layout>
)

export default IndexPage
