'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { FaWhatsapp } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isSafeInput = (input: string) => {
    const blacklistPattern = /<script|<\/script|javascript:|onerror=|onload=/gi;
    return !blacklistPattern.test(input);
  };

  const handleWhatsappChat = () => {
    location.href = "https://wa.me/+919911631639?text=Hi%2C%20I%E2%80%99d%20like%20to%20book%20an%20appointment%20with%20Dr.%20Payal%20Bajaj.%20Please%20guide%20me%20through%20the%20process";
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    for (const key in formData) {
      if (!formData[key as keyof typeof formData]) {
        alert(`Please fill out the ${key} field.`);
        return;
      }

      if (!isSafeInput(formData[key as keyof typeof formData])) {
        alert(`Unsafe content detected in ${key}`);
        return;
      }
    }

    toast.promise(
      axios
        .post("/api/contact", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.status === 200) {
            setFormData({
              name: "",
              email: "",
              contactNo: "",
              message: "",
            });
            return response.data.message;
          } else {
            return response.data.message
          }
        })
        .catch((error) => {
          console.log("Error sending message", error.message);
          throw error;
        }),
      {
        loading: "Sending message...",
        success: (message) => message,
        error: (err) => err
      }
    );

  };

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
            className='rounded-xl h-[400px] max-[480px]:h-[300px]'
            title="Nandi IVF Location"
          ></iframe>
        </motion.div>

        {/* Form */}
        <motion.div
          className="relative w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <form onSubmit={handleSubmit} className='mt-0 w-full'>
            <div className='relative w-full bg-new-white px-5 py-4 rounded-lg'>
              <input
                name='name'
                type="text"
                placeholder='Name'
                required
                autoComplete="name"
                maxLength={100}
                pattern="^[A-Za-z\s]+$"
                className='h-full text-xl w-full bg-transparent outline-0 border-0'
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className='relative w-full mt-5 bg-new-white px-5 py-4 rounded-lg'>
              <input
                name='email'
                type="email"
                placeholder='E-Mail'
                required
                autoComplete="email"
                maxLength={100}
                className='h-full text-xl w-full bg-transparent outline-0 border-0'
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className='relative w-full mt-5 bg-new-white px-5 py-4 rounded-lg'>
              <input
                name='contactNo'
                type="tel"
                inputMode="numeric"
                pattern="[0-9]{10}"
                placeholder='Phone No'
                required
                maxLength={10}
                autoComplete="tel"
                className='h-full text-xl w-full bg-transparent outline-0 border-0'
                value={formData.contactNo}
                onChange={handleChange}
              />
            </div>
            <div className='relative w-full mt-5 bg-new-white px-5 py-4 rounded-lg'>
              <textarea
                name="message"
                placeholder='Your Query'
                required
                maxLength={500}
                className='h-full text-xl w-full bg-transparent outline-0 border-0'
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className='relative w-full mt-5'>
              <button type="submit" className='bg-primary px-10 py-3 rounded-lg cursor-pointer font-bold font-merriweather text-xl text-white'>
                Submit
              </button>
              <button onClick={handleWhatsappChat} className='mx-4 px-5 gap-2 py-3 rounded-lg cursor-pointer font-bold font-merriweather text-xl shadow-lg bg-[#25D366] text-white hover:brightness-95 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30'>
                    <FaWhatsapp className='inline'/>
                  <p className='inline px-2'>
                    Chat on WhatsApp
                    </p>
              </button>
            
            </div>
          </form>
        </motion.div>
      </div>
      <Toaster />
    </section>
  );
}
