import Image from 'next/image'
import React from 'react'

export default function Specialization() {
    return (
        <section>
            <div className='w-full relative   '>
                <div className='w-full text-center '>
                    <h2 className='text-5xl font-bold text-[var(--primary-color)]'>Dr. Payal Bajaj&apos;s specializations</h2>
                </div>
                <div className='w-full specialization-wraper mt-16'>
                    <div className='w-full h-full border border-[var(--primary-color)] rounded-2xl p-4'>
                        <div className='relative w-full flex justify-center items-center flex-col h-full'>
                            <Image src='/images/item/gyno-01.png' width={200} height={200} alt='dr. payal' />
                            <h3 className='w-full font-semibold text-[var(--primary-color)] text-center mt-4 mb-2 text-2xl'>Gynecologist Specialist</h3>
                            <p className='text-[var(--secondary-color)] text-base'>
                                Compassionate care for women&apos;s health at every stage of life. From routine checkups to advanced treatments, we&apos;re here for you.
                            </p>
                        </div>
                    </div>
                    <div className='w-full h-full border border-[var(--primary-color)] rounded-2xl p-4'>
                        <div className='relative w-full flex justify-center items-center flex-col h-full'>
                            <Image src='/images/item/gyno-02.png' width={200} height={200} alt='dr. payal' />
                            <h3 className='w-full font-semibold text-[var(--primary-color)] text-center mt-4 mb-2 text-2xl'>Infertility Specialist</h3>
                            <p className='text-[var(--secondary-color)] text-base'>
                                Expert care and personalized solutions for your parenthood journey. Helping you overcome infertility with compassion and advanced treatments.
                            </p>
                        </div>
                    </div>
                    <div className='w-full h-full border border-[var(--primary-color)] rounded-2xl p-4'>
                        <div className='relative w-full flex justify-center items-center flex-col h-full'>
                            <Image src='/images/item/gyno-01.png' width={200} height={200} alt='dr. payal' />
                            <h3 className='w-full font-semibold text-[var(--primary-color)] text-center mt-4 mb-2 text-2xl'>Gynecologist Specialist</h3>
                            <p className='text-[var(--secondary-color)] text-base'>
                                Expert care and personalized solutions for your parenthood journey. Helping you overcome infertility with compassion and advanced treatments.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
