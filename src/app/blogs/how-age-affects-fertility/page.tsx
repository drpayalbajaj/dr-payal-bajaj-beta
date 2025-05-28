import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <>
            <Header />
            <section className='bg-new-white w-full relative'>
                <div className='bg-new-light-500 max-w-[768px] w-full mx-auto mt-5 '>
                    <div className='relative w-full flex flex-col gap-8'>
                        <h1 className='hero-heading md:text-[36px] text-[24px] font-bold text-primary leading-[1.1]' >
                            How Age Affects Fertility: What Every Woman Should Know
                        </h1>
                        <em className='block -mt-[25px] text-dark text-[14px]'>By Dr. Payal Bajaj - Medical Director & Senior IVF Consultant</em>

                        <div className='w-full'>
                            <Image width={800} height={300} src="/image/blogs/1.png"
                                alt="How Age Affects Fertility: What Every Woman Should Know" className=' block mx-auto' />
                        </div>

                        <div className='w-full relative flex flex-col gap-5'>
                            <p className='font-medium text-dark md:text-xl text-base leading-[1.2]'>
                                Infertility is a topic many women think about only when they begin planning for a family. But what many don&apos;t realize is that <strong className='text-dark'>age plays a major role in a woman&apos;s ability to conceive naturally.</strong>  Whether you are in your late 20s or early 40s, understanding the impact of age on fertility is key to making informed choices
                                <br /><br />
                                As a fertility specialist with over 18 years of experience, I&apos;ve seen many women who delayed trying to conceive—only to face unexpected challenges later. In this blog, I&apos;ll explain how age affects fertility, why egg quality matters, and what options are available if you&apos;re planning late.
                            </p>

                            <h2 className='font-bold md:text-2xl text-lg text-primary'>
                                Your Fertility Timeline: What Happens as You Age?
                            </h2>
                            <p className='font-medium text-steel-gray md:text-xl text-base leading-[1.2]'>
                                Women are born with all the eggs they&apos;ll ever have—about 1 to 2 million at birth. But this number declines with time. By puberty, around 300,000 eggs remain, and with each menstrual cycle, a few are lost. Over the years, not only does the number of eggs decrease, <strong className='text-dark'>but the quality of eggs also declines</strong>, especially after the age of 35.
                                <br />
                                <br />
                                In your 20s and early 30s, fertility is at its peak. Women in this age group generally have regular ovulation, healthier eggs, and higher chances of conceiving naturally. But after age 35, fertility begins to decline more rapidly. By the time a woman reaches 40, the chances of natural conception in any given month drop to about 5%.
                                <br />
                                <br />
                                This doesn&apos;t mean pregnancy is impossible after 35—but it may take longer, and <strong className='text-dark'>there is a higher risk of complications or miscarriage</strong> due to poor egg quality.
                            </p>
                            <h2 className='font-bold md:text-2xl text-lg text-primary'>
                                Egg Quality vs. Egg Quantity: The Real Story
                            </h2>

                            <p className='font-medium text-steel-gray md:text-xl text-base leading-[1.2]'>
                                Many women assume that as long as they are getting regular periods, their fertility is fine. But the real challenge with age is the <strong className='text-dark'>decline in egg quality</strong>, not just quantity. A woman in her late 30s or 40s may still be ovulating every month, but the chances that the egg is healthy and chromosomally normal go down.
                                <br />
                                <br />
                                <strong className='text-dark'>Poor egg quality can lead to:</strong>
                            </p>
                            <ul className='-mt-3 pl-5 list-disc'>
                                <li>
                                    Failure of the egg to fertilize
                                </li>
                                <li>
                                    Failure of the embryo to implant
                                </li>
                                <li>
                                    Higher risk of miscarriage
                                </li>
                                <li>
                                    Increased chances of chromosomal abnormalities (like Down syndrome)
                                </li>
                            </ul>
                            <p>
                                We often assess a woman&apos;s fertility by checking her <strong className='text-dark'>AMH (Anti-Müllerian Hormone) levels, AFC (Antral Follicle Count)</strong>  via ultrasound, and <strong className='text-dark'>FSH levels.</strong> These help us understand her ovarian reserve and guide her treatment options.
                            </p>

                            <h2 className='font-bold md:text-2xl text-lg text-primary'>
                                Fertility Preservation: Thinking Ahead
                            </h2>


                            <p className='font-medium text-steel-gray md:text-xl text-base leading-[1.2]'>
                                Today, more women are choosing to focus on education and career in their 20s and early 30s—and that&apos;s completely okay. But it&apos;s also important to be aware of the biological clock. If you&apos;re not ready to start a family yet, <strong className='text-dark'>fertility preservation through egg freezing</strong> is a smart and safe option
                                <br />
                                <br />
                                Egg freezing allows women to preserve their younger, healthier eggs for future use. Ideally, egg freezing is most successful when done before the age of 35, but it can still be beneficial later depending on individual fertility parameters.
                                <br />
                                <br />
                                At our center, we offer <strong className='text-dark'>advanced fertility preservation services</strong> and help women understand their best window for egg freezing. It&apos;s not just about planning for today—it&apos;s about securing your choices for tomorrow.
                            </p>

                            <h2 className='font-bold md:text-2xl text-lg text-primary'>
                                When to Seek Help: Don&apos;t Wait Too Long
                            </h2>
                            <p className='font-medium text-steel-gray md:text-xl text-base leading-[1.2]'>
                                If you are above 35 and have been trying to conceive for more than 6 months without success, it&apos;s time to consult a fertility specialist. For women under 35, the usual advice is to try for a year before seeking help—but <strong className='text-dark'>age is a strong reason not to delay.</strong>
                                <br />
                                <br />
                                Even if you&apos;re not actively trying to conceive but want to know where you stand in terms of fertility, a simple fertility check-up can give you clarity. Knowing your AMH and egg reserve early can help you plan better, whether you want to conceive sooner or later.
                                <br />
                                <br />
                                If needed, treatments like <strong className='text-dark'>ovulation induction, IUI, or IVF</strong> can be used, depending on your age and test results. In older women, <strong className='text-dark'>IVF with pre-implantation genetic testing (PGT-A)</strong> may improve chances of success by selecting healthy embryos.
                            </p>

                            <h2 className='font-bold md:text-2xl text-lg text-primary'>
                                There&apos;s Still Hope: Age Is a Factor, Not a Barrier
                            </h2>
                            <p className='font-medium text-steel-gray md:text-xl text-base leading-[1.2]'>
                                Yes, age affects fertility—but it&apos;s not the end of the road. I have treated many women in their late 30s and even early 40s who went on to become mothers. With proper planning, personalized treatment, and timely intervention, pregnancy is still very much possible.
                                <br />
                                <br />
                                The key is to be informed and proactive. If you&apos;re concerned about age and fertility, don&apos;t wait in silence. Talk to a specialist, get your tests done, and explore your options. The earlier you act, the  better are your chances of success.
                                <br />
                                <br />
                                <strong className='text-dark'>Let&apos;s take the first step together. Book your consultation with Dr. Payal Bajaj and get the right guidance on your fertility journey—no matter your age.</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Contact />
            <Footer />
        </>
    )
}
