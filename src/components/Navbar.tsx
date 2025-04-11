'use client'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    const menuItems = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "About",
            href: "/about",
        },
        {
            name: "Services",
            href: "/services",
        },
        {
            name: "Qualifications",
            href: "/qualifications",
        },
        {
            name: "Blog",
            href: "/blog",
        },
        {
            name: "Contact",
            href: "/contact",
        },
    ]
    return (
        <header className='header w-full bg-[var(--primary-color)] text-white'>
            <nav className="navbar w-full flex justify-between items-center">
                <div className="logo">
                    <span className='text-4xl font-semibold'>Dr. Payal Bajaj</span>
                    <span className='text-[16px] font-(family-name:--font-pt-serif)'>Senior IVF Consultant</span>
                </div>
                <ul className="menu flex gap-5">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <Link className='font-light text-[var(--white-color)] hover:text-[#d8d8d8] ' href={item.href}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
                <div className='menu-icon flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[var(--white-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-[var(--white-color)] cursor-pointer border-[1px] border-[var(--white-color)]'>
                    <i className="hgi hgi-stroke hgi-menu-01 text-2xl font-medium"></i>
                </div>
            </nav>
        </header>
    )
}
