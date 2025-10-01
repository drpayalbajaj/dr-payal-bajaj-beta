'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useInView,Variants } from "framer-motion"

export default function About() {
  return (
    <>
      <Hero />
    </>
  )
}

function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' }) 

  const leftVariants:Variants = {
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  const rightVariants:Variants = {
    hidden: { opacity: 0, x: 200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  const fadeInVariants:Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      ref={ref}
      id="doctor"
      className="w-full relative overflow-x-hidden scroll-mt-28 md:scroll-mt-32"
    >
      {/* Modern gradient background */}
      <div className="bg-gradient-to-br from-white via-slate-50/50 to-violet-50/30 ">
        <div className="">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 lg:gap-20 items-center">
            
            {/* Left Content Column */}
            <motion.div
              className="w-full space-y-8"
              variants={leftVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                About the Doctor
              </div>

              {/* Doctor Name & Title */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Dr. Payal Bajaj
                </h1>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary/10 to-violet-100/50 rounded-xl">
                  <h2 className="text-xl md:text-2xl font-semibold text-primary">
                    Medical Director And Senior IVF Consultant
                  </h2>
                </div>
              </div>

              {/* Introduction */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-full -translate-y-12 translate-x-12"></div>
                
                <p className="text-lg text-gray-600 leading-relaxed relative">
                  Dr Payal Bajaj is an experienced obstetrician and gynecologist with over 20 years of experience in the discipline. She is also a Reproductive endocrinologist and Infertility specialist par excellence.
                </p>
              </div>

              {/* Key Highlight */}
              <motion.div
                variants={fadeInVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-r from-primary to-violet-400 rounded-2xl p-8 text-white relative overflow-hidden"
              >
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-32 h-32 border border-white/20 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-20 h-20 border border-white/10 rounded-full"></div>
                </div>
                
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-4 leading-tight">
                    Creating Miracles with Personalized IVF Solutions for Growing Families
                  </h3>
                  <p className="text-lg leading-relaxed opacity-90">
                    Dr. Payal Bajaj, one of the best and most highly reputable gynaecologists, is an IVF specialist in Delhi. She helps provide detailed explanations and solutions for any condition concerning the female reproductive system.
                  </p>
                </div>
              </motion.div>

              {/* Experience Section */}
              <motion.div
                variants={fadeInVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ delay: 0.3 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {/* Experience Card */}
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    {/* CHANGED HERE: Made text bigger */}
                    <h4 className="text-2xl font-bold text-gray-900">20+ Years</h4>
                  </div>
                  {/* CHANGED HERE: Made text bigger, darker, and slightly bolder */}
                  <p className="text-md text-gray-700 font-medium">Of Experience in Reproductive Medicine</p>
                </div>

                {/* Awards Card */}
                <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    {/* CHANGED HERE: Made text bigger */}
                    <h4 className="text-2xl font-bold text-gray-900">Awards</h4>
                  </div>
                  {/* CHANGED HERE: Made text bigger, darker, and slightly bolder */}
                  <p className="text-md text-gray-700 font-medium">Academic Excellence Throughout Career</p>
                </div>
              </motion.div>

              {/* Expertise Description */}
              <motion.div
                variants={fadeInVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-slate-50 to-violet-50/50 rounded-2xl p-8 border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="space-y-3">
                    {/* CHANGED HERE: Made text bigger */}
                    <h4 className="text-2xl font-bold text-gray-900">Evidence-Based Care Philosophy</h4>
                    {/* CHANGED HERE: Made text slightly bigger and darker for readability */}
                    <p className="text-lg text-gray-900 font-medium leading-relaxed">
                      Dr Payal Bajaj has won various academic awards throughout her career. She is expert at stimulating and following up ovarian cycles in different types of infertile patients and is a strong believer in individualized management of infertility. She sticks to evidence-based protocols and strives to provide competent, rational, ethical, and transparent clinical care to infertile couples.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Image Column */}
            <motion.div
              className="w-full flex justify-center lg:justify-end"
              variants={rightVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <div className="relative">
                {/* Background gradient effect */}
                <div className="absolute -inset-6 bg-gradient-to-r from-primary/20 to-violet-200/40 rounded-3xl blur-2xl"></div>
                
                {/* Image container */}
                <div className="relative bg-white rounded-3xl p-6 shadow-2xl border border-white/20">
                  <div className="relative rounded-2xl overflow-hidden">
                    <Image
                      src="/image/hero/WhatsApp Image 2025-09-10 at 22.54.07_d9f2a3af.jpg"
                      width={500}
                      height={600}
                      alt="Dr. Payal Bajaj - Medical Director And Senior IVF Consultant"
                      className='w-full h-auto object-cover'
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  </div>
                  
                  {/* Doctor info overlay */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl p-4 border border-white/50">
                    <h3 className="font-bold text-gray-900 text-lg">Dr. Payal Bajaj</h3>
                    <p className="text-primary font-medium text-sm">IVF Specialist & Medical Director</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm text-gray-600">20+ Years Experience</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-violet-300/30 rounded-full animate-pulse delay-1000"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-tr from-violet-100/30 to-transparent rounded-full blur-3xl"></div>
    </section>
  )
}