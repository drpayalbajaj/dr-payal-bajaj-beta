'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Footer() {
  const path = usePathname()

  const getHref = (link: string) => {
    if (link === '/') return '/'
    if (link === '/blogs') return '/blogs'
    return path === '/blogs' ? `/${link}` : link
  }

  return (
    <>
      <section className='bg-primary w-full px-4 sm:px-6 lg:px-12 py-10 md:py-16'>
        <div className='grid grid-cols-1 md:grid-cols-[45%_1fr_1fr] gap-10 md:gap-8'>
          {/* About Section */}
          <div className="flex flex-col">
            <h2 className='text-4xl sm:text-5xl font-bold text-white'>Dr. Payal Bajaj</h2>
            <span className='text-lg sm:text-xl font-semibold text-gray-100 mt-2'>Senior IVF Consultant</span>
            <p className='mt-6 sm:mt-10 text-sm sm:text-base text-gray-100 max-w-full sm:max-w-[380px] leading-relaxed'>
              Dr. Payal Bajaj, one of the best and most highly reputable gynaecologists, is an IVF specialist in Delhi. She helps provide a detailed explanation and solution to any condition concerning the female reproductive system.
            </p>
            <div className='mt-4 sm:mt-5 flex gap-2 flex-wrap'>
              <Link href='https://www.instagram.com/dr_payalbajaj/' target='_blank' className='w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full p-[2px]'>
                <i className="hgi hgi-stroke hgi-instagram w-full h-full bg-primary rounded-full flex items-center justify-center text-white text-lg sm:text-xl"></i>
              </Link>
              <Link href='https://www.facebook.com/DoctorPayalbajaj' target='_blank' className='w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full p-[2px]'>
                <i className="hgi hgi-stroke hgi-facebook-02 w-full h-full bg-primary rounded-full flex items-center justify-center text-white text-lg sm:text-xl"></i>
              </Link>
              <Link href='https://www.linkedin.com/in/dr-payal-bajaj-2613a923/' target='_blank' className='w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full p-[2px]'>
                <i className="hgi hgi-stroke hgi-linkedin-02 w-full h-full bg-primary rounded-full flex items-center justify-center text-white text-lg sm:text-xl"></i>
              </Link>
              <Link href='https://www.youtube.com/@DrPayalBajaj' target='_blank' className='w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full p-[2px]'>
                <i className="hgi hgi-stroke hgi-youtube w-full h-full bg-primary rounded-full flex items-center justify-center text-white text-lg sm:text-xl"></i>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h2 className='text-2xl sm:text-3xl font-bold text-white'>Quick Links</h2>
            <div className='mt-4 sm:mt-10 flex flex-col gap-1 text-white'>
              <Link href={getHref('/')}>Home</Link>
              <Link href={getHref('#about')}>About</Link>
              <Link href={getHref('#services')}>Services</Link>
              <Link href={getHref('#qualification')}>Qualification</Link>
              <Link href={getHref('/blogs')}>Blogs</Link>
              <Link href={getHref('#contact')}>Contact</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h2 className='text-2xl sm:text-3xl font-bold text-white'>Visit Us</h2>
            <div className='mt-4 sm:mt-10 flex flex-col gap-3'>
              <div className='flex gap-3 items-center'>
                <i className="hgi hgi-stroke hgi-call w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-white rounded-full text-white"></i>
                <Link href='tel:+919911631639' className='text-white text-sm sm:text-base'>+91 9911631639</Link>
              </div>
              <div className='flex gap-3 items-center'>
                <i className="hgi hgi-stroke hgi-mail-01 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center border border-white rounded-full text-white"></i>
                <Link href='mailto:drpayalbajaj@gmail.com' className='text-white text-sm sm:text-base'>drpayalbajaj@gmail.com</Link>
              </div>
            </div>
            <p className='mt-5 text-white text-sm sm:text-base leading-relaxed'>
              Nandi IVF - Best IVF Centre in Ashok Vihar, Delhi.
              <br />
              1st floor, C3/9, Phase II, Pocket C 3, Phase 2, Ashok Vihar, New Delhi, Delhi, 110052
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Footer */}
      <section className='w-full bg-primary py-3 sm:py-5'>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 px-4 sm:px-12'>
          <div className='text-white text-sm sm:text-base'>
            <p>
              Copyright @ 2025 Dr. Payal Bajaj | Developed by 
              <a  target='_blank' className='text-amber-300 ml-1'>Strategix</a>
            </p>
          </div>
          <div className='text-white text-sm sm:text-base'>
            <p className='flex flex-wrap gap-2 sm:gap-4'>
              <Link href="/privacyandpolicy">Privacy Policy</Link> |
              <Link href="/Disclamer">Disclaimer</Link> |
              <Link href="/termofuse">Terms of use</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}