// app/egg-freezing-clinic-in-delhi/page.tsx

export const metadata = {
  title: 'Best Egg Freezing Clinic in Delhi - Expert Fertility Care',
  description: 'Preserve your fertility with Dr Payal at the best egg freezing clinic in Delhi. Expert care, advanced facilities & personalised treatment. Book an Appointment.',
  
  alternates: {
    canonical: 'https://drpayalbajaj.com/egg-freezing-clinic-in-delhi',
  },
  
  openGraph: {
    title: 'Best Egg Freezing Clinic in Delhi - Expert Fertility Care',
    description: 'Preserve your fertility with Dr Payal at the best egg freezing clinic in Delhi. Expert care, advanced facilities & personalised treatment. Book an Appointment.',
    url: 'https://drpayalbajaj.com/egg-freezing-clinic-in-delhi',
    siteName: 'Dr Payal Bajaj',
    images: [
      {
        url: 'https://drpayalbajaj.com/_next/image?url=%2Fimage%2Fhero%2FWhatsApp%20image1.jpeg&w=1080&q=75',
        // width: 1200,
        // height: 630,
        alt: 'Best Egg Freezing Clinic in Delhi',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Best Egg Freezing Clinic in Delhi - Expert Fertility Care',
    description: 'Preserve your fertility with Dr Payal at the best egg freezing clinic in Delhi. Expert care, advanced facilities & personalised treatment. Book an Appointment.',
    images: ['https://drpayalbajaj.com/_next/image?url=%2Fimage%2Fhero%2FWhatsApp%20image1.jpeg&w=1080&q=75'],
  },
  
  robots: {
    index: true,
    follow: true,
  },
}

import LandingPage from "@/egg-freezing-clinic-in-delhi/Landingpage";

export default function EggFreezing() {
  return (
    <>
      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Best EGG Freezing Clinic in Delhi",
            "image": "https://drpayalbajaj.com/_next/image?url=%2Fimage%2Fhero%2FWhatsApp%20image1.jpeg&w=1080&q=75",
            "@id": "",
            "url": "https://drpayalbajaj.com/egg-freezing-clinic-in-delhi",
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
            "@id": "https://drpayalbajaj.com/egg-freezing-clinic-in-delhi/#webpage",
            "url": "https://drpayalbajaj.com/egg-freezing-clinic-in-delhi",
            "name": "Best Egg Freezing Clinic in Delhi",
            "description": "Preserve your fertility with Dr Payal at the best egg freezing clinic in Delhi. Expert care, advanced facilities & personalised treatment. Book an Appointment.",
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
                  "name": "Egg Freezing Clinic in Delhi",
                  "item": "https://drpayalbajaj.com/egg-freezing-clinic-in-delhi"
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