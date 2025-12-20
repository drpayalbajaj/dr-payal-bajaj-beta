// app/page.tsx

export const metadata = {
  title: 'Trusted IVF and Fertility Clinic in Delhi - Dr Payal Bajaj',
  description: 'Consult with Dr Payal for expert IVF, IUI, surrogacy and infertility treatment in Delhi, backed by 20+ yr experience. Book a free consult: +91 9911631639.',
  
  alternates: {
    canonical: 'https://drpayalbajaj.com/',
  },
  
  openGraph: {
    title: 'Trusted IVF and Fertility Clinic in Delhi - Dr Payal Bajaj',
    description: 'Consult with Dr Payal for expert IVF, IUI, surrogacy and infertility treatment in Delhi, backed by 20+ yr experience. Book a free consult: +91 9911631639.',
    url: 'https://drpayalbajaj.com/',
    siteName: 'Dr Payal Bajaj',
    images: [
      {
        url: 'https://drpayalbajaj.com/_next/image?url=%2Fimage%2Fhero%2FWhatsApp%20image1.jpeg&w=1080&q=75',
        // width: 1200,
        // height: 630,
        alt: 'Dr. Payal Bajaj - IVF Specialist',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Trusted IVF and Fertility Clinic in Delhi - Dr Payal Bajaj',
    description: 'Consult with Dr Payal for expert IVF, IUI, surrogacy and infertility treatment in Delhi, backed by 20+ yr experience. Book a free consult: +91 9911631639.',
    images: ['https://drpayalbajaj.com/_next/image?url=%2Fimage%2Fhero%2FWhatsApp%20image1.jpeg&w=1080&q=75'],
  },
  
  robots: {
    index: true,
    follow: true,
  },
}

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Doctor from '@/components/Doctor'
import About from '@/components/Aboutus'
import Testimonials from '@/components/Testimonials'
import Specialization from '@/components/Specialization'
import Qualification from '@/components/Qualification'
import IVF from '@/components/IVF'
import InstaVideo from '@/components/InstaVideo'
import Details from '@/components/Details'
import Contact from '@/components/Contact'
import Blog from '@/components/Blog'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Dr Payal Bajaj",
            "image": "https://drpayalbajaj.com/_next/image?url=%2Fimage%2Fhero%2FWhatsApp%20image1.jpeg&w=1080&q=75",
            "@id": "",
            "url": "https://drpayalbajaj.com/",
            "telephone": "+91 9911631639",
            "priceRange": "₹",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "C3/9, 1st floor, Ashok Vihar II, Pocket C 3, Phase 2, Ashok Vihar",
              "addressLocality": "Delhi",
              "postalCode": "110052",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 28.6975467,
              "longitude": 77.17163939999999
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "09:30",
              "closes": "18:00"
            },
            "sameAs": [
              "https://www.facebook.com/DoctorPayalbajaj",
              "https://www.instagram.com/dr_payalbajaj/",
              "https://www.youtube.com/@DrPayalBajaj",
              "https://www.linkedin.com/in/dr-payal-bajaj-2613a923/"
            ]
          })
        }}
      />
      
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Dr Payal Bajaj",
            "url": "https://drpayalbajaj.com/",
            "logo": "https://drpayalbajaj.com/_next/image?url=%2Fimage%2Fhero%2FWhatsApp%20image1.jpeg&w=1080&q=75",
            "sameAs": [
              "https://www.facebook.com/DoctorPayalbajaj",
              "https://www.instagram.com/dr_payalbajaj/",
              "https://www.youtube.com/@DrPayalBajaj",
              "https://www.linkedin.com/in/dr-payal-bajaj-2613a923/"
            ]
          })
        }}
      />
      
      {/* WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "name": "Dr Payal Bajaj",
            "url": "https://drpayalbajaj.com/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://drpayalbajaj.com/{search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      
      <Header />
      <Hero />
      <Doctor />
      <Testimonials />
      <About />
      <Specialization />
      <Qualification />
      <IVF />
      <InstaVideo />
      <Details />
      <Contact />
      <Blog />
      <Footer />
    </>
  );
}