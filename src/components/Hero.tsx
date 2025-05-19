'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from "motion/react"

export default function Hero() {
    return (
        <section className='w-full relative bg-new-white overflow-hidden'>
            <div className='w-full relative grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-7'>

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className='w-full relative h-full flex flex-col justify-center'
                >
                    <h1 className='lg:text-5xl md:text-3xl text-3xl font-pt font-bold text-primary leading-[1.1]'>
                        Bringing Dreams to Life Your Journey to Parenthood Starts Here!
                    </h1>

                    <p className='mt-5 lg:text-lg md:text-base leading-[1.1] font-medium text-steel-gray'>
                        Expert IVF care with cutting-edge technology and compassionate support. Let us help you turn hope into happiness with personalized fertility solutions.
                    </p>

                    <div className='flex items-center mt-15 gap-10 max-[480px]:gap-3 max-[480px]:flex-wrap'>
                        <Link href='#' className='px-6 py-[14px] border rounded-md border-primary bg-primary text-new-white font-bold font-roboto'>
                            Book an Appointment
                        </Link>

                        <Link href='#' className='px-6 py-[14px] border rounded-md border-primary text-primary font-bold font-roboto'>
                            Call Now
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className='w-full relative h-full flex items-center md:justify-end justify-center'
                >
                    <Image
                        src='/image/hero/hero-02.svg'
                        width={420}
                        height={400}
                        alt='Hero Image'
                        className='lg:w-[420px] md:w-[320px]'
                    />
                </motion.div>
            </div>
        </section>
    )
}
