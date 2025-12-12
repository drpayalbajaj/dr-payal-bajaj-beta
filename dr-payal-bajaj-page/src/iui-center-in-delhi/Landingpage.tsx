// Updated: Landingpage.tsx
import Navbar from './Navbar'
import Main from './Main'
import Banner from './Banner'
import DoctorProfile from './DoctorProfile'
import Successstories from './Successstories'
import WhyChoose from './WhyChoose'
import IUISection from './IUISection' // New import
import Faq from './Faq'
import Contactus from './Contactus'
import Footers from './Footers'
import React from 'react'

export default function page() {
  return (
    <>
      <Navbar/>
      <Main/>
      <Banner/>
      <DoctorProfile/>
      <IUISection /> {/* New section added here for logical flow after DoctorProfile */}
      <Successstories/>
      <WhyChoose/>
      <Faq/>
      <Contactus/>
      <Footers/>
    </>
  )
}