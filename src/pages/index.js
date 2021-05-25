import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Resume" />
    <h1>Resume</h1>
    <h2>SKILLS</h2>
    <p>
         •  Programming: C/C++, and C#
    <br/>•  Game Engines: Unity, Unreal, and Godot
    <br/>•  Editors: Visual Studio, CodeBlocks, VS Code, and Vim
    <br/>•  Publishing Experience: Xbox One, and Google Play Store
    </p>
    <p>
    <h2>PUBLISHED GAMES</h2>
         •  Vector Blade (Xbox One) - Exploding Brain Games, 2019
    <br/>•  Space Shark (Google Play) - Exploding Brain Games, 2015
    <br/>•  Munchy Mo (Google Play) - Exploding Brain Games, 2014
    <br/>•  Alan Wake (Xbox 360) - Remedy Entertainment, 2010
    </p>
    <p>
    <h2>WORK EXPERIENCE</h2>
           Exploding Brain Games LLC, Phoenix, AZ - Owner
    <br/>  12/2013 - 04/2021
    <br/>  •  Owner
    <br/>  •  Solo Game Developer
    <br/>
    <br/>  CaptiveMotion LLC, Tempe, AZ - Performance Capture QA
    <br/>  08/2009 - 06/2011
    <br/>  •  Performance Capture Data Clean-Up
    <br/>  •  Performance Capture Camera Calibration
    <br/>  •  Performance Capture Marker and Actor Preparation
    </p>
    <p>
    <h2>EDUCATION</h2>
           ITT Technical Institute, Tempe AZ - Bachelor’s Degree
    <br/>  03/2007 - 03/2011
    <br/>  Bachelor of Computer Science in Digital Entertainment and Game Design
    <br/>  GPA 3.42
    </p>
  </Layout>
)

export default IndexPage
