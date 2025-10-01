'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { motion,Variants } from "framer-motion"

type MenuItem = {
    name: string
    path: string
}

const menuItem: MenuItem[] = [
    { name: 'Home', path: '/' },
    { name: 'Doctor', path: '/#doctor' },
    { name: 'About Us', path: '/#Aboutus' },
    { name: 'Services', path: '/#services' },
    { name: 'Qualification', path: '/#qualification' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Details', path: '/#details' },
    { name: 'Rewards', path: '/rewards' }
]

const containerVariants:Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const itemVariants:Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
}

export default function Header() {
    const path = usePathname()
    const [openMenu, setOpenMenu] = useState(false)
    const headerRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                if (window.scrollY > 200) {
                    headerRef.current.classList.add("fixed-nav");
                } else {
                    headerRef.current.classList.remove("fixed-nav");
                }

                if (window.scrollY > 130) {
                    headerRef.current.classList.add("hidden-nav");
                } else {
                    headerRef.current.classList.remove("hidden-nav");
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className="w-full bg-primary z-50" ref={headerRef}>
            <nav className="relative w-full py-[16px] px-[70px] flex items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="relative flex flex-col gap-1 z-50"
                >
                    <Link href='/' className="font-playfair block text-white text-4xl max-[480px]:text-2xl font-bold leading-[1.2]">
                        Dr. Payal Bajaj
                    </Link>
                    <span className="block text-off-white text-[18px] max-[480px]:text-[14px] leading-[1] font-medium">
                        Senior IVF Consultant
                    </span>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className={`z-[40] transition ease-in-out duration-300 lg:relative fixed top-0 right-0 lg:bg-transparent bg-primary bottom-0 lg:p-0 px-10 py-20 lg:translate-x-0
                    ${openMenu ? 'translate-x-0' : 'translate-x-[100%]'}`}
                >
                    <motion.ul className="flex lg:items-center gap-5 flex-col lg:flex-row items-start mt-10 lg:m-0">
                        {menuItem.map((item, idx) => (
                            <motion.li key={idx} variants={itemVariants}>
                                <Link
                                    onClick={() => setOpenMenu(false)}
                                    href={item.path}
                                    className={`hover:text-secondry font-merriweather font-medium text-xl 
                                        ${path === item.path ? 'text-white' : 'text-off-white'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            </motion.li>
                        ))}
                        <motion.li variants={itemVariants}>
                            <Link href='/#contact' className="font-merriweather cursor-pointer relative font-medium flex items-center justify-center bg-white text-primary text-maroon-500 px-7 py-[10px] rounded-md text-xl">
                                Contact
                            </Link>
                        </motion.li>
                    </motion.ul>
                </motion.div>

                <div
                    className="z-50 lg:hidden relative flex flex-col justify-center gap-1 items-center w-[50px] h-[50px] cursor-pointer rounded-full bg-new-white"
                    onClick={() => setOpenMenu(!openMenu)}
                >
                    <span
                        className={`transition duration-300 ease-in-out block bg-primary w-[30px] h-[2px] rounded-2xl ${openMenu ? 'rotate-[45deg] absolute' : 'relative rotate-0'
                            }`}
                    ></span>
                    <span
                        className={`transition duration-300 ease-in-out block bg-primary w-[30px] h-[2px] rounded-2xl ${openMenu ? 'opacity-0 absolute' : 'relative opacity-100'
                            }`}
                    ></span>
                    <span
                        className={`transition duration-300 ease-in-out block bg-primary w-[30px] h-[2px] rounded-2xl ${openMenu ? 'rotate-[-45deg] absolute' : 'relative rotate-0'
                            }`}
                    ></span>
                </div>
            </nav>
        </header>
    )
}
