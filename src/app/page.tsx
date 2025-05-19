import About from '@/components/About'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Details from '@/components/Details'
import Hero from '@/components/Hero'
import InstaVideo from '@/components/InstaVideo'
import IVF from '@/components/IVF'
import Qualification from '@/components/Qualification'
import Specialization from '@/components/Specialization'
import Testimonials from '@/components/Testimonials'
import React from 'react'

export default function page() {
  return (
    <>
      <Hero />
      <About />
      <Specialization />
      <Qualification />
      <IVF />
      <InstaVideo/>
      <Details/>
      <Contact/>
      <Blog/>
      <Testimonials/>
    </>
  )
}
