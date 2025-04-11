import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function MainSection() {
    return (
        <section className='h-screen bg-[var(--primary-color)] w-full' style={{ paddingBottom: 0 }}>
            <div className="w-full main-wraper h-full ">
                <div className='relative flex flex-col justify-end items-start pb-5 text-white'>
                    <h2 className='lg:text-5xl font-bold md:text-3xl text-3xl'>Dr. Payal Bajaj</h2>
                    <p className='lg:text-2xl mt-2 md:text-lg'>Medical Director And Senior IVF Consultant</p>
                    <p className='text-base mt-5 lg:max-w-[350px] md:max-w-[300px] max-w-full text-[#f0f0f0]'>Dr Payal Bajaj is an experienced obstetrician and gynecologist with over 20 years of experience in the discipline. She is also a Reproductive endocrinologist and Infertility specialist par excellence.</p>
                    <Link href="#" className='mt-8 text-lg font-semibold bg-[#f0f0f0] text-[var(--primary-color)] py-2 px-4 rounded-md hover:bg-[var(--primary-color)] hover:text-[#f0f0f0] border border-[#f0f0f0]'>
                        Contact Me
                    </Link>
                </div>
                <div className='relative flex lg:items-end md:items-end items-center justify-center'>
                    <Image src='/images/main-image/main.png' width={1000} height={500} alt='Dr. Payal' />
                </div>
            </div>
        </section>
    )
}
