'use client'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { motion, useInView } from "motion/react"

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
    <section
      ref={ref}
      id="Aboutus"
      className="w-full relative overflow-x-hidden px-6 md:px-12 lg:px-24 py-12 md:py-20"
    >
      {/* Main Intro Section */}
      <motion.div
        className="w-full max-w-7xl mx-auto"
        variants={leftVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <h2 className="text-5xl font-light text-primary leading-[1.1]">Best IVF Centre In Delhi</h2>
        <p className="mt-6 text-steel-gray text-lg leading-relaxed max-w-4xl">
          <a href="http://nandiivf.com/" target="_blank" rel="noreferrer" className="underline hover:text-primary transition">
            Nandi IVF
          </a> is a unique IVF centre focused on delivering happiness to aspiring parents through efficient, ethical, and comprehensive health care services that transcend social, geographical, and logistical barriers.
        </p>
        <p className="mt-4 text-steel-gray text-lg leading-relaxed max-w-4xl">
          We are a team of experienced fertility specialists passionate about helping couples achieve their dream of starting a family. We offer a wide range of fertility treatments, including in vitro fertilization{' '}
          <a href="http://nandiivf.com/service/in-vitro-fertilization-ivf-treatment/" target="_blank" rel="noreferrer" className="underline hover:text-primary transition">
            (IVF)
          </a>, and our state-of-the-art facility is equipped with the latest technology and equipment.
        </p>
        <p className="mt-4 text-steel-gray text-lg leading-relaxed max-w-4xl">
          We pride ourselves on providing individualized care and support to each of our patients and are committed to providing the best possible outcome for every patient we see. We understand that the decision to pursue fertility treatment can be difficult, and we are here to support you at every step of the way. We offer a variety of resources to help you better understand your fertility options and make informed decisions about your care.
        </p>
        <p className="mt-4 text-steel-gray text-lg leading-relaxed max-w-4xl">
          We believe that every patient deserves access to high-quality fertility care, and we are committed to working with you to create a treatment plan that fits your unique needs and budget.
        </p>
        <p className="mt-6 text-steel-gray text-lg leading-relaxed max-w-4xl">
          If you are interested in learning more about our fertility services or would like to schedule a free consultation, please get in touch with us today. We look forward to helping you build the family of your dreams.
        </p>
      </motion.div>

      {/* What sets Nandi IVF apart */}
      <section className="mt-24 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold leading-tight text-dark max-w-md">
          What sets <span className="text-primary font-bold">Nandi IVF</span> apart from others
        </h2>
        <div className="mt-8 flex space-x-6 overflow-x-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-200 pb-2 max-w-full">
          <FeatureBox text="An extensive range of fertility treatments offered under one roof includes ovulation induction, IUI, IVF, ICSI, Egg freezing, Sperm freezing, Embryo freezing, ERA, PCOS treatment, male fertility wellness, donor program, surrogacy services, and reproductive surgery." />
          <FeatureBox text="A boutique IVF centre – the first in Delhi to offer maximum comfort to patients under too much stress and anxiety." />
          <FeatureBox text="A state-of-the-art modular IVF lab and OT complex with all the latest equipment available at the facility." />
          <FeatureBox text="High success rates: The protocols are designed to provide patients with high success rates, with a success rate of more than 60% within the first attempt and 80% within the third attempt, and also high success rates for patients with previous failed IVF cycles and advanced age." />
          <FeatureBox text="Compassionate and dedicated nursing staff." />
          <FeatureBox text="Easy EMI facility and pocket-friendly loan at 0% interest." />
          <FeatureBox text="Free counselling sessions with our fertility experts." />
          <FeatureBox text="Air-handling unit (AHU) in our IVF lab and OT complex improves air quality and creates an infection-free environment for better results and success." />
          <FeatureBox text="Exceptional care for embryos and gametes from internationally trained embryologists." />
        </div>
      </section>

      {/* Vision and Mission Tabs */}
      <section className="mt-24 max-w-3xl mx-auto border-t border-gray-300 pt-8">
        <div className="flex space-x-2 border-b border-gray-300 mb-6">
          <button
            className={`px-6 py-2 font-semibold text-lg rounded-t-lg ${
              activeTab === 'vision'
                ? 'bg-primary text-white'
                : 'bg-gray-400 text-white/80 hover:bg-primary hover:text-white transition`}'
            }`}
            onClick={() => setActiveTab('vision')}
          >
            Vision
          </button>
          <button
            className={`px-6 py-2 font-semibold text-lg rounded-t-lg ${
              activeTab === 'mission'
                ? 'bg-primary text-white'
                : 'bg-gray-400 text-white/80 hover:bg-primary hover:text-white transition`}'
            }`}
            onClick={() => setActiveTab('mission')}
          >
            Mission
          </button>
        </div>
        <div className="text-steel-gray text-lg leading-relaxed">
          {activeTab === 'vision' && (
            <p>
              At <span className="font-semibold text-dark">Nandi IVF</span>, we believe everyone deserves their own happy family, which is why we strive to provide some of the best assisted reproductive technologies backed by high-quality standards to families around the globe. We aspire to be a leader in providing safe and successful fertility treatment that meets international accreditation standards.
            </p>
          )}
          {activeTab === 'mission' && (
            <p>
              Our mission at <span className="font-semibold text-dark">Nandi IVF</span> is to provide empathetic and evidence-based fertility care tailored to meet each patient’s specific needs.
            </p>
          )}
        </div>
      </section>

      {/* Our Clinical Team */}
      <section className="mt-24 max-w-7xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold leading-tight">
          Our <span className="text-primary">Clinical Team</span>
        </h2>
        <p className="mt-2 text-steel-gray max-w-2xl mx-auto">
          We have a team of specialists with decades of experience committed to providing every patient with the highest quality care.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-16">
          <TeamMember
            name="Dr. Payal Bajaj"
            title="Medical Director And Senior IVF Consultant"
            imageSrc="/image/hero/payal.jpg"
            altText="Dr. Payal Bajaj"
          />
          <TeamMember
            name="Dr VED PRAKASH"
            title="(MSc., PhD.) Consultant Clinical Embryologist"
            imageSrc="/image/hero/ved-1.jpg"
            altText="Dr VED PRAKASH"
          />
        </div>
      </section>

      {/* Meet Our Founder */}
      <section className="mt-24 max-w-7xl mx-auto text-center px-4 pb-12">
        <h2 className="text-4xl font-bold leading-tight">
          Meet Our <span className="text-primary">Founder</span>
        </h2>
        <p className="mt-2 text-steel-gray max-w-2xl mx-auto">
          We have a team of specialists with decades of experience committed to providing every patient with the highest quality care.
        </p>

        <div className="mt-12 flex justify-center">
          <TeamMember
            name="Dr. Sanjay Bajaj"
            title="(Managing Director & Founder)"
            imageSrc="/image/hero/nv1-1.jpg"
            altText="Dr. Sanjay Bajaj"
          />
        </div>
      </section>
    </section>
  )
}

// Reusable Feature Box component for the horizontally scrollable IVF features
function FeatureBox({ text }: { text: string }) {
  return (
    <div className="w-80 flex-shrink-0 bg-white text-primary p-6 rounded-lg shadow-md border border-gray-300">
      <p className="leading-relaxed text-base break-words">{text}</p>
    </div>
  )
}

// Reusable Team Member profile component
function TeamMember({
  name,
  title,
  imageSrc,
  altText,
}: {
  name: string
  title: string
  imageSrc: string
  altText: string
}) {
  return (
    <div className="flex flex-col items-center max-w-xs">
      <div className="relative w-[200px] h-[200px] rounded-full border-4 border-primary overflow-hidden">
        <Image src={imageSrc} alt={altText} fill className="object-cover" />
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-primary w-12 h-12 rounded-full flex justify-center items-center shadow-lg cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
      </div>
      <h3 className="mt-6 text-lg font-bold text-dark">{name}</h3>
      <p className="mt-1 text-sm text-steel-gray text-center">{title}</p>
    </div>
  )
}
