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
                            It&apos;s Not Just Women - Why Men&apos;s Health Matters in Pregnancy
                        </h1>
                        <em className='block -mt-[25px] text-dark text-[14px]'>By Dr. Payal Bajaj - Medical Director & Senior IVF Consultant</em>

                        <div className='w-full'>
                            <Image width={800} height={400} src="/image/blogs/5.png" alt="It's Not Just Women – Why Men’s Health Matters in Pregnancy" className=' block mx-auto' />
                        </div>

                        <div className='w-full relative flex flex-col gap-5'>
                            <p className='font-medium text-dark md:text-xl text-base leading-[1.2]'>
                                When we talk about pregnancy and miscarriage, most people think of women&apos;s health. We often forget that men&apos;s health, especially the health of their sperm, is just as important. Recent studies show that problems with sperm health can affect pregnancy outcomes, including miscarriage. A healthy pregnancy is not just the responsibility of the woman - it takes both partners working together.
                            </p>

                            <h2 className='font-bold md:text-2xl text-lg text-primary'>
                                How Men&apos;s Health Affects Pregnancy
                            </h2>
                            <p className='font-medium text-steel-gray md:text-xl text-base leading-[1.2]'>
                                Sperm health plays a big role in starting and keeping a healthy pregnancy. Sperm carries half of the baby&apos;s DNA, so if sperm is not healthy, it can cause problems with pregnancy. For example, poor sperm quality can lead to difficulty in getting pregnant, and even if pregnancy happens, it might increase the risk of miscarriage.
                                <br /><br />
                                Problems like low sperm count, poor sperm movement, or abnormal sperm shape can all affect fertility. Even sperm with damaged DNA can cause the pregnancy to stop before it becomes strong enough to continue. This is why it&apos;s important for men to think about their reproductive health just as much as women.
                            </p>
                            <h2 className='font-bold md:text-2xl text-lg text-primary'>
                                What Can Men Do to Improve Sperm Health?
                            </h2>

                            <p className='font-medium text-steel-gray md:text-xl text-base leading-[1.2]'>
                                There are many ways men can improve their sperm health and support a healthy pregnancy. Here are some simple steps:
                            </p>

                            <ul className='-mt-3 pl-5 list-disc text-dark'>
                                <li>
                                    <strong>Avoid Smoking and Alcohol: </strong> Smoking and drinking too much alcohol can harm sperm. These habits can damage the sperm&apos;s DNA and reduce sperm count and movement. Men who want to become fathers should try to quit smoking and limit alcohol.
                                </li>

                                <li>
                                    <strong>Stay at a Healthy Weight: </strong>Being overweight or obese can affect hormone levels and lower sperm quality. Men should aim for a healthy weight through balanced eating and regular exercise.
                                </li>
                                <li>
                                    <strong>Eat a Healthy Diet: </strong>Antioxidants in foods like berries, nuts, green leafy vegetables, and whole grains can help protect sperm from damage. A diet rich in fruits, vegetables, and healthy fats is good for both fertility and overall health.
                                </li>
                                <li>
                                    <strong>Avoid Heat: </strong>High temperatures can harm sperm. Men should avoid hot tubs, saunas, and wearing tight underwear. Even sitting for long periods with a laptop on the lap can increase testicular temperature and affect sperm.
                                </li>
                                <li>
                                    <strong>Manage Stress: </strong>High stress levels can disrupt hormones that affect sperm production. Finding ways to relax, such as yoga, meditation, or regular exercise, can help manage stress and improve sperm health.
                                </li>
                                <li>
                                    <strong>Get Enough Sleep: </strong>Good sleep is important for hormone balance and sperm production. Men should aim for 7-8 hours of sleep every night to help their body function well.
                                </li>
                                <li>
                                    <strong>Consult a Doctor: </strong>If a couple is having trouble getting pregnant or if the woman has had miscarriages, the man should see a doctor for a sperm analysis. This simple test can check the number, shape, and movement of sperm to see if there are any problems.
                                </li>
                            </ul>

                            <h2 className='font-bold md:text-2xl text-lg text-primary'>
                                Changing the Conversation - It&apos;s a Shared Responsibility
                            </h2>

                            <p className='font-medium text-steel-gray md:text-xl text-base leading-[1.2]'>
                                In many cultures, there is a lot of blame placed on women when a pregnancy doesn&apos;t succeed. This is unfair and wrong. Pregnancy is a shared journey that involves both partners. It&apos;s time to change the conversation and recognize that men&apos;s health is just as important as women&apos;s when it comes to fertility and miscarriage.
                                <br /><br />
                                Men can take simple steps to improve their reproductive health and support their partner. Together, they can create the best possible conditions for a healthy pregnancy and a healthy baby
                            </p>

                            <h2 className='font-bold md:text-2xl text-lg text-primary'>
                                Support from Experts Like Dr. Payal Bajaj
                            </h2>
                            <p className='font-medium text-steel-gray md:text-xl text-base leading-[1.2]'>
                                At <strong>Nandi IVF</strong>, we believe that pregnancy is a team effort. Dr. Payal Bajaj, our experienced IVF specialist and gynecologist, has helped many couples understand how both partner&apos;s health affects fertility. Dr. Bajaj brings over 23 years of experience and expertise in reproductive medicine, offering guidance and support to couples who are trying to start or expand their family.
                                <br /><br />
                                If you or your partner are facing challenges with fertility or have experienced pregnancy loss, don&apos;t hesitate to reach out to us. A simple sperm analysis or a consultation can make a big difference in understanding the full picture of fertility.
                                <br /><br />
                                Remember, healthy sperm matters just as much as healthy eggs. When both partners work together, the journey to parenthood becomes smoother and healthier.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Contact />
        </>
    )
}
