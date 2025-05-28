'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from "motion/react"

export default function Hero() {
    return (
        <section className='w-full relative overflow-hidden min-[924px]:bg-[url(/image/banner/banner.jpg)] bg-none'
            style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                padding: "0"
            }}>
            <div className='w-full relative grid max-[924px]:grid-cols-1 grid-cols-2 gap-5 max-[924px]:gap-0'>

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className='w-full relative h-full flex flex-col justify-center min-[924px]:py-[90px] px-[60px] py-[70px] max-[668px]:px-[30px] max-[668px]:py-[40px]'
                >
                    <h1 className='lg:text-4xl md:text-3xl text-3xl font-pt font-bold text-primary leading-[1.1]'>
                        Step into your parenthood journey
                    </h1>

                    <p className='mt-5 lg:text-lg md:text-base leading-[1.1] font-medium text-steel-gray'>
                        Expert IVF care with cutting-edge technology and compassionate support. Let us help you turn hope into happiness with personalized fertility solutions.
                    </p>

                    <div className='flex items-center mt-15 gap-10 max-[480px]:gap-3 max-[480px]:flex-wrap'>
                        <Link href='#contact' className='px-6 py-[14px] border rounded-md border-primary bg-primary text-white font-bold font-roboto'>
                            Book an Appointment
                        </Link>

                        <Link href='tel:+919911631639' className='px-6 py-[14px] border rounded-md border-primary text-primary font-bold font-roboto'>
                            Call Now
                        </Link>
                    </div>
                    <div className='mt-5'>
                        <p className='mt-5 flex gap-2'>
                            <Link href='https://www.instagram.com/dr_payalbajaj/' target='_blank' className='w-[50px] h-[50px] bg-white rounded-full p-[2px]'>
                                <i className="hgi hgi-stroke hgi-instagram w-full h-full bg-primary rounded-full  flex items-center justify-center text-white text-xl"></i>
                            </Link>
                            <Link href='https://www.facebook.com/DoctorPayalbajaj' target='_blank' className='w-[50px] h-[50px] bg-white rounded-full p-[2px]'>
                                <i className="hgi hgi-stroke hgi-facebook-02 w-full h-full bg-primary rounded-full  flex items-center justify-center text-white text-xl"></i>
                            </Link>
                            <Link href='https://www.linkedin.com/in/dr-payal-bajaj-2613a923/' target='_blank' className='w-[50px] h-[50px] bg-white rounded-full p-[2px]'>
                                <i className="hgi hgi-stroke hgi-linkedin-02 w-full h-full bg-primary rounded-full  flex items-center justify-center text-white text-xl"></i>
                            </Link>
                            <Link href='https://www.youtube.com/@DrPayalBajaj' target='_blank' className='w-[50px] h-[50px] bg-white rounded-full p-[2px]'>
                                <i className="hgi hgi-stroke hgi-youtube w-full h-full bg-primary rounded-full  flex items-center justify-center text-white text-xl"></i>
                            </Link>
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className='w-full min-[924]:hidden'
                >
                    <Image
                        src='/image/banner/hero-mob.png'
                        width={1000}
                        height={1000}
                        alt='Hero Image'
                    />
                </motion.div>
            </div>
        </section>
    )
}
