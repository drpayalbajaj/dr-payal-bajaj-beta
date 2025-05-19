'use client'
import { motion, useInView } from "motion/react"
import React, { useRef } from 'react'
import Image from 'next/image'

export default function Qualification() {
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
        <section id='qualification' ref={ref}>
            <h2 className='mt-5 text-center relative md:text-5xl text-4xl font-bold text-primary'>
                Academic Highlights
            </h2>

            <motion.div
                className='mt-20 w-full grid lg:grid-cols-3 max-[1024px]:grid-cols-2 max-[692px]:grid-cols-1 gap-5'
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
            >
                {[
                    {
                        img: '/image/svg/graduation.svg',
                        title: 'Graduation',
                        desc: 'From the renowned Lady Hardinge Medical College.'
                    },
                    {
                        img: '/image/svg/pg.svg',
                        title: 'Postgraduation',
                        desc: 'From prestigious VMMC and Safdarjung Hospital.'
                    },
                    {
                        img: '/image/svg/surgery.svg',
                        title: 'DMAS',
                        desc: 'Diploma in Minimal access surgery from World Laparoscopy hospital.'
                    },
                    {
                        img: '/image/svg/drm.svg',
                        title: 'DRM',
                        desc: 'Diploma in Reproductive Medicine from University of Keli , Germany.'
                    },
                    {
                        img: '/image/svg/isar.svg',
                        title: 'ISAR',
                        desc: 'Full academic one year fellowship from AFGC. India.'
                    },
                ].map(({ img, title, desc }, i) => (
                    <motion.div
                        key={i}
                        className='w-full h-full rounded-lg border border-primary bg-primary'
                        variants={itemVariants}
                    >
                        <div className="w-full flex justify-center items-center flex-col h-full p-5">
                            <Image src={img} width={img.includes('isar.svg') ? 90 : 150} height={img.includes('isar.svg') ? 50 : 100} alt='dr. payal' />
                            <h3 className='text-2xl text-new-white leading-[1.1] mt-5'>{title}</h3>
                            <p className='mt-2 text-base leading-[1.1] text-white '>{desc}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}
