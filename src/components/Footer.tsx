import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <>
            <section className='bg-primary w-full'>
                <div className='grid md:grid-cols-[45%_1fr_1fr] grid-cols-1 gap-10 md:gap-4'>
                    <div className="block">
                        <h2 className='text-5xl font-bold text-white'>Dr. Payal Bajaj</h2>
                        <span className='text-lg font-semibold text-gray-100'>Senior IVF Consultant</span>
                        <p className=' max-w-[380px] text-base font-normal text-gray-100 mt-10'>
                            Dr. Payal Bajaj, one of the best and most highly reputable gynaecologists, is an IVF specialist in Delhi. She helps provide a detailed explanation and solution to any condition concerning the female reproductive system.
                        </p>
                        <p className='mt-5 flex gap-2'>
                            <Link href='https://www.instagram.com/dr_payalbajaj/' target='_blank' className='w-[40px] h-[40px] bg-white rounded-full p-[2px]'>
                                <i className="hgi hgi-stroke hgi-instagram w-full h-full bg-primary rounded-full  flex items-center justify-center text-white text-xl"></i>
                            </Link>
                            <Link href='https://www.facebook.com/DoctorPayalbajaj' target='_blank' className='w-[40px] h-[40px] bg-white rounded-full p-[2px]'>
                                <i className="hgi hgi-stroke hgi-facebook-02 w-full h-full bg-primary rounded-full  flex items-center justify-center text-white text-xl"></i>
                            </Link>
                            <Link href='https://www.linkedin.com/in/dr-payal-bajaj-2613a923/' target='_blank' className='w-[40px] h-[40px] bg-white rounded-full p-[2px]'>
                                <i className="hgi hgi-stroke hgi-linkedin-02 w-full h-full bg-primary rounded-full  flex items-center justify-center text-white text-xl"></i>
                            </Link>
                            <Link href='https://www.youtube.com/@DrPayalBajaj' target='_blank' className='w-[40px] h-[40px] bg-white rounded-full p-[2px]'>
                                <i className="hgi hgi-stroke hgi-youtube w-full h-full bg-primary rounded-full  flex items-center justify-center text-white text-xl"></i>
                            </Link>
                        </p>
                    </div>

                    <div className="block">
                        <h2 className='text-3xl font-bold text-white'>Quick Links</h2>

                        <div className='md:mt-[75px] mt-5 w-full text-white flex flex-col'>
                            <Link href='/' className=' '>Home</Link>
                            <Link href='#about' className=' mt-1'>About</Link>
                            <Link href='#services' className=' mt-1'>Services</Link>
                            <Link href='#qualification' className=' mt-1'>Qualification</Link>
                            <Link href='/blogs' className='mt-1'>Blogs</Link>
                            <Link href='#contact' className='mt-1'>Contact</Link>
                        </div>
                    </div>
                    <div className="block">
                        <h2 className='text-3xl font-bold text-white'>Get Direction</h2>
                        <p className='md:mt-[70px] mt-5 w-full text-white'>
                            Nandi IVF - Best IVF Centre in Ashok Vihar, Delhi.
                            <br />
                            1st floor, C3/9, Phase II, Pocket C 3, Phase 2, Ashok Vihar, New Delhi, Delhi, 110052
                        </p>
                    </div>
                </div>
            </section>

            <section className='w-full bg-primary' style={{ paddingTop: "0", paddingBottom: "10px" }}>
                <div className='w-full flex items-center justify-between flex-wrap gap-2'>
                    <div className='text-white'>
                        <p>Copyright @ 2025 Dr. Payal Bajaj | Developed by
                            <a href="https://www.wizards.co.in" target='_blank'
                                className='text-amber-300'>Wizards</a></p>
                    </div>
                    <div className='text-white'>
                        <p className='flex gap-2 flex-wrap'>
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
