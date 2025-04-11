'use client'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Awards() {
    return (
        <section>
            <h2 className='text-center relative text-5xl font-bold text-[var(--primary-color)]'>
                Achievements & Awards
            </h2>

            <div className='mt-16 w-full'>
                <Sliders />
            </div>
        </section>
    )
}

export const Sliders = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <Slider {...settings} >
            <div className='relative w-full border border-[var(--primary-color)] h-full rounded-md p-4'>
                <div className='w-full h-full'>
                    <div className='w-full flex items-center justify-center'>
                        <div className='w-[60px] h-[60px] rounded-full bg-amber-300'>

                        </div>
                    </div>

                    <div className='mt-15 w-full'>
                        <h3 className='text-center text-[var(--primary-color)] font-semibold'>ASPIRE</h3>
                    </div>
                    <div className='mt-2 w-full'>
                        <p className='text-left text-[var(--secondary-color)] text-base'>
                            Isar training certificate in Reproductive Medicine from the esteemed St Mothers Hospital, Japan , under world renowned doctor , Dr Atsushi Tanaka. Senior residency from Bara Hindu Rao Hospital, Delhi .
                        </p>
                    </div>
                </div>
            </div>
            <div className='relative w-full border border-[var(--primary-color)] h-full rounded-md p-4'>
                <div className='w-full h-full'>
                    <div className='w-full flex items-center justify-center'>
                        <div className='w-[60px] h-[60px] rounded-full bg-amber-300'>

                        </div>
                    </div>

                    <div className='mt-15 w-full'>
                        <h3 className='text-center text-[var(--primary-color)] font-semibold'>ASPIRE</h3>
                    </div>
                    <div className='mt-2 w-full'>
                        <p className='text-left text-[var(--secondary-color)] text-base'>
                            Isar training certificate in Reproductive Medicine from the esteemed St Mothers Hospital, Japan , under world renowned doctor , Dr Atsushi Tanaka. Senior residency from Bara Hindu Rao Hospital, Delhi .
                        </p>
                    </div>
                </div>
            </div>
            <div className='relative w-full border border-[var(--primary-color)] h-full rounded-md p-4'>
                <div className='w-full h-full'>
                    <div className='w-full flex items-center justify-center'>
                        <div className='w-[60px] h-[60px] rounded-full bg-amber-300'>

                        </div>
                    </div>

                    <div className='mt-15 w-full'>
                        <h3 className='text-center text-[var(--primary-color)] font-semibold'>ASPIRE</h3>
                    </div>
                    <div className='mt-2 w-full'>
                        <p className='text-left text-[var(--secondary-color)] text-base'>
                            Isar training certificate in Reproductive Medicine from the esteemed St Mothers Hospital, Japan , under world renowned doctor , Dr Atsushi Tanaka. Senior residency from Bara Hindu Rao Hospital, Delhi .
                        </p>
                    </div>
                </div>
            </div>
            <div className='relative w-full border border-[var(--primary-color)] h-full rounded-md p-4'>
                <div className='w-full h-full'>
                    <div className='w-full flex items-center justify-center'>
                        <div className='w-[60px] h-[60px] rounded-full bg-amber-300'>

                        </div>
                    </div>

                    <div className='mt-15 w-full'>
                        <h3 className='text-center text-[var(--primary-color)] font-semibold'>ASPIRE</h3>
                    </div>
                    <div className='mt-2 w-full'>
                        <p className='text-left text-[var(--secondary-color)] text-base'>
                            Isar training certificate in Reproductive Medicine from the esteemed St Mothers Hospital, Japan , under world renowned doctor , Dr Atsushi Tanaka. Senior residency from Bara Hindu Rao Hospital, Delhi .
                        </p>
                    </div>
                </div>
            </div>
        </Slider>
    )
}
