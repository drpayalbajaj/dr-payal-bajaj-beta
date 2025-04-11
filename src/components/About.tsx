import Image from 'next/image'
import React from 'react'

export default function About() {
    return (
        <section style={{ paddingBottom: "0" }}>
            <div className="about-wraper">
                <Image src="/images/main-image/main-02.png" alt="about" width={500} height={500} className="about-image" />

                <div className='about-content'>
                    <h2>About Dr. Payal Bajaj</h2>
                    <p>Dr. Payal Bajaj Creating Miracles Personalized IVF Solutions for Growing Families.</p>
                    <span>Dr. Payal Bajaj, one of the best and most highly reputable gynaecologists, is an IVF specialist in Delhi. She helps provide a detailed explanation and solution to any condition concerning the female reproductive system.</span>
                    <h3>20 years of experience</h3>
                    <span>
                        Dr Payal Bajaj has won various academic awards all through her academic career.She is expert at stimulating following up ovarian cycles in different types of infertile patients and is a strong believer in an individualized management of infertility. She sticks evidence based protocols and strives to provide competent rational ethical and transparent clinical care to the infertile couple.
                    </span>
                    <h3>
                        She is also member of various prestigious Gynae and Infertility societies of India
                    </h3>

                    <div className='flex mt-5 gap-5 spo-logo '>
                        <Image src="/images/logo/aogd.png" alt="award" width={50} height={50} />
                        <Image src="/images/logo/dfg.png" alt="award" width={50} height={50} />
                        <Image src="/images/logo/fogsi.jpg" alt="award" width={50} height={50} />
                        <Image src="/images/logo/fps.png" alt="award" width={60} height={30} />
                        <Image src="/images/logo/logo-new.jpg" alt="award" width={50} height={50} />
                    </div>
                </div>
            </div>
        </section>
    )
}
