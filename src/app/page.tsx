import About from '@/components/About'
import Awards from '@/components/Awards'
import Blogs from '@/components/Blogs'
import Contact from '@/components/Contact-form'
import Details from '@/components/Details'
import Footer from '@/components/Footer'
import Gallery from '@/components/Gallery'
import HeroSection from '@/components/HeroSection'
import Insta from '@/components/Insta'
import IvfSection from '@/components/IvfSection'
import MainSection from '@/components/MainSection'
import Navbar from '@/components/Navbar'
import Qualification from '@/components/Qualification'
import Specialization from '@/components/Specialization'
import Testimonials from '@/components/Testimonials'
import React from 'react'

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <MainSection/>
      <Specialization/>
      <About/>
      <Qualification/>
      <IvfSection/>
      <Insta/>
      <Details/>
      <Awards/>
      <Gallery/>
      <Blogs />
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}
