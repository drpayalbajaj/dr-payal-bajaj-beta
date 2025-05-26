import Contact from '@/components/Contact'
import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <>
            <section className='bg-new-white w-full relative'>
                <div className='bg-new-light-500 max-w-[768px] w-full mx-auto mt-5 '>
                    <div className='relative w-full flex flex-col gap-8'>
                        <h1 className='hero-heading md:text-[36px] text-[24px] font-bold text-primary leading-[1.1]' >
                            When to See a Fertility Specialist: Don&apos;t Delay Your Parenthood Journey
                        </h1>
                        <em className='block -mt-[25px] text-dark text-[14px]'>By Dr. Payal Bajaj - Medical Director & Senior IVF Consultant</em>

                        <div className='w-full'>
                            <Image width={800} height={400} src="/image/blogs/4.png" alt="When to See a Fertility Specialist: Don&apos;t Delay Your Parenthood Journey" className=' block mx-auto' />
                        </div>

                        <div className='w-full relative flex flex-col gap-5'>
                            <p className='font-medium text-dark md:text-xl text-base leading-[1.2]'>
                                For many couples, starting a family is one of life&apos;s most cherished dreams. But when pregnancy doesn&apos;t happen naturally, it can lead to emotional stress and uncertainty. It&apos;s important to know that infertility is a medical condition — <strong className='text-dark'>not a failure or weakness.</strong> Today, with modern science and expert care, most causes of infertility can be identified and treated. <strong className='text-dark'>The key is to recognize the right time to seek help.</strong> As a senior IVF consultant with over 18 years of experience, I have seen how early intervention can make a world of difference in achieving successful outcomes.
                            </p>

                            <h2 className='font-bold md:text-2xl text-lg text-primary'>
                                Why Timing Matters in Fertility Treatment
                            </h2>
                            <p className='font-medium text-steel-gray md:text-xl text-base leading-[1.2]'>
                                One of the most common mistakes couples make is waiting too long to consult a fertility specialist. Age, especially in women, plays a crucial role in fertility. A woman&apos;s egg reserve and quality naturally decrease over time, especially after the age of 35. If a couple tries for more than 12 months without success (or 6 months if the woman is over 35), it&apos;s time to seek professional advice. Early consultation not only saves time but also opens up more treatment options with higher chances of success.
                            </p>
                            <h2 className='font-bold md:text-2xl text-lg text-primary'>
                                Common Signs You Should Not Ignore
                            </h2>

                            <p className='font-medium text-steel-gray md:text-xl text-base leading-[1.2]'>
                                There are several signs that may indicate underlying fertility issues, and these should not be ignored. If a woman has irregular periods, very painful menstruation, or no periods at all, it may suggest ovulation problems like PCOS or hormonal imbalance. If there have been repeated miscarriages, it may point to issues that need medical evaluation. Men too should not be overlooked—low sperm count, erectile dysfunction, or a history of infections or surgeries can impact male fertility. Even if you are not sure whether something is related to fertility, it&apos;s always better to get a medical opinion rather than wait and worry.
                            </p>


                            <h2 className='font-bold md:text-2xl text-lg text-primary'>
                                What Happens During a Fertility Consultation?
                            </h2>

                            <p className='font-medium text-steel-gray md:text-xl text-base leading-[1.2]'>
                                A visit to a fertility specialist is not just about tests and treatments—it&apos;s about understanding your body and your options. At my clinic, we begin with a detailed conversation to learn about your medical history, lifestyle, and any previous tests or treatments. Basic investigations like ultrasound, hormone tests, AMH levels, and semen analysis help us get a complete picture. Based on these findings, we explain the situation in simple terms and guide you through the available treatment options, which may include lifestyle changes, medication, IUI, IVF, or advanced procedures depending on the individual case.
                            </p>

                            <h2 className='font-bold md:text-2xl text-lg text-primary'>
                                Don&apos;t Let Fear Delay Your Dreams
                            </h2>
                            <p className='font-medium text-steel-gray md:text-xl text-base leading-[1.2]'>
                                Many couples delay consulting a specialist due to fear, social stigma, or misinformation. But the truth is, the earlier you take action, the better your chances of success. Fertility treatments today are safer, more advanced, and highly personalized. With the right care and ethical guidance, even couples facing challenges like low ovarian reserve, recurrent IVF failure, or unexplained infertility can become parents. What matters is taking the first step without delay.
                            </p>

                            <h2 className='font-bold md:text-2xl text-lg text-primary'>
                                Final Thoughts
                            </h2>
                            <p className='font-medium text-steel-gray md:text-xl text-base leading-[1.2]'>
                                Infertility is more common than people think, and thankfully, it is also more treatable than ever before. As the <strong className='text-dark'>Medical Director and Senior IVF Consultant,</strong> I believe in offering not just medical care, but emotional support and honest guidance at every step. If you&apos;re facing difficulties in conceiving, don&apos;t wait for months or years hoping things will work out on their own. Book a consultation and let us help you understand your fertility better. <strong className='text-dark'>Your dream of becoming a parent deserves expert care—and the right time to begin is now.</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Contact />
        </>
    )
}
