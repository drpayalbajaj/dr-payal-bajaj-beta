'use client'
import Testimonials from '@/components/Testimonials'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

export default function page() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Map />
            <Testimonials />
            <Footer />
            <Toaster />
        </>
    )
}

function Header() {
    return (
        <header className='z-10 relative w-full bg-primary md:px-20 md:py-4 overflow-hidden'>
            <nav className='w-full relative flex items-center justify-between gap-10'>
                <Link href="/">
                    <h5 className="block text-zinc-100 text-4xl max-[480px]:text-xl font-bold leading-[1]">
                        Dr. Payal Bajaj
                    </h5>
                    <span className="block text-zinc-100 text-[18px] max-[480px]:text-[12px] leading-[1] font-medium">
                        Senior IVF Consultant
                    </span>
                </Link>
                <Link href="/" className='relative bg-white text-primary md:px-7 md:py-3 md:text-xl px-3 py-2 text-[14px] font-semibold rounded hover:bg-zinc-100'>
                    Visit Website
                </Link>
            </nav>
        </header>
    )
}

function Hero() {
    const [isFormOpen, setIsFormOpen] = useState(false)

    return (
        <main className='relative w-full overflow-hidden'>
            <section className='relative h-full w-full grid md:grid-cols-2 grid-cols-1 gap-3 '>

                <div className='w-full relative h-full flex flex-col justify-center'>
                    <h1 className='lg:text-5xl md:text-3xl text-3xl font-pt font-bold text-primary leading-[1.2]'>
                        Personalized IVF care with compassion and expertise from  Dr. Payal Bajaj
                    </h1>

                    <button className='mt-10 flex w-max bg-primary px-7 py-4 rounded text-white font-semibold text-xl cursor-pointer' onClick={() => setIsFormOpen(true)}>
                        Book Consultation
                    </button>
                    <div className='mt-5'>
                        <p className='mt-5 flex gap-2'>
                            <Link href='https://www.instagram.com/dr_payalbajaj/' target='_blank'
                                className='w-[50px] h-[50px] bg-white rounded-full p-[2px]'>
                                <i className="hgi hgi-stroke hgi-instagram w-full h-full bg-primary rounded-full  flex items-center justify-center text-white text-xl"></i>
                            </Link>
                            <Link href='https://www.facebook.com/DoctorPayalbajaj' target='_blank'
                                className='w-[50px] h-[50px] bg-white rounded-full p-[2px]'>
                                <i className="hgi hgi-stroke hgi-facebook-02 w-full h-full bg-primary rounded-full  flex items-center justify-center text-white text-xl"></i>
                            </Link>
                            <Link href='https://www.linkedin.com/in/dr-payal-bajaj-2613a923/' target='_blank'
                                className='w-[50px] h-[50px] bg-white rounded-full p-[2px]'>
                                <i className="hgi hgi-stroke hgi-linkedin-02 w-full h-full bg-primary rounded-full  flex items-center justify-center text-white text-xl"></i>
                            </Link>
                            <Link href='https://www.youtube.com/@DrPayalBajaj' target='_blank'
                                className='w-[50px] h-[50px] bg-white rounded-full p-[2px]'>
                                <i className="hgi hgi-stroke hgi-youtube w-full h-full bg-primary rounded-full  flex items-center justify-center text-white text-xl"></i>
                            </Link>
                        </p>
                    </div>
                </div>

                <div className='w-full relative h-full flex items-center lg:justify-end justify-center'>
                    <Image src="/image/hero/about-2.jpg"
                        width={1000}
                        height={1000}
                        alt='Dr. Payal Bajaj'
                        className='w-[500px] h-auto object-cover'
                    />
                </div>
            </section>
            <Form isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
        </main>
    )
}

type FormProps = {
    isFormOpen: boolean;
    setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Form({ isFormOpen, setIsFormOpen }: FormProps) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        message: ''
    });
    const [shouldRender, setShouldRender] = useState(false)
    useEffect(() => {
        const showTimer = setTimeout(() => {
            setIsFormOpen(true);
            setShouldRender(true);
        }, 3000);

        return () => clearTimeout(showTimer);
    }, [setIsFormOpen]);

    useEffect(() => {
        if (!isFormOpen) {
            const closeTimer = setTimeout(() => {
                setShouldRender(false)
            }, 300)
            return () => clearTimeout(closeTimer)
        } else {
            setShouldRender(true)
        }
    }, [isFormOpen])

    useEffect(() => {
        if (isFormOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isFormOpen]);

    if (!shouldRender) return null

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        for (const key in formData) {
            if (!formData[key as keyof typeof formData]) {
                alert(`Please fill out the ${key} field.`);
                return;
            }
        }

        toast.promise(
            axios
                .post("/api/enquiry", formData, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((response) => {
                    if (response.status === 200) {
                        setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            location: "",
                            message: "",
                        });
                        setIsFormOpen(false);
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
        <section
            style={{ position: 'fixed' }}
            className={`inset-0 z-50 flex items-center justify-center transition-all duration-300 ease-in-out 
            ${isFormOpen ? 'opacity-100 backdrop-blur-sm' : 'opacity-0 pointer-events-none backdrop-blur-0'}
        `}>
            <div className='w-full h-full flex items-center justify-center'>
                <div
                    className={`transform transition-all duration-300 ease-in-out 
                    ${isFormOpen ? 'scale-100 translate-y-0 opacity-100' : 'scale-90 -translate-y-10 opacity-0'}
                    max-w-[500px] w-full rounded-xl p-5 bg-primary`}
                >

                    <div className='w-full relative'>

                        <div className='w-full flex items-center justify-between'>
                            <span className='text-2xl text-white font-bold'>Book Consultation</span>
                            <div
                                className='w-12 h-12 rounded-full border border-white cursor-pointer flex justify-center items-center'
                                onClick={() => setIsFormOpen(false)}
                            >
                                <Image src="/image/svg/close-btn.svg" width={30} height={30} alt='Close Btn' />
                            </div>
                        </div>

                        <div className='mt-10 w-full relative flex flex-col gap-5'>
                            {[
                                { name: 'name', placeholder: 'Name', type: 'text' },
                                { name: 'email', placeholder: 'Email', type: 'email' },
                                { name: 'phone', placeholder: 'Phone No.', type: 'tel' },
                                { name: 'location', placeholder: 'Location', type: 'text' }
                            ].map((field, i) => (
                                <div key={i} className='w-full bg-zinc-100 rounded px-3 py-3'>
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        required
                                        placeholder={field.placeholder}
                                        value={formData[field.name as keyof typeof formData]}
                                        onChange={handleChange}
                                        className='bg-transparent w-full h-full text-lg outline-none border-none'
                                    />
                                </div>
                            ))}
                            <div className='w-full bg-zinc-100 rounded px-3 py-3'>
                                <textarea
                                    name='message'
                                    required
                                    placeholder='Message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    className='bg-transparent w-full h-full text-lg outline-none border-none'
                                />
                            </div>
                        </div>

                        <div className='mt-8 w-full'>
                            <button onClick={handleSubmit}
                                className='w-full px-6 py-2 bg-white text-primary font-bold text-lg rounded cursor-pointer hover:bg-new-white hover:text-dark transition-all duration-300 ease-in-out'>
                                Send
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

function About() {
    return (
        <section className="w-full relative overflow-x-hidden md:px-20 md:py-16 px-8 py-10">
            <div className="w-full relative ">

                <div
                    className="w-full relative h-full flex flex-col justify-center"
                >
                    <h2 className="md:text-5xl text-3xl font-medium text-primary ">
                        About Dr. Payal Bajaj
                    </h2>

                    <p className="mt-10 text-2xl leading-[1.1] font-medium text-dark">
                        She is Medical Director And Senior IVF Consultant
                    </p>
                    <span className="mt-2 text-steel-gray text-lg leading-[1.2]">
                        Dr Payal Bajaj is an experienced obstetrician and gynecologist with over 20 years of experience in the discipline. She is also a Reproductive endocrinologist and Infertility specialist par excellence.
                    </span>

                    <h3 className="mt-3 text-2xl text-dark font-bold leading-[1.1]">
                        Dr. Payal Bajaj Creating Miracles Personalized IVF Solutions for Growing Families.
                    </h3>

                    <span className="mt-2 text-steel-gray text-lg leading-[1.2]">
                        Dr. Payal Bajaj, one of the best and most highly reputable gynaecologists, is an IVF specialist in Delhi. She helps provide a detailed explanation and solution to any condition concerning the female reproductive system.
                    </span>

                    <h3 className="mt-3 text-2xl text-dark font-bold leading-[1.1]">
                        20 years of experience
                    </h3>

                    <span className="mt-2 text-steel-gray text-lg leading-[1.2]">
                        Dr Payal Bajaj has won various academic awards all through her academic career. She is expert at stimulating following up ovarian cycles in different types of infertile patients and is a strong believer in an individualized management of infertility. She sticks to evidence-based protocols and strives to provide competent, rational, ethical, and transparent clinical care to the infertile couple.
                    </span>
                </div>

            </div>
        </section>
    )
}

function Map() {
    return (
        <section className='md:px-20 px-8 py-8'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13999.05969170394!2d77.15997034104505!3d28.69667783232364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d035e26ae8fd5%3A0xe262d0f9c2479472!2sNandi%20IVF%20-%20Best%20IVF%20Centre%20in%20Ashok%20Vihar%2C%20Delhi!5e0!3m2!1sen!2sin!4v1720698080526!5m2!1sen!2sin"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className='rounded-xl h-[480px] max-[480px]:h-[300px]'
                title="Nandi IVF Location"
            ></iframe>
        </section>
    )
}

function Footer() {
    return (
        <footer className='w-full bg-primary md:px-20 px-8 py-4 '>
            <div className='w-full relative flex justify-center items-center'>
                <p className='text-white'>Copyright @ 2025 Dr. Payal Bajaj | Developed by
                    <a href="https://www.wizards.co.in" target='_blank'
                        className='text-amber-300'> Wizards</a></p>
            </div>
        </footer>
    )
}
