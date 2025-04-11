import Image from 'next/image'
import React from 'react'

export default function Details() {
    return (
        <section>
            <h2 className='mt-5 text-center relative text-5xl font-bold text-[var(--primary-color)]'>
                Most Compassionate and Advanced IVF Treatments for Your Path to Parenthood
            </h2>
            <div className='relative w-full mt-10'>
                <Image className='w-full' src='/images/main-image/banner-01.png' alt='dr payal ' width={1000} height={300} />
            </div>
            <p className='text-[var(--primary-color)] mt-5 text-lg'>
                The Expertise of Dr. Payal Bajaj lies in delivering a successful IVF treatment using the ethical and evidence based approach especially in patients with low ovarian reserve, multiple IVF failures and repeated miscarriages. She is well known for her polite, friendly, approachable and honest personality.
            </p>
            <br />
            <p className='text-[var(--primary-color)]  text-lg'>
                She has written many blogs and articles for various health magazines. Her keen interest in creating awareness in the general public regarding reproductive health has led to almost thousands of poeple following her writings on social media. She is also a part of various clubs and organisations that specifically work towards empowering women worldwide.
            </p>
        </section>
    )
}
