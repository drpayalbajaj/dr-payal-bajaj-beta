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
                        <h3 className='hero-heading md:text-[36px] text-[24px] font-bold text-primary leading-[1.1]' >
                            Key Difference Between IVF and Surrogacy: A Complete Guide
                        </h3>
                        <em className='block -mt-[25px] text-dark text-[14px]'>By Dr. Payal Bajaj - Medical Director & Senior IVF Consultant</em>

                        <div className='w-full'>
                            <Image width={800} height={300} src="/image/blogs/3.png"
                                alt="Difference Between IVF and Surrogacy" className=' block mx-auto' />
                        </div>

                        <div className='w-full relative flex flex-col gap-5'>
                            <p className='font-medium text-dark md:text-xl text-base leading-[1.2]'>
                                When couples face demanding situations in conceiving, contemporary reproductive medicine gives more than one solution. Two of the most generally discussed preferences are <strong className='text-dark'>IVF (In Vitro Fertilization) and Surrogacy.</strong> While each treatment intends to help individuals achieve parenthood, they fluctuate substantially in method, eligibility, and emotional considerations.
                                <br /><br />
                                In this distinct guide, I&apos;ll explain the distinction between IVF and surrogacy to help intended parents make knowledgeable decisions. IVF and surrogacy are advanced fertility options for couples facing conception challenges, but understanding which path is right for you is crucial.
                            </p>

                            <h2 className='font-bold md:text-2xl text-lg text-primary'>
                                Understanding In Vitro Fertilization (IVF)
                            </h2>
                            <p className='font-medium text-steel-gray md:text-xl text-base leading-[1.2]'>
                                IVF is one of the most superior and broadly used fertility treatments today. In this process, a woman&apos;s eggs are retrieved and fertilized with sperm in a laboratory. The resulting embryo is then transferred into the woman&apos;s uterus for pregnancy.
                                <br />
                                <br />
                                <strong className='text-dark'>IVF is commonly recommended for couples dealing with:</strong>
                            </p>
                            <ul className='-mt-3 pl-5 list-disc'>
                                <li>Blocked or damaged fallopian tubes</li>
                                <li>Male infertility issues</li>
                                <li>Unexplained infertility</li>
                                <li>Age-related fertility decline</li>
                            </ul>
                            <p className='font-medium text-steel-gray md:text-xl text-base leading-[1.2]'>
                                With advancements in technology and expertise available at leading fertility centers, <strong className='text-dark'>IVF success rates have improved significantly</strong>, making it a favored choice for many couples.
                            </p>

                            <h2 className='font-bold md:text-2xl text-lg text-primary'>
                                What Is Surrogacy?
                            </h2>
                            <p className='font-medium text-steel-gray md:text-xl text-base leading-[1.2]'>
                                Surrogacy is a fertility alternative wherein another woman, referred to as a surrogate, carries and delivers a child for the intended parents. This approach is usually recommended when a woman cannot carry a pregnancy due to medical or uterine conditions.
                                <br />
                                <br />
                                <strong className='text-dark'>Types of surrogacy include:</strong>
                            </p>
                            <ul className='-mt-3 pl-5 list-disc'>
                                <li>
                                    <strong className='text-dark'>Gestational Surrogacy:</strong> The embryo is created using the intended parents&apos; or donors&apos; egg and sperm, and the surrogate has no genetic link to the baby.
                                </li>
                                <li>
                                    <strong className='text-dark'>Traditional Surrogacy</strong> (largely limited in India): The surrogate&apos;s own egg is used.
                                </li>
                            </ul>
                            <p className='font-medium text-steel-gray md:text-xl text-base leading-[1.2]'>
                                An experienced fertility specialist carefully evaluates whether surrogacy is medically and legally suitable for the couple.
                            </p>

                            <h2 className='font-bold md:text-2xl text-lg text-primary'>
                                Key Differences Between IVF and Surrogacy
                            </h2>

                            <h3 className='font-semibold md:text-xl text-base text-primary mt-4'>
                                1. Who Carries the Pregnancy
                            </h3>
                            <p className='font-medium text-steel-gray md:text-xl text-base leading-[1.2]'>
                                <strong className='text-dark'>IVF:</strong> The intended mother carries the baby.
                                <br />
                                <strong className='text-dark'>Surrogacy:</strong> A surrogate carries the baby on behalf of the parents.
                            </p>

                            <h3 className='font-semibold md:text-xl text-base text-primary mt-4'>
                                2. Medical Indications
                            </h3>
                            <p className='font-medium text-steel-gray md:text-xl text-base leading-[1.2]'>
                                <strong className='text-dark'>IVF is suitable</strong> when pregnancy is feasible, but conception is difficult.
                                <br />
                                <strong className='text-dark'>Surrogacy is recommended</strong> when pregnancy is medically risky or impossible.
                            </p>

                            <h3 className='font-semibold md:text-xl text-base text-primary mt-4'>
                                3. Emotional and Legal Factors
                            </h3>
                            <p className='font-medium text-steel-gray md:text-xl text-base leading-[1.2]'>
                                Surrogacy involves more emotional, legal, and ethical considerations compared to IVF. Reputed fertility specialists guide couples through every step with transparency and ensure all legal requirements are met.
                            </p>

                            <h3 className='font-semibold md:text-xl text-base text-primary mt-4'>
                                4. Cost and Duration
                            </h3>
                            <p className='font-medium text-steel-gray md:text-xl text-base leading-[1.2]'>
                                <strong className='text-dark'>Surrogacy is usually more expensive and time-consuming than IVF</strong>, owing to legal procedures, surrogate care, and monitoring requirements. However, for many couples, it represents the best path to parenthood.
                            </p>

                            <h2 className='font-bold md:text-2xl text-lg text-primary'>
                                IVF vs Surrogacy: A Quick Comparison
                            </h2>
                            <div className='w-full overflow-x-auto'>
                                <table className='w-full border-collapse border border-gray-300 mt-4'>
                                    <thead>
                                        <tr className='bg-primary text-white'>
                                            <th className='border border-gray-300 p-3 text-left'>Aspect</th>
                                            <th className='border border-gray-300 p-3 text-left'>IVF</th>
                                            <th className='border border-gray-300 p-3 text-left'>Surrogacy</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='border border-gray-300 p-3 font-medium'>Pregnancy Carrier</td>
                                            <td className='border border-gray-300 p-3'>Intended mother</td>
                                            <td className='border border-gray-300 p-3'>Surrogate</td>
                                        </tr>
                                        <tr className='bg-gray-50'>
                                            <td className='border border-gray-300 p-3 font-medium'>Genetic Link</td>
                                            <td className='border border-gray-300 p-3'>Parents&apos; own</td>
                                            <td className='border border-gray-300 p-3'>Parents&apos; or donor</td>
                                        </tr>
                                        <tr>
                                            <td className='border border-gray-300 p-3 font-medium'>Legal Complexity</td>
                                            <td className='border border-gray-300 p-3'>Minimal</td>
                                            <td className='border border-gray-300 p-3'>High</td>
                                        </tr>
                                        <tr className='bg-gray-50'>
                                            <td className='border border-gray-300 p-3 font-medium'>Cost</td>
                                            <td className='border border-gray-300 p-3'>Moderate</td>
                                            <td className='border border-gray-300 p-3'>Higher</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2 className='font-bold md:text-2xl text-lg text-primary'>
                                Which Option Is Right for You?
                            </h2>
                            <p className='font-medium text-steel-gray md:text-xl text-base leading-[1.2]'>
                                The decision between IVF and surrogacy depends on medical history, age, uterine health, and personal circumstances. Consulting a highly qualified fertility specialist ensures accurate diagnosis and a personalized treatment plan.
                                <br />
                                <br />
                                With years of experience and patient-focused care, I have helped countless families achieve their dream of parenthood through ethical and advanced reproductive solutions. Every couple&apos;s journey is unique, and the right approach makes all the difference.
                            </p>

                            <h2 className='font-bold md:text-2xl text-lg text-primary'>
                                Frequently Asked Questions
                            </h2>

                            <div className='flex flex-col gap-4'>
                                <div>
                                    <h3 className='font-semibold md:text-xl text-base text-primary'>
                                        Can IVF and surrogacy be combined?
                                    </h3>
                                    <p className='font-medium text-steel-gray md:text-xl text-base leading-[1.2] mt-2'>
                                        Yes. In gestational surrogacy, IVF is used to create embryos which are then transferred to the surrogate. This is the most common form of surrogacy practiced today.
                                    </p>
                                </div>

                                <div>
                                    <h3 className='font-semibold md:text-xl text-base text-primary'>
                                        Is surrogacy legal in India?
                                    </h3>
                                    <p className='font-medium text-steel-gray md:text-xl text-base leading-[1.2] mt-2'>
                                        Surrogacy in India is regulated and allowed under specific legal guidelines. Always consult a licensed fertility specialist for updated legal recommendations and requirements.
                                    </p>
                                </div>

                                <div>
                                    <h3 className='font-semibold md:text-xl text-base text-primary'>
                                        Which option has a higher success rate?
                                    </h3>
                                    <p className='font-medium text-steel-gray md:text-xl text-base leading-[1.2] mt-2'>
                                        Success depends on age, embryo quality, and medical conditions. A specialist can evaluate your chances accurately based on your individual circumstances.
                                    </p>
                                </div>

                                <div>
                                    <h3 className='font-semibold md:text-xl text-base text-primary'>
                                        Is IVF painful?
                                    </h3>
                                    <p className='font-medium text-steel-gray md:text-xl text-base leading-[1.2] mt-2'>
                                        IVF involves mild discomfort during procedures, but it is usually well-tolerated under professional care. Modern techniques and pain management make the process much more comfortable.
                                    </p>
                                </div>
                            </div>

                            <h2 className='font-bold md:text-2xl text-lg text-primary'>
                                Take the First Step Toward Parenthood
                            </h2>
                            <p className='font-medium text-steel-gray md:text-xl text-base leading-[1.2]'>
                                Understanding the difference between IVF and surrogacy is crucial before starting your fertility journey. With expert guidance, couples can make confident, informed decisions. Whether you choose IVF or surrogacy, the right medical support can turn hope into reality.
                                <br />
                                <br />
                                <strong className='text-dark'>Ready to explore your options? Book a consultation today and let&apos;s discuss the best path forward for your family.</strong>
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