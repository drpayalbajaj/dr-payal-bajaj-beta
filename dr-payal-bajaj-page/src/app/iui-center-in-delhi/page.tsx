// app/iui-center-in-delhi/page.tsx

export const metadata = {
  title: 'Best IUI Treatment and Specialist in Delhi - Dr. Payal Bajaj',
  description: 'Looking for the best IUI center in Delhi? Consult with top IUI doctors & specialists for effective treatment at affordable costs. Book your appointment today!',
  
  alternates: {
    canonical: 'https://drpayalbajaj.com/iui-center-in-delhi',
  },
  
  openGraph: {
    title: 'Best IUI Treatment and Specialist in Delhi - Dr. Payal Bajaj',
    description: 'Looking for the best IUI center in Delhi? Consult with top IUI doctors & specialists for effective treatment at affordable costs. Book your appointment today!',
    url: 'https://drpayalbajaj.com/iui-center-in-delhi',
    siteName: 'Dr Payal Bajaj',
    images: [
      {
        url: 'https://drpayalbajaj.com/_next/image?url=%2Fimage%2Fhero%2FWhatsApp%20image1.jpeg&w=1080&q=75',
        // width: 1200,
        // height: 630,
        alt: 'Best IUI Centre in Delhi',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Best IUI Treatment and Specialist in Delhi - Dr. Payal Bajaj',
    description: 'Looking for the best IUI center in Delhi? Consult with top IUI doctors & specialists for effective treatment at affordable costs. Book your appointment today!',
    images: ['https://drpayalbajaj.com/_next/image?url=%2Fimage%2Fhero%2FWhatsApp%20image1.jpeg&w=1080&q=75'],
  },
  
  robots: {
    index: true,
    follow: true,
  },
}

import LandingPage from "@/iui-center-in-delhi/Landingpage";

export default function IuiCenter() {
  return (
    <>
      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Best IUI Centre in Delhi",
            "image": "https://drpayalbajaj.com/_next/image?url=%2Fimage%2Fhero%2FWhatsApp%20image1.jpeg&w=1080&q=75",
            "@id": "",
            "url": "https://drpayalbajaj.com/iui-center-in-delhi",
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
            "@id": "https://drpayalbajaj.com/iui-center-in-delhi/#webpage",
            "url": "https://drpayalbajaj.com/iui-center-in-delhi",
            "name": "Best IUI Centre in Delhi",
            "description": "Looking for the best IUI center in Delhi? Consult with top IUI doctors & specialists for effective treatment at affordable costs. Book your appointment today!",
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
                  "name": "IUI Centre in Delhi",
                  "item": "https://drpayalbajaj.com/iui-center-in-delhi"
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