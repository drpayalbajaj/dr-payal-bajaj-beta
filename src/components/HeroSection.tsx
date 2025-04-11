import Link from 'next/link'
import React from 'react'

export default function HeroSection() {
    return (
        <section className='h-screen relative flex items-center justify-center bg-[var(--white-color)] w-full'>
            <div className='w-full relative flex flex-col items-center justify-center '>

                <h1 className='m-auto lg:max-w-5xl  lg:text-6xl md:text-4xl sm:text-3xl text-2xl text-center font-(family-name:--font-pt-serif) font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#572127] via-[#9b4c56] to-[#d88591] animated-gradient-text'>
                    Bringing Dreams to Life - Your Journey to Parenthood Starts Here!
                </h1>
                <p className='m-auto lg:max-w-3xl md:max-w-xl max-w-[300px] text-center text-[var(--primary-color)] font-(family-name:--font-pt-serif) font-light lg:text-xl mt-5 md:text-lg sm:text-base text-sm'>
                    Expert IVF care with cutting-edge technology and compassionate support. Let us help you turn hope into happiness with personalized fertility solutions.
                </p>

                <div className='flex items-center justify-center mt-20'>
                    <Link href='#' className='bg-[var(--primary-color)] text-white border-[1px] border-[var(--primary-color)] font-(family-name:--font-pt-serif) font-semibold text-[12px] px-3 py-2 md:text[16px] md:px-4 md:py-3 lg:text-lg lg:px-6 lg:py-3 rounded-md hover:bg-[var(--white-color)] hover:text-[var(--primary-color)] hover:border-[1px] hover:border-[var(--primary-color)]'>
                        Book an Appointment
                    </Link>
                    <Link href='#' className='bg-[var(--white-color)] text-[var(--primary-color)] font-(family-name:--font-pt-serif) font-semibold text-[12px] px-3 py-2 md:text[16px] md:px-4 md:py-3 lg:text-lg lg:px-6 lg:py-3 rounded-md ml-5 border-[1px] border-[var(--primary-color)]'>
                        Call Now
                    </Link>

                </div>
            </div>
        </section>
    )
}
