'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"

export default function Hero() {
    return (
        <section className='w-full relative overflow-hidden'>
            
            {/* Background with modern gradient overlay */}
            <div className='absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-violet-50/30'></div>
            <div className='absolute inset-0 min-[924px]:bg-[url(/image/banner/banner.jpg)] bg-none opacity-10'
                style={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
            </div>

            <div className='relative '>
                <div className='w-full grid lg:grid-cols-2 grid-cols-1 gap-16 items-center '>

                    {/* Left Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className='w-full space-y-8'
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
                            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                            Expert Fertility Care
                        </div>

                        {/* Main Heading */}
                        <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight'>
                            Step into your
                            <span className='block text-primary mt-2'>parenthood journey</span>
                        </h1>

                        {/* Description */}
                        <p className='text-xl text-gray-600 leading-relaxed max-w-2xl'>
                            Expert IVF care with cutting-edge technology and compassionate support. Let us help you turn hope into happiness with personalized fertility solutions.
                        </p>

                        {/* CTA Buttons */}
                        <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                            <Link 
                                href='#contact' 
                                className='group px-8 py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center'
                            >
                                <span className="flex items-center justify-center gap-2">
                                    Book an Appointment
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </Link>

                            <Link 
                                href='tel:+919911631639' 
                                className='group px-8 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300 text-center'
                            >
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Book now / Text
                                </span>
                            </Link>
                        </div>

                        {/* Social Media Links */}
                        <div className='pt-6'>
                            <p className='text-gray-500 font-medium mb-4'>Follow us on social media</p>
                            <div className='flex gap-4'>
                                <SocialLink 
                                    href='https://www.instagram.com/dr_payalbajaj/' 
                                    icon="instagram"
                                    label="Instagram"
                                />
                                <SocialLink 
                                    href='https://www.facebook.com/DoctorPayalbajaj' 
                                    icon="facebook"
                                    label="Facebook"
                                />
                                <SocialLink 
                                    href='https://www.linkedin.com/in/dr-payal-bajaj-2613a923/' 
                                    icon="linkedin"
                                    label="LinkedIn"
                                />
                                <SocialLink 
                                    href='https://www.youtube.com/@DrPayalBajaj' 
                                    icon="youtube"
                                    label="YouTube"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className='w-full flex justify-center lg:justify-end'
                    >
                        <div className="relative w-full max-w-md">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-violet-200/40 rounded-2xl blur-2xl"></div>
                            <div className="relative bg-white rounded-2xl p-4 shadow-2xl border border-white/20">
                                <Image
                                    src='/image/banner/hero-mob.png'
                                    width={400}
                                    height={500}
                                    alt='Expert fertility care and IVF treatment'
                                    className="w-full h-auto object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-tr from-violet-100/30 to-transparent rounded-full blur-3xl"></div>
        </section>
    )
}

// Social Link Component
function SocialLink({ href, icon, label }: { href: string, icon: string, label: string }) {
    const getIcon = () => {
        switch(icon) {
            case 'instagram':
                return (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.735-3.016-1.804-.568-1.07-.386-2.404.455-3.245.841-.841 2.175-1.023 3.245-.455 1.07.568 1.804 1.719 1.804 3.016 0 1.874-1.52 3.394-3.394 3.394l-.094.094zm7.394-3.394c0 1.874-1.52 3.394-3.394 3.394s-3.394-1.52-3.394-3.394 1.52-3.394 3.394-3.394 3.394 1.52 3.394 3.394zm1.804-7.394c-.568 0-1.029-.461-1.029-1.029s.461-1.029 1.029-1.029 1.029.461 1.029 1.029-.461 1.029-1.029 1.029z"/>
                    </svg>
                );
            case 'facebook':
                return (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                );
            case 'linkedin':
                return (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                );
            case 'youtube':
                return (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                );
            default:
                return null;
        }
    }

    return (
        <Link 
            href={href} 
            target='_blank'
            className='group relative w-12 h-12 bg-white hover:bg-primary rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center border border-gray-100 hover:border-primary/20 hover:-translate-y-1'
            aria-label={label}
        >
            <div className="text-gray-600 group-hover:text-white transition-colors duration-300">
                {getIcon()}
            </div>
            
            {/* Hover background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-violet-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </Link>
    );
};
