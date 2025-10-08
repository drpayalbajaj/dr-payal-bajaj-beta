
'use client'
import React, { useRef } from 'react'
import { motion, useInView,Variants } from 'framer-motion'
import Image from 'next/image'

export default function IVF() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants:Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants:Variants = {
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
      id="ivf"
      ref={ref}
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        padding:"0"
      }}
      className="relative md:bg-[url(/image/banner/ivf-banner.jpg)] bg-none scroll-mt-28"

    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="z-10 relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8"
      >
        <motion.div className='pp w-full max-[668px]:pl-[30px] max-[668px]:pr-[30px] max-[668px]:py-[40px] pl-[70px] py-[60px] max-md:pr-[70px]  '>
          <motion.h2
            className="mt-1 text-left relative text-4xl font-bold text-primary"
            variants={itemVariants}
          >
            What is IVF?
          </motion.h2>
          <motion.p
            className="text-left text-lg font-medium text-gray-700 leading-relaxed mt-5"
            variants={itemVariants}
          >
            IVF which is In Vitro Fertilization is also known as test tube baby. In normal pregnancy, the sperm produced by the male needs to be fertilized with the egg produced by the female body. In cases where natural pregnancy is not possible, these eggs are extracted with the help of a particular instrument and fertilized with the sperm in the laboratory. The eggs are retrieved using a minor procedure called ovum pick up, vaginally. This procedure is carried out under sedation so you don&apos;t feel any pain. After the ovum pick-up procedure, the eggs are fertilized with sperm and the resultant embryos are formed within 3 to 5 days. A better embryo is selected and implanted in the uterus of the female partner. The after-procedure is just like any other pregnant woman. After 9 months the baby is delivered normally or through cesarean, accordingly.
          </motion.p>

          <motion.h3
            className="mt-8 text-left relative text-3xl font-bold text-primary"
            variants={itemVariants}
          >
            Why Choose Nandi IVF Centre
          </motion.h3>
          <motion.p
            className="text-left text-lg font-medium text-gray-700 leading-relaxed mt-4 max-w-2xl"
            variants={itemVariants}
          >
            With a vision to provide care beyond comparison in the field of fertility medicine, The Nandi Fertility Centre aspires to be a reliable partner in providing comprehensive fertility treatment solutions, with the ease of accessibility and affordability. Reflecting our endeavours in offering a qualitative and result-bound fertility care, the best Fertility Centre in Delhi and NCR witnesses the baby miracles on a daily basis.
          </motion.p>

        </motion.div>

        <motion.div className='w-full md:hidden '>
          <Image src="/image/banner/ivf-mob-1.jpg" width={1000} height={1000} alt='About Ivf ' className='' />
        </motion.div>

      </motion.div>
    </section>
  )
}