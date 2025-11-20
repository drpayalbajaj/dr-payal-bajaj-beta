// 'use client'
// import { motion, useInView } from "motion/react"
// import React, { useRef } from 'react'
// import Image from 'next/image'

// export default function Specialization() {
//     const ref = useRef(null)
//     const isInView = useInView(ref, { once: true, margin: '-100px' })

//     const containerVariants = {
//         hidden: {},
//         visible: {
//             transition: {
//                 staggerChildren: 0.3,
//             },
//         },
//     }

//     const itemVariants = {
//         hidden: { opacity: 0, y: 50 },
//         visible: {
//             opacity: 1,
//             y: 0,
//             transition: {
//                 duration: 0.6,
//                 ease: 'easeOut',
//             },
//         },
//     }

//     return (
//         <section ref={ref}>
//             <div className="w-full relative" id="services">
//                 <div className="w-full text-center ">
//                     <h2 className=" text-4xl font-bold text-primary">
//                         Focused Fields
//                     </h2>
//                 </div>

//                 <motion.div
//                     className="w-full relative grid lg:grid-cols-3 max-[1024px]:grid-cols-2 max-[720px]:grid-cols-1 gap-8 mt-16"
//                     variants={containerVariants}
//                     initial="hidden"
//                     animate={isInView ? 'visible' : 'hidden'}
//                 >
//                     {[
//                         {
//                             img: '/image/item/obj-3.svg',
//                             title: 'Gynecologist',
//                             desc: "Compassionate care for women's health at every stage of life. From routine checkups to advanced treatments, we're here for you.",
//                         },
//                         {
//                             img: '/image/item/obj.svg',
//                             title: 'Infertility Specialist',
//                             desc: "Expert care and personalized solutions for your parenthood journey. Helping you overcome infertility with compassion and advanced treatments.",
//                         },
//                         {
//                             img: '/image/item/obj-4.svg',
//                             title: 'Reproductive Endocrinology',
//                             desc: 'Expertise in diagnosing and treating hormonal disorders that affect fertility and reproductive health in women.',
//                         },
//                     ].map(({ img, title, desc }, i) => (
//                         <motion.div
//                             className="w-full h-full rounded-2xl p-4 bg-new-white"
//                             key={i}
//                             variants={itemVariants}
//                         >
//                             <div className="relative w-full flex  items-center flex-col h-full">
//                                 <Image src={img} width={300} height={200} alt={title} />
//                                 <h3 className="w-full font-semibold text-primary text-center mt-4 mb-2 text-2xl">
//                                     {title}
//                                 </h3>
//                                 <p className="text-steel-gray text-base">{desc}</p>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             </div>
//         </section>
//     )
// }
"use client";
import { motion, useInView, Variants } from "framer-motion";
import React, { useRef, useState } from "react";
import Image from "next/image";

export default function Specialization() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={ref}>
      <div className="w-full relative scroll-mt-28" id="services">
        <div className="w-full text-center ">
          <h2 className=" text-4xl font-bold text-primary">Services</h2>
        </div>

        <motion.div
          className="w-full relative grid lg:grid-cols-3 max-[1024px]:grid-cols-2 max-[720px]:grid-cols-1 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {[
            {
              img: "/image/item/obj-3.svg",
              title: "Advanced IVF  Treatment",
              desc: "World-class fertility care with advanced IVF & ICSI technology to help create the family you’ve always dreamed of.",
            },
            {
              img: "/image/item/obj.svg",
              title: "Female Fertility Assessment",
              desc: "Comprehensive evaluation of ovarian health, hormones, and reproductive wellness to identify precise fertility challenges.",
            },
            {
              img: "/image/item/obj-4.svg",
              title: "Reproductive Hormone Care",
              desc: "Expert monitoring and specialized care for complex or high-risk pregnancies to ensure a safe and healthy delivery.",
              },
          ].map(({ img, title, desc }, i) => (
            <motion.div
              className="w-full h-full rounded-2xl p-6 bg-new-white shadow-sm hover:shadow-xl transition-all duration-500 ease-out"
              key={i}
              variants={itemVariants}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <div className="relative w-full flex items-center flex-col h-full">
                <motion.div
                  animate={{ scale: hoveredCard === i ? 1.08 : 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image src={img} width={300} height={200} alt={title} />
                </motion.div>
                <h3
                  className="w-full font-semibold text-primary text-center mt-4 mb-2 text-3xl transition-transform duration-300"
                  style={{
                    transform: hoveredCard === i ? "scale(1.05)" : "scale(1)",
                  }}
                >
                  {title}
                </h3>
                <p className="text-gray-700 text-lg font-medium text-center leading-relaxed">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}