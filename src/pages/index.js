import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Resume" />
    <h1>Resume</h1>
    <p>
    SKILLS
      Programming: C, C++, and C#
      Game Engines: Unity, Unreal, and Godot
      Editors: Visual Studio, CodeBlocks, VS Code, and Vim
      Publishing Experience: Xbox One, and Google Play Store
    </p>
    <p>
    PUBLISHED GAMES
      Vector Blade (Xbox One) - Exploding Brain Games, 2019
      Space Shark (Google Play) - Exploding Brain Games, 2015
      Munchy Mo (Google Play) - Exploding Brain Games, 2014
      Alan Wake (Xbox 360) - Remedy Entertainment, 2010
    </p>
    <p>
    WORK EXPERIENCE
      Exploding Brain Games LLC, Phoenix, AZ - Owner
      12/2013 - 04/2021
        Owner
        Solo Game Developer

      CaptiveMotion LLC, Tempe, AZ - Performance Capture QA
      08/2009 - 06/2011
        Performance Capture Data Clean-Up
        Performance Capture Camera Calibration
        Performance Capture Marker and Actor Preparation
    </p>
    <p>
    EDUCATION
      ITT Technical Institute, Tempe AZ - Bachelor’s Degree
      03/2007 - 03/2011
      Bachelor of Computer Science in Digital Entertainment and Game Design
      GPA 3.42
    </p>
  </Layout>
)

export default IndexPage
