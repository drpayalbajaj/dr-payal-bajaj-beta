// app/ivf-treatment/page.tsx

export const metadata = {
    title: 'Best IVF Clinic in Delhi India With High IVF Success Rate',
    description: 'Consult with Dr Payal Bajaj, the best IVF specialist in Delhi for fertility care. Get affordable IVF treatment & personalised support. Book a free consult now.',
    
    alternates: {
      canonical: 'https://drpayalbajaj.com/ivf-fertility-clinic-in-delhi',
    },
    
    openGraph: {
      title: 'Best IVF Clinic in Delhi India With High IVF Success Rate',
      description: 'Consult with Dr Payal Bajaj, the best IVF specialist in Delhi for fertility care. Get affordable IVF treatment & personalised support. Book a free consult now.',
      url: 'https://drpayalbajaj.com/ivf-fertility-clinic-in-delhi/',
      siteName: 'Dr Payal Bajaj',
      images: [
        {
          url: 'https://drpayalbajaj.com/_next/image?url=%2Fimage%2Fhero%2FWhatsApp%20image1.jpeg&w=1080&q=75',
          // width: 1200,
          // height: 630,
          alt: 'Best IVF Clinic in Delhi India',
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    
    twitter: {
      card: 'summary_large_image',
      title: 'Best IVF Clinic in Delhi India With High IVF Success Rate',
      description: 'Consult with Dr Payal Bajaj, the best IVF specialist in Delhi for fertility care. Get affordable IVF treatment & personalised support. Book a free consult now.',
      images: ['https://drpayalbajaj.com/_next/image?url=%2Fimage%2Fhero%2FWhatsApp%20image1.jpeg&w=1080&q=75'],
    },
    
    robots: {
      index: true,
      follow: true,
    },
  }
  
  import LandingPage from "@/ivf-fertility-clinic-in-delhi/Landingpage";
  
  export default function IvfTreatment() {
    return (
      <>
        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Best IVF Clinic in Delhi, India",
              "image": "https://drpayalbajaj.com/_next/image?url=%2Fimage%2Fhero%2FWhatsApp%20image1.jpeg&w=1080&q=75",
              "@id": "",
              "url": "https://drpayalbajaj.com/ivf-fertility-clinic-in-delhi/",
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
        
        {/* WebPage and Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://drpayalbajaj.com/ivf-fertility-clinic-in-delhi/#webpage",
              "url": "https://drpayalbajaj.com/ivf-fertility-clinic-in-delhi/",
              "name": "Best IVF Clinic in Delhi India",
              "description": "Consult with Dr Payal Bajaj, the best IVF specialist in Delhi, for fertility care. Get affordable IVF treatment & personalised support. Book a free consult now.",
              "inLanguage": "en-AU",
              "publisher": {
                "@type": "Organization",
                "name": "Dr Payal Bajaj",
                "url": "https://drpayalbajaj.com/",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://drpayalbajaj.com/_next/image?url=%2Fimage%2Fhero%2FWhatsApp%20image1.jpeg&w=1080&q=75"
                }
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://drpayalbajaj.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "ivf-treatment",
                    "item": "https://drpayalbajaj.com/ivf-fertility-clinic-in-delhi/"
                  }
                ]
              }
            })
          }}
        />
        
        <LandingPage />
      </>
    );
  }