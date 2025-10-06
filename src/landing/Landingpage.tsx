import Navbar from './Navbar'
import Main from './Main'
import Banner from './Banner'
 import DoctorProfile from './DoctorProfile'
import Successstories from './Successstories'
import  WhyChoose from './WhyChoose'
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
      <Successstories/>
      <WhyChoose/>
      <Faq/>
      <Contactus/>
      <Footers/>
    </>
  )
}
