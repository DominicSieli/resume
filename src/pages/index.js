import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>
      I am Dominic Sieli. I am a game developer and really enjoy programming video games.
      I have programmed several video games from idea to publishing on multiple platforms.
      These video games were primarily developed using Unity with C# and now I am currently
      developing an open source game engine with C++.
    </p>
    <p>
      As someone who has a background in executing ideas all the way to publishing them on
      public platforms, I feel that I could bring an excellent skillset to your team as a 
      software engineer.
    </p>
  </Layout>
)

export default IndexPage
