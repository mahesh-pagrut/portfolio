import React, { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from "./components/hero/Hero"
import Skills from "./components/skills/Skills";
// import Experience from "./components/experience/Experience";
import Language from "./components/language/Language";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  useEffect(()=>{
    AOS.init({
      duration:1000,
    })
  },[]);
  return (
    <main className='bg-[#0d182e]'>
      <Navbar/>
      <Hero/>
      <Skills/>
      {/* <Experience/> */}
      <Language/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  )
}