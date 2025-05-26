'use client'
import { motion, useInView } from "motion/react"
import React, { useRef } from 'react'
import Image from 'next/image'


export default function Specialization() {
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
            <div className="w-full relative" id="services">
                <div className="w-full text-center ">
                    <h2 className=" text-4xl font-bold text-primary">
                        Focused Fields
                    </h2>
                </div>

                <motion.div
                    className="w-full relative grid lg:grid-cols-3 max-[1024px]:grid-cols-2 max-[720px]:grid-cols-1 gap-8 mt-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                >
                    {[
                        {
                            img: '/image/item/obj-3.svg',
                            title: 'Gynecologist',
                            desc: "Compassionate care for women's health at every stage of life. From routine checkups to advanced treatments, we're here for you.",
                        },
                        {
                            img: '/image/item/obj.svg',
                            title: 'Infertility Specialist',
                            desc: "Expert care and personalized solutions for your parenthood journey. Helping you overcome infertility with compassion and advanced treatments.",
                        },
                        {
                            img: '/image/item/obj-4.svg',
                            title: 'Reproductive Endocrinology',
                            desc: 'Expertise in diagnosing and treating hormonal disorders that affect fertility and reproductive health in women.',
                        },
                    ].map(({ img, title, desc }, i) => (
                        <motion.div
                            className="w-full h-full rounded-2xl p-4 bg-new-white"
                            key={i}
                            variants={itemVariants}
                        >
                            <div className="relative w-full flex  items-center flex-col h-full">
                                <Image src={img} width={300} height={200} alt={title} />
                                <h3 className="w-full font-semibold text-primary text-center mt-4 mb-2 text-2xl">
                                    {title}
                                </h3>
                                <p className="text-steel-gray text-base">{desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
