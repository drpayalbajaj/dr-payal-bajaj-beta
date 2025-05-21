'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'motion/react'

export default function IVF() {
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
    <section
      ref={ref}
      style={{
        // backgroundImage: "url('/image/banner/banner.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
      }}
      className="relative bg-[url(/image/banner/banner.png)] max-[544px]:bg-[url(/image/banner/creative.png)] after:absolute after:inset-0 after:bg-[linear-gradient(to_bottom,_rgba(0,0,0,0.4)_0%,_transparent_30%,_transparent_70%,_rgba(0,0,0,0.4)_100%)] after:z-[1]"

    >
      <motion.div

        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="z-10 relative"
      >
        <motion.h2
          className="mt-1 text-left relative md:text-5xl text-4xl font-bold text-primary"
          variants={itemVariants}
        >
          What is IVF?
        </motion.h2>
        <motion.p
          className="text-left text-base mt-5 max-w-2xl text-maroon-800"
          variants={itemVariants}
        >
          IVF which is In Vitro Fertilization is also known as test tube baby. In normal pregnancy, the sperm produced by the male needs to be fertilized with the egg produced by the female body. In cases where natural pregnancy is not possible, these eggs are extracted with the help of a particular instrument and fertilized with the sperm in the laboratory. The eggs are retrieved using a minor procedure called ovum pick up, vaginally. This procedure is carried out under sedation so you don&apos;t feel any pain. After the ovum pick-up procedure, the eggs are fertilized with sperm and the resultant embryos are formed within 3 to 5 days. A better embryo is selected and implanted in the uterus of the female partner. The after-procedure is just like any other pregnant woman. After 9 months the baby is delivered normally or through cesarean, accordingly.
        </motion.p>

        <motion.h3
          className="mt-8 text-left relative text-2xl font-bold text-primary"
          variants={itemVariants}
        >
          Why Choose Nandi IVF Centre
        </motion.h3>
        <motion.p
          className="text-left text-base mt-1 max-w-2xl text-maroon-800"
          variants={itemVariants}
        >
          With a vision to provide care beyond comparison in the field of fertility medicine, The Nandi Fertility Centre aspires to be a reliable partner in providing comprehensive fertility treatment solutions, with the ease of accessibility and affordability. Reflecting our endeavours in offering a qualitative and result-bound fertility care, the best Fertility Centre in Coimbatore witnesses the baby miracles on a daily basis.
        </motion.p>
      </motion.div>
    </section>
  )
}
