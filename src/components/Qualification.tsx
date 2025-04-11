import Image from 'next/image'
import React from 'react'

export default function Qualification() {
    return (
        <section>
            <h2 className='mt-5 text-center relative text-5xl font-bold text-[var(--primary-color)]'>
                Qualification of Dr. Paya Bajaj
            </h2>

            <div className='qualification-wraper mt-20'>
                <div className='w-full h-full rounded-lg border border-[var(--primary-color)] bg-[var(--primary-color)]'>
                    <div className="card-wrape w-full flex justify-center items-center flex-col h-full p-5">
                        <Image src='/images/logo/logo-01.png' width={100} height={100} alt='dr. payal' />
                        <h3>Graduation</h3>
                        <p>
                            From the renowned Lady Hardinge Medical College.
                        </p>
                    </div>
                </div>
                <div className='w-full h-full rounded-lg border border-[var(--primary-color)] bg-[var(--primary-color)]'>
                    <div className="card-wrape w-full flex justify-center items-center flex-col h-full p-5">
                        <Image src='/images/logo/logo-02.png' width={100} height={100} alt='dr. payal' />
                        <h3>Postgraduation</h3>
                        <p>
                            From prestigious VMMC and Safdarjung Hospital.
                        </p>
                    </div>
                </div>
                <div className='w-full h-full rounded-lg border border-[var(--primary-color)] bg-[var(--primary-color)]'>
                    <div className="card-wrape w-full flex justify-center items-center flex-col h-full p-5">
                        <Image src='/images/logo/logo-03.png' width={100} height={100} alt='dr. payal' />
                        <h3>DMAS</h3>
                        <p>
                            Diploma in Minimal access surgery from World Laparoscopy hospital.
                        </p>
                    </div>
                </div>
                <div className='w-full h-full rounded-lg border border-[var(--primary-color)] bg-[var(--primary-color)]'>
                    <div className="card-wrape w-full flex justify-center items-center flex-col h-full p-5">
                        <Image src='/images/logo/logo-04.png' width={100} height={100} alt='dr. payal' />
                        <h3>DRM</h3>
                        <p>
                            Diploma in Reproductive Medicine from University of Keli , Germany.
                        </p>
                    </div>
                </div>
                <div className='w-full h-full rounded-lg border border-[var(--primary-color)] bg-[var(--primary-color)]'>
                    <div className="card-wrape w-full flex justify-center items-center flex-col h-full p-5">
                        <Image src='/images/logo/logo-05.png' width={100} height={100} alt='dr. payal' />
                        <h3>Graduation</h3>
                        <p>
                            Full academic one year fellowship from AFGC. India.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
