import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Landing from "../components/Landing.js";
// import Navbar from "../components/Navbar/Navbar.js";
import Hero from "../components/Hero.js";
import About from "../components/About/About.js";
// import Services from "../components/Services/Services.js";
// import Portfolio from "../components/Portfolio/Portfolio.js";
// import Testimonials from "../components/Testimonials/Testimonials.js";
// import Contact from "../components/Contact/Contact.js";
// import Footer from "../components/Footer.js";

const IndexPage = () => (
  <div id="app">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Landing></Landing>
    {/* <app-navbar></app-navbar> */}
    <Hero></Hero>
    <About></About>
    {/* <app-services></app-services>
    <app-testimonials></app-testimonials>
    <app-portfolio></app-portfolio>
    <app-contact></app-contact>
    <app-footer></app-footer> */}
  </div>

)

export default IndexPage
