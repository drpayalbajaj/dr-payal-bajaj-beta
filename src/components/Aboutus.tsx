'use client'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from "motion/react" 
import { BeakerIcon, HeartIcon, SparklesIcon, ShieldCheckIcon, CurrencyDollarIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

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

  return (
    <section ref={ref} id="Aboutus" className="w-full relative overflow-x-hidden py-12 md:py-20 px-6 md:px-12">

      {/* ===== TOP HERO SECTION ===== */}
      <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-12 items-center mb-20">
        <motion.div
          className="w-full"
          variants={leftVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <h2 className="text-4xl font-light text-primary leading-[1.1]">Best IVF Centre In Delhi</h2>
          <p className="mt-4 text-steel-gray text-lg leading-relaxed max-w-4xl">
            <a href="http://nandiivf.com/" target="_blank" rel="noreferrer" className="underline hover:text-primary transition">
              Nandi IVF
            </a> is a unique IVF centre focused on delivering happiness to aspiring parents through efficient, ethical, and comprehensive health care services that transcend social, geographical, and logistical barriers.
          </p>
           <p className="mt-4 text-steel-gray text-lg leading-relaxed max-w-4xl">
             If you are interested in learning more about our fertility services or would like to schedule a free consultation, please get in touch with us today. We look forward to helping you build the family of your dreams.
          </p>
        </motion.div>
        
        <motion.div
          className="w-full flex justify-center lg:justify-end"
          variants={rightVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <Image src="/image/hero/IMG_0404.JPG" width={500} height={500} alt="Hero Image" className="w-[500px] h-auto object-cover rounded-lg" />
        </motion.div>
      </div>

      {/* ===== NEW TWO-COLUMN LAYOUT WITH STICKY IMAGE ===== */}
      <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-12 lg:gap-20">
        
        {/* --- LEFT COLUMN (SCROLLING CONTENT) --- */}
        <div className="w-full">
          {/* Redesigned Features Section */}
          <div>
            <h2 className="text-3xl font-bold leading-tight text-dark text-center mb-8">
              What sets <span className="text-primary font-bold">Nandi IVF</span> apart
            </h2>
            <div className="flex space-x-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-x-0 lg:overflow-visible">
              {featuresData.map((feature, index) => (
                <div 
                  key={index} 
                  className="w-80 flex-shrink-0 lg:w-auto"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <FeatureCard 
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    isHovered={hoveredCard === index}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ===== START: REDESIGNED VISION & MISSION SECTION ===== */}
          <div className="mt-20 relative bg-slate-50 p-8 rounded-xl shadow-inner border border-violet-800">
            
            {/* Decorative Quote Icon in the background */}
            <span className="absolute top-4 left-4 text-8xl text-slate-400 font-serif -z-0">“</span>

            {/* Modern Pill Switcher */}
            <div className="relative flex w-full max-w-xs mx-auto p-1 rounded-full bg-slate-200 mb-8">
              {/* Sliding active indicator */}
              <motion.div
                layout
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`absolute inset-0 h-full bg-primary rounded-full`}
                style={{
                  left: activeTab === 'vision' ? '2%' : '50%',
                  right: activeTab === 'mission' ? '2%' : '50%',
                }}
              />
              <button 
                onClick={() => setActiveTab('vision')}
                className={`relative z-10 w-1/2 py-2 text-center text-sm font-bold transition-colors duration-300 ${activeTab === 'vision' ? 'text-white' : 'text-slate-600 hover:text-black'}`}
              >
                Our Vision
              </button>
              <button 
                onClick={() => setActiveTab('mission')}
                className={`relative z-10 w-1/2 py-2 text-center text-sm font-bold transition-colors duration-300 ${activeTab === 'mission' ? 'text-white' : 'text-slate-600 hover:text-black'}`}
              >
                Our Mission
              </button>
            </div>
            
            {/* Animated Text Area */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="text-center text-steel-gray leading-relaxed"
                >
                  {activeTab === 'vision' ? (
                    <p>
                      At <strong>Nandi IVF</strong>, we believe everyone deserves their own happy family, which is why we strive to provide some of the best assisted reproductive technologies backed by high-quality standards to families around the globe.
                    </p>
                  ) : (
                    <p>
                      Our mission at <strong>Nandi IVF</strong> is to provide empathetic and evidence-based fertility care tailored to meet each patient’s specific needs.
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          {/* ===== END: REDESIGNED VISION & MISSION SECTION ===== */}
        </div>

        {/* --- RIGHT COLUMN (STICKY IMAGE) --- */}
        <div className="w-full h-full hidden lg:block">
           <div className="sticky top-24 h-full">
             <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
               <Image 
                 src="/image/hero/andriyko-podilnyk-uwnw5sxqpN4-unsplash.jpg" 
                 alt="Hands cradling newborn feet, symbolizing care and new life at Nandi IVF"
                 layout="fill"
                 objectFit="cover"
               />
             </div>
           </div>
        </div>
      </div>
      
      {/* ===== RESTORED SECTIONS ===== */}
      <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold leading-tight">
          Our <span className="text-primary">Clinical Team</span>
        </h2>
        <p className="mt-2 text-steel-gray max-w-2xl mx-auto">
          We have a team of specialists with decades of experience committed to providing every patient with the highest quality care.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-12">
          <TeamMember name="Dr. Payal Bajaj" title="Medical Director And Senior IVF Consultant" imageSrc="/image/hero/payal.jpg" altText="Dr. Payal Bajaj" />
          <TeamMember name="Dr VED PRAKASH" title="(MSc., PhD.) Consultant Clinical Embryologist" imageSrc="/image/hero/ved-1.jpg" altText="Dr VED PRAKASH" />
        </div>
      </section>
      <section className="mt-12 text-center pb-12">
        <h2 className="text-3xl font-bold leading-tight">
          Meet Our <span className="text-primary">Founder</span>
        </h2>
        <p className="mt-2 text-steel-gray max-w-2xl mx-auto">
          We have a team of specialists with decades of experience committed to providing every patient with the highest quality care.
        </p>
        <div className="mt-8 flex justify-center">
          <TeamMember name="Dr. Sanjay Bajaj" title="(Managing Director & Founder)" imageSrc="/image/hero/nv1-1.jpg" altText="Dr. Sanjay Bajaj" />
        </div>
      </section>
    </section>
  )
}


function FeatureCard({ icon, title, description, isHovered }: { icon: React.ReactNode, title: string, description: string, isHovered: boolean }) {
  
  // Define styles directly in JavaScript objects for guaranteed override
  const circleStyle = {
    backgroundColor: isHovered ? '#875ba6' : '#EBE8EF', // Deep purple or light purple
    transition: 'background-color 300ms ease-in-out',
  };

  const iconStyle = {
    color: isHovered ? 'white' : '#875ba6', // White or deep purple
    transition: 'color 300ms ease-in-out',
  };

  return (
    <div className="bg-white rounded-lg p-6 h-full flex flex-col shadow-md hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300 ease-in-out cursor-pointer border border-gray-200  hover:border-primary">
      
      <div 
        className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full mb-4"
        style={circleStyle} 
      >
        {React.cloneElement(icon as React.ReactElement, {
          className: "w-6 h-6",
          style: iconStyle, // Apply style object here
        })}
      </div>

      <h3 className="text-lg font-bold text-dark mb-2">{title}</h3>
      <p className="text-steel-gray leading-relaxed">{description}</p>
    </div>
  );
}

function TeamMember({ name, title, imageSrc, altText }: { name: string, title: string, imageSrc: string, altText: string }) {
  return (
    <div className="flex flex-col items-center max-w-xs">
      <div className="relative w-[200px] h-[200px] rounded-full border-4 border-primary overflow-hidden">
        <Image src={imageSrc} alt={altText} fill className="object-cover" />
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-primary w-12 h-12 rounded-full flex justify-center items-center shadow-lg cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
      </div>
      <h3 className="mt-4 text-lg font-bold text-dark">{name}</h3>
      <p className="mt-1 text-sm text-steel-gray text-center">{title}</p>
    </div>
  )
}