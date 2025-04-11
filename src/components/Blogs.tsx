import React from 'react'
import { Sliders } from './Awards'

export default function Blogs() {
    return (
        <section>
            <h2 className='mt-5 text-center relative text-5xl font-bold text-[var(--primary-color)]'>
                Blogs
            </h2>

            <div className='mt-16 w-full'>
                <Sliders />
            </div>
        </section>
    )
}
