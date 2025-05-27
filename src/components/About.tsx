'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
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
      id="about"
      className="w-full relative overflow-x-hidden"
    >
      <div className="w-full relative grid lg:grid-cols-2 grid-cols-1 md:gap-5 gap-7">
        <motion.div
          className="w-full relative h-full flex flex-col justify-center"
          variants={leftVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <h2 className="text-4xl font-light text-primary leading-[1.1]">
            About the Doctor
          </h2>
          <h2 className="mt-4 md:text-3xl text-5xl font-bold text-primary leading-[1.1]">
            Dr. Payal Bajaj
          </h2>

          <p className="mt-2 text-2xl leading-[1.1] font-medium text-dark">
            Medical Director And Senior IVF Consultant
          </p>
          <span className="mt-2 text-steel-gray text-lg leading-[1.2]">
            Dr Payal Bajaj is an experienced obstetrician and gynecologist with over 20 years of experience in the discipline. She is also a Reproductive endocrinologist and Infertility specialist par excellence.
          </span>

          <h3 className="mt-3 text-2xl text-dark font-bold leading-[1.1]">
            Dr. Payal Bajaj Creating Miracles Personalized IVF Solutions for Growing Families.
          </h3>

          <span className="mt-2 text-steel-gray text-lg leading-[1.2]">
            Dr. Payal Bajaj, one of the best and most highly reputable gynaecologists, is an IVF specialist in Delhi. She helps provide a detailed explanation and solution to any condition concerning the female reproductive system.
          </span>

          <h3 className="mt-3 text-2xl text-dark font-bold leading-[1.1]">
            20 years of experience
          </h3>

          <span className="mt-2 text-steel-gray text-lg leading-[1.2]">
            Dr Payal Bajaj has won various academic awards all through her academic career. She is expert at stimulating following up ovarian cycles in different types of infertile patients and is a strong believer in an individualized management of infertility. She sticks to evidence-based protocols and strives to provide competent, rational, ethical, and transparent clinical care to the infertile couple.
          </span>
        </motion.div>

        <motion.div
          className="w-full relative h-full flex items-center lg:justify-end justify-center"
          variants={rightVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <Image
            src="/image/hero/about.jpg"
            width={1000}
            height={1000}
            alt="Hero Image"
            className='w-[500px] h-auto object-cover'
          />
        </motion.div>
      </div>
    </section>
  )
}
