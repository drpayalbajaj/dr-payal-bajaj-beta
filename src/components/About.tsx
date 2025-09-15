// 'use client'
// import Image from 'next/image'
// import React, { useRef } from 'react'
// import { motion, useInView } from "motion/react"

// export default function About() {
//   return (
//     <>
//       <Hero />
//     </>
//   )
// }

// function Hero() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: '-100px' }) 

//   const leftVariants = {
//     hidden: { opacity: 0, x: -200 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.8, ease: 'easeOut' },
//     },
//   }

//   const rightVariants = {
//     hidden: { opacity: 0, x: 200 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.8, ease: 'easeOut' },
//     },
//   }

//   return (
//     <section
//       ref={ref}
//       id="about"
//       className="w-full relative overflow-x-hidden"
//     >
//       <div className="w-full relative grid lg:grid-cols-2 grid-cols-1 md:gap-5 gap-7">
//         <motion.div
//           className="w-full relative h-full flex flex-col justify-center"
//           variants={leftVariants}
//           initial="hidden"
//           animate={isInView ? 'visible' : 'hidden'}
//         >
//           <h2 className="text-4xl font-light text-primary leading-[1.1]">
//             About the Doctor
//           </h2>
//           <h2 className="mt-4 md:text-3xl text-5xl font-bold text-primary leading-[1.1]">
//             Dr. Payal Bajaj
//           </h2>

//           <p className="mt-2 text-2xl leading-[1.1] font-medium text-dark">
//             Medical Director And Senior IVF Consultant
//           </p>
//           <span className="mt-2 text-steel-gray text-lg leading-[1.2]">
//             Dr Payal Bajaj is an experienced obstetrician and gynecologist with over 20 years of experience in the discipline. She is also a Reproductive endocrinologist and Infertility specialist par excellence.
//           </span>

//           <h3 className="mt-3 text-2xl text-dark font-bold leading-[1.1]">
//             Dr. Payal Bajaj Creating Miracles Personalized IVF Solutions for Growing Families.
//           </h3>

//           <span className="mt-2 text-steel-gray text-lg leading-[1.2]">
//             Dr. Payal Bajaj, one of the best and most highly reputable gynaecologists, is an IVF specialist in Delhi. She helps provide a detailed explanation and solution to any condition concerning the female reproductive system.
//           </span>

//           <h3 className="mt-3 text-2xl text-dark font-bold leading-[1.1]">
//             20 years of experience
//           </h3>

//           <span className="mt-2 text-steel-gray text-lg leading-[1.2]">
//             Dr Payal Bajaj has won various academic awards all through her academic career. She is expert at stimulating following up ovarian cycles in different types of infertile patients and is a strong believer in an individualized management of infertility. She sticks to evidence-based protocols and strives to provide competent, rational, ethical, and transparent clinical care to the infertile couple.
//           </span>
//         </motion.div>

//         <motion.div
//           className="w-full relative h-full flex items-center lg:justify-end justify-center"
//           variants={rightVariants}
//           initial="hidden"
//           animate={isInView ? 'visible' : 'hidden'}
//         >
//           <Image
//             src="/image/hero/about.jpg"
//             width={1000}
//             height={1000}
//             alt="Hero Image"
//             className='w-[500px] h-auto object-cover'
//           />
//         </motion.div>
//       </div>
//     </section>
//   )
// }
'use client'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from "motion/react" 
import { BeakerIcon, HeartIcon, SparklesIcon, ShieldCheckIcon, CurrencyDollarIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

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

  const [activeTab, setActiveTab] = useState<'vision' | 'mission'>('vision')
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Data for our feature cards
  const featuresData = [
    {
      icon: <SparklesIcon />,
      title: "Extensive Treatments",
      description: "A complete range of fertility services under one roof, from ovulation induction and IUI to advanced reproductive surgery."
    },
    {
      icon: <HeartIcon />,
      title: "Boutique IVF Centre",
      description: "The first in Delhi designed for maximum comfort, creating a serene environment to reduce patient stress and anxiety."
    },
    {
      icon: <BeakerIcon />,
      title: "State-of-the-Art Lab",
      description: "Our modular IVF lab and OT complex feature the latest equipment available for the best possible outcomes."
    },
    {
      icon: <ShieldCheckIcon />,
      title: "High Success Rates",
      description: "Protocols designed for high success rates, with proven results for patients with previous failed IVF cycles and advanced age."
    },
    {
      icon: <CurrencyDollarIcon />,
      title: "Easy EMI Facility",
      description: "We provide pocket-friendly loan options at 0% interest to ensure treatment is accessible for everyone."
    },
    {
      icon: <ChatBubbleLeftRightIcon />,
      title: "Free Counselling",
      description: "Benefit from free, confidential counselling sessions with our team of experienced fertility experts."
    },
  ];

  const leftVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const rightVariants = {
    hidden: { opacity: 0, x: 200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section ref={ref} id="Aboutus" className="w-full relative overflow-x-hidden">

      {/* ===== HERO SECTION WITH MODERN GRADIENT ===== */}
      <div className="">
        <div className=" ">
          <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">
            <motion.div
              className="w-full space-y-6"
              variants={leftVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
                <SparklesIcon className="w-4 h-4 mr-2" />
                Best IVF Centre in Delhi
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Building Dreams,<br />
                <span className="text-primary">One Family</span> at a Time
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                <a href="http://nandiivf.com/" target="_blank" rel="noreferrer" className="text-primary font-medium hover:underline transition-all duration-200">
                  Nandi IVF
                </a> delivers happiness through efficient, ethical, and comprehensive healthcare that transcends all barriers.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
                Schedule your free consultation today and take the first step toward building the family of your dreams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="#contact"
                  className="px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
                >
                  Book Consultation
                </Link>
                <Link 
                  href="#ivf"
                  className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-200 text-center"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              className="w-full flex justify-center lg:justify-end"
              variants={rightVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-violet-200/40 rounded-2xl blur-2xl"></div>
                <Image 
                  src="/image/hero/IMG_0404.JPG" 
                  width={550} 
                  height={550} 
                  alt="Hero Image" 
                  className="relative w-full max-w-[550px] h-auto object-cover rounded-2xl shadow-2xl border border-white/20" 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ===== FEATURES SECTION ===== */}
      <div className="bg-white py-20 md:py-28">
        <div className=" mx-auto ">
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What sets <span className="text-primary">Nandi IVF</span> apart
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience world-class fertility care with our comprehensive services and cutting-edge technology
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            {featuresData.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <FeatureCard 
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  isHovered={hoveredCard === index}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== VISION/MISSION SECTION WITH BLENDED BACKGROUND ===== */}
      <div className="relative py-20 md:py-28 overflow-hidden rounded-3xl mx-6 md:mx-12 lg:mx-auto max-w-7xl my-10">
        {/* Background Image and Overlay */}
        <div className="absolute inset-0">
          <Image 
            src="/image/hero/andriyko-podilnyk-uwnw5sxqpN4-unsplash.jpg" 
            alt="Hands cradling newborn feet, symbolizing care and new life at Nandi IVF"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            className="w-full max-w-2xl mx-auto"
            variants={fadeInVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <div className="bg-white/30 backdrop-blur-2xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
              <div className="relative">
                {/* Modern Tab Switcher */}
                <div className="relative flex w-full max-w-sm mx-auto p-1.5 rounded-full bg-gray-100/70 mb-10">
                  <motion.div
                    layout
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute top-1.5 bottom-1.5 bg-white rounded-full shadow-sm"
                    animate={{
                      left: activeTab === 'vision' ? '3px' : 'calc(50% + 1.5px)',
                      width: 'calc(50% - 4.5px)',
                    }}
                  />
                  <button 
                    onClick={() => setActiveTab('vision')}
                    className={`relative z-10 flex-1 py-3 px-4 text-center text-lg font-semibold transition-colors duration-300 rounded-full ${
                      activeTab === 'vision' 
                        ? 'text-primary' 
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    Our Vision
                  </button>
                  <button 
                    onClick={() => setActiveTab('mission')}
                    className={`relative z-10 flex-1 py-3 px-4 text-center text-lg font-semibold transition-colors duration-300 rounded-full ${
                      activeTab === 'mission' 
                        ? 'text-primary' 
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    Our Mission
                  </button>
                </div>
                
                {/* Content Area */}
                <div className="relative min-h-[280px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="text-center"
                    >
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        {activeTab === 'vision' ? (
                          <SparklesIcon className="w-8 h-8 text-primary" />
                        ) : (
                          <HeartIcon className="w-8 h-8 text-primary" />
                        )}
                      </div>
                      <h3 
                        className="text-3xl md:text-4xl font-bold mb-6"
                        style={{ color: '#111827' }} 
                      >
                        {activeTab === 'vision' ? 'Our Vision' : 'Our Mission'}
                      </h3>
                      <p 
                        className="text-lg font-medium leading-relaxed max-w-lg mx-auto"
                        style={{ color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }} 
                      >
                        {activeTab === 'vision' ? (
                          <>
                            At <strong 
                              className="font-bold" 
                              style={{ color: '#a78bfa' }}
                            >Nandi IVF</strong>, we believe everyone deserves their own happy family. We strive to provide world-class assisted reproductive technologies backed by the highest quality standards to families around the globe.
                          </>
                        ) : (
                          <>
                            Our mission at <strong 
                              className="font-bold" 
                              style={{ color: '#a78bfa' }}
                            >Nandi IVF</strong> is to provide empathetic and evidence-based fertility care tailored to meet each patient's specific needs with compassion and excellence.
                          </>
                        )}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon,
  title,
  description,
  isHovered,
}: {
  icon: React.ReactNode
  title: string
  description: string
  isHovered: boolean
}) {
  return (
    <div
      className="group relative bg-white/70 backdrop-blur-xl border border-gray-100 rounded-2xl p-8 h-full flex flex-col justify-start 
               hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 
               transition-all duration-500 ease-out"
    >
      {/* Glow background */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-violet-100/30 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl" />

      {/* Icon container */}
      <div className="relative w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-violet-100
                       group-hover:from-primary group-hover:to-violet-400 transition-all duration-500">
        {React.cloneElement(icon as React.ReactElement, {
          className: `w-8 h-8 transition-all duration-500 ${
            isHovered ? 'text-white scale-110' : 'text-primary'
          }`,
        })}
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>

      {/* Divider */}
      <div className="w-12 h-0.5 bg-gradient-to-r from-primary/70 to-transparent mb-4 group-hover:w-16 transition-all duration-500"></div>

      {/* Description */}
      <p className="text-lg font-medium text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
        {description}
      </p>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-all duration-500 
                       bg-gradient-to-r from-primary/40 via-violet-300/40 to-transparent rounded-b-2xl" />
    </div>
  )
}


// function TeamMember({ name, title, imageSrc, altText }: { name: string, title: string, imageSrc: string, altText: string }) {
//   return (
//     <div className="flex flex-col items-center max-w-sm group">
//       <div className="relative">
//         {/* Gradient background */}
//         <div className="absolute -inset-1 bg-gradient-to-r from-primary to-violet-400 rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
        
//         {/* Image container */}
//         <div className="relative w-48 h-48 rounded-full border-4 border-white overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300">
//           <Image 
//             src={imageSrc} 
//             alt={altText} 
//             fill 
//             className="object-cover group-hover:scale-105 transition-transform duration-500" 
//           />
//         </div>
        
//         {/* Action button */}
//         <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary w-12 h-12 rounded-full flex justify-center items-center shadow-xl cursor-pointer hover:bg-primary/90 hover:scale-110 transition-all duration-300 group-hover:shadow-2xl">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//             <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//           </svg>
//         </div>
//       </div>
      
//       <div className="mt-8 text-center">
//         <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
//           {name}
//         </h3>
//         <p className="text-base text-gray-600 leading-relaxed max-w-xs">
//           {title}
//         </p>
//       </div>
//     </div>
//   )
// }
