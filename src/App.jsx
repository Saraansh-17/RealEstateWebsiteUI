import React from 'react'
import Header from './Components/Header'
import About from './Components/About'
import Projects from './Components/Projects'
import Testimonials from './Components/Testimonials'
import ContactUs from './Components/ContactUs'
import Footer from './Components/Footer'
import { ToastContainer, toast } from 'react-toastify';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Timeline } from 'gsap/gsap-core'

gsap.registerPlugin(useGSAP,ScrollTrigger,ScrollSmoother);



const App = ()=>{


  useGSAP(()=>{
    let tl = gsap.timeline()
    tl.from('#Header',{
    z:-1000,
    opacity:0,
    delay:0.3,
    duration:0.7,
    })
    tl.from('.nav',{
    y: -100,
    opacity:0,
    duration:1,
    stagger:0.3
    })
    tl.from('.head',{
    y: -100,
    opacity:0,
    duration:0.5,
    stagger:0.3
    })
    tl.from('.about',{
    x: -100,
    opacity:0,
    delay:0.4,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
      trigger: ".about",
    }
    })
  })

  return (
    <div>
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Testimonials />
      <ContactUs/>
      <Footer />
    </div>
  )
}

export default App
