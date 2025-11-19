import Doctor from '@/components/Doctor'
import About  from '@/components/Aboutus'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Details from '@/components/Details'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import InstaVideo from '@/components/InstaVideo'
import IVF from '@/components/IVF'
import Qualification from '@/components/Qualification'
import Specialization from '@/components/Specialization'
import Testimonials from '@/components/Testimonials'
// import Page from '@/landing/page'


import React from 'react'


export default function page() {
  return (
    <>
      <Header />
      <Hero />
      <Doctor/>
      <Testimonials />
      <About/>
      <Specialization />
      <Qualification />
      <IVF />
      <InstaVideo />
      <Details />
      <Contact />
      <Blog />
      <Footer />
      {/* <Page/> */}
     
    </>
  )
}
