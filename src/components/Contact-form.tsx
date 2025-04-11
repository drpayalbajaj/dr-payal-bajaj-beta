import React from 'react'

export default function Contact() {
    return (
        <section>
            <h2 className='text-center relative text-5xl font-bold text-[var(--primary-color)]'>
                We Would Like to Hear from You
            </h2>

            <div className='w-full mt-16'>
                <div className="contact-wraper">
                    <div className="map-box">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13999.05969170394!2d77.15997034104505!3d28.69667783232364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d035e26ae8fd5%3A0xe262d0f9c2479472!2sNandi%20IVF%20-%20Best%20IVF%20Centre%20in%20Ashok%20Vihar%2C%20Delhi!5e0!3m2!1sen!2sin!4v1720698080526!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    <div className="form-container">
                        <form>
                            <div className='relative w-full '>
                                <input type="text" placeholder='Name' />
                            </div>
                            <div className='relative w-full mt-5 '>
                                <input type="email" placeholder='E-Mail' />
                            </div>
                            <div className='relative w-full mt-5 '>
                                <input type="number" placeholder='Phone No' />
                            </div>
                            <div className='relative w-full mt-5 '>
                                <textarea name="" id="" placeholder='Your Query'></textarea>
                            </div>
                            <div className='relative w-full mt-5 '>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </section>
    )
}
