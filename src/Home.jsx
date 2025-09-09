import React from 'react'
import {Outlet} from "react-router-dom"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import ToolsIUse from './components/Tools'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './Footer'




const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <ToolsIUse />
        <Projects />
        <Testimonials />
        <Contact />
        {/* Renders the matched child route component */}
        <Outlet />
        <Footer />
    </div>
  )
}

export default Home