'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useInView,Variants } from 'framer-motion'

export default function Details() {
    return (
        <Hero />
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
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    }

    const rightVariants:Variants = {
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
            id="details"
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
                        Advanced IVF treatments with a caring touch
                    </h2>
                    <h2 className="mt-4 md:text-3xl text-5xl font-bold text-primary leading-[1.1]">
                        Dr. Payal Bajaj - IVF Consultant
                    </h2>

                    <p className="mt-2 text-2xl leading-[1.1] font-medium text-[#9f76bf]">
                        Fertility Specialist, Obstetrician & Gynecologist
                    </p>
                    <p className="mt-2 text-2xl leading-[1.1] font-semibold text-[#9f76bf]">
                        Medical Director - Nandi IVF
                    </p>
                    
                    {/* The two spans below have been changed to styled p tags */}
                    <p className="mt-5 text-lg font-medium text-gray-700 leading-relaxed">
                        The Expertise of Dr. Payal Bajaj lies in delivering a successful IVF treatment using the ethical and evidence based approach especially in patients with low ovarian reserve, multiple IVF failures and repeated miscarriages. She is well known for her polite, friendly, approachable and honest personality.
                    </p>

                    <p className="mt-4 text-lg font-medium text-gray-700 leading-relaxed">
                        She has written many blogs and articles for various health magazines. Her keen interest in creating awareness in the general public regarding reproductive health has led to almost thousands of poeple following her writings on social media. She is also a part of various clubs and organisations that specifically work towards empowering women worldwide.
                    </p>

                </motion.div>

                <motion.div
                    className="w-full relative h-full flex items-center lg:justify-end justify-center"
                    variants={rightVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    <Image
                        src="/image/hero/details.jpg"
                        width={1000}
                        height={1000}
                        alt="Hero Image"
                        className='w-full h-auto object-cover'
                    />
                </motion.div>
            </div>
        </section>
    )
}