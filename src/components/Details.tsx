'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useInView } from 'motion/react'

export default function Details() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    }

    return (
        <section ref={ref}>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                <motion.h2
                    className='mt-5 text-center relative md:text-3xl lg:text-5xl text-3xl font-bold text-primary'
                    variants={itemVariants}
                >
                    Most Compassionate and Advanced IVF Treatments for Your Path to Parenthood
                </motion.h2>

                <motion.div className='relative w-full mt-10' variants={itemVariants}>
                    <Image
                        className='w-full'
                        src='/image/banner/banner-01.png'
                        alt='dr payal'
                        width={1000}
                        height={300}
                    />
                </motion.div>

                <motion.p className='text-primary mt-5 text-lg' variants={itemVariants}>
                    The Expertise of Dr. Payal Bajaj lies in delivering a successful IVF treatment using the ethical and evidence based approach especially in patients with low ovarian reserve, multiple IVF failures and repeated miscarriages. She is well known for her polite, friendly, approachable and honest personality.
                </motion.p>

                <motion.p className='text-primary text-lg mt-5' variants={itemVariants}>
                    She has written many blogs and articles for various health magazines. Her keen interest in creating awareness in the general public regarding reproductive health has led to almost thousands of poeple following her writings on social media. She is also a part of various clubs and organisations that specifically work towards empowering women worldwide.
                </motion.p>
            </motion.div>
        </section>
    )
}
