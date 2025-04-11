import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <>
            <section className='bg-[var(--primary-color)] w-full'>
                <div className='footer-wraper'>
                    <div className="block">
                        <h2 className='text-5xl font-bold text-white'>Dr. Payal Bajaj</h2>
                        <span className='text-lg font-semibold text-gray-100'>Senior IVF Consultant</span>
                        <p className=' max-w-[380px] text-base font-normal text-gray-100 mt-10'>
                            Dr. Payal Bajaj, one of the best and most highly reputable gynaecologists, is an IVF specialist in Delhi. She helps provide a detailed explanation and solution to any condition concerning the female reproductive system.
                        </p>
                        <p className='mt-5 flex gap-2'>
                            <span className='w-[40px] h-[40px] bg-white rounded-full p-[2px]'>
                                <i className="hgi hgi-stroke hgi-instagram w-full h-full bg-[var(--primary-color)] rounded-full  flex items-center justify-center text-white text-xl"></i>
                            </span>
                            <span className='w-[40px] h-[40px] bg-white rounded-full p-[2px]'>
                                <i className="hgi hgi-stroke hgi-facebook-02 w-full h-full bg-[var(--primary-color)] rounded-full  flex items-center justify-center text-white text-xl"></i>
                            </span>
                            <span className='w-[40px] h-[40px] bg-white rounded-full p-[2px]'>
                                <i className="hgi hgi-stroke hgi-new-twitter w-full h-full bg-[var(--primary-color)] rounded-full  flex items-center justify-center text-white text-xl"></i>
                            </span>
                            <span className='w-[40px] h-[40px] bg-white rounded-full p-[2px]'>
                                <i className="hgi hgi-stroke hgi-youtube w-full h-full bg-[var(--primary-color)] rounded-full  flex items-center justify-center text-white text-xl"></i>
                            </span>
                        </p>
                    </div>

                    <div className="block">
                        <h2 className='text-3xl font-bold text-white'>Quick Links</h2>

                        <div className='mt-[75px] w-full text-white flex flex-col'>
                            <Link href='#' className=' '>Home</Link>
                            <Link href='#' className=' mt-1'>About</Link>
                            <Link href='#' className=' mt-1'>Services</Link>
                            <Link href='#' className=' mt-1'>Qualification</Link>
                            <Link href='#' className='mt-1'>Blogs</Link>
                            <Link href='#' className='mt-1'>Contact</Link>
                        </div>
                    </div>
                    <div className="block">
                        <h2 className='text-3xl font-bold text-white'>Get Direction</h2>
                        <p className='mt-[70px] w-full text-white'>
                            Nandi IVF - Best IVF Centre in Ashok Vihar, Delhi.
                            <br />
                            <br />
                            1st floor, C3/9, Phase II, Pocket C 3, Phase 2, Ashok Vihar, New Delhi, Delhi, 110052
                        </p>
                    </div>
                </div>
            </section>

            <section className='w-full bg-[var(--primary-color)]' style={{ paddingTop: "0", paddingBottom: "10px" }}>
                <div className='w-full flex items-center justify-between'>
                    <div className='text-white'>
                        <p>Copyright @ 2025 Dr. Payal Bajaj | Developed by <a href="" className='text-amber-300'>Wizards</a></p>
                    </div>
                    <div className='text-white'>
                        <p className='flex gap-2'>
                            <Link href="#">Privacy Policy</Link> |
                            <Link href="#">Disclaimer</Link> |
                            <Link href="#">Terms of use </Link>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
