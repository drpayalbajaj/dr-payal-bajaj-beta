'use client'
import React from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

export default function Contact() {
  return (
    <section className='w-full relative bg-maroon-800 md:p-10 p-4' id='contact'>

      <motion.h2
        className='w-full mb-8 font-semibold text-4xl text-primary text-center'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        Get in Touch
      </motion.h2>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-8">

        <motion.div
          className="relative w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13999.05969170394!2d77.15997034104505!3d28.69667783232364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d035e26ae8fd5%3A0xe262d0f9c2479472!2sNandi%20IVF%20-%20Best%20IVF%20Centre%20in%20Ashok%20Vihar%2C%20Delhi!5e0!3m2!1sen!2sin!4v1720698080526!5m2!1sen!2sin"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className='rounded-xl h-[480px] max-[480px]:h-[300px]'
            title="Nandi IVF Location"
          ></iframe>
        </motion.div>

        <motion.div
          className="relative w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >

          <form className='mt-0 w-full'>
            <div className='relative w-full bg-new-white px-5 py-4 rounded-lg '>
              <input type="text" placeholder='Name' className=' h-full text-xl w-full bg-transparent outline-0 border-0' />
            </div>
            <div className='relative w-full mt-5 bg-new-white px-5 py-4 rounded-lg'>
              <input type="email" placeholder='E-Mail' className=' h-full text-xl w-full bg-transparent outline-0 border-[none]' />
            </div>
            <div className='relative w-full mt-5 bg-new-white px-5 py-4 rounded-lg'>
              <input type="number" placeholder='Phone No' className=' h-full text-xl w-full bg-transparent outline-0 border-[none]' />
            </div>
            <div className='relative w-full mt-5 bg-new-white px-5 py-4 rounded-lg'>
              <textarea name="" id="" placeholder='Your Query' className=' h-full text-xl w-full bg-transparent outline-0 border-[none]'></textarea>
            </div>
            <div className='relative w-full mt-5'>
              <button type="submit" className='bg-primary px-10 py-3 rounded-lg cursor-pointer font-bold font-merriweather text-xl text-white'>Submit</button>
            </div>
          </form>
        </motion.div>

      </div>
    </section>
  )
}
