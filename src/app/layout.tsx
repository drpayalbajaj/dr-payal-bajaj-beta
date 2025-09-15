// import type { Metadata } from "next";
// import "./globals.css";
// import Script from "next/script";
// import SmoothScroll from "./SmoothScroll";
// import { GoogleAnalytics } from '@next/third-parties/google'
 

// export const metadata: Metadata = {
//   title: "Dr. Payal Bajaj - Senior IVF Consultant",
//   description: "Dr. Payal Bajaj - Senior IVF Consultant",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="shortcut icon" href="/image/icons/logo.png" type="image/x-icon" />
//         <link rel="stylesheet" href="https://cdn.hugeicons.com/font/hgi-stroke-rounded.css"></link>
//       </head>
//       <body>
//         <SmoothScroll>
//           {/* <Header /> */}
//           {children}
//           {/* <Footer /> */}
//         </SmoothScroll>
//         <GoogleAnalytics gaId="G-VX2CY2WZR5" />
//         <Script src="https://static.elfsight.com/platform/platform.js" async />
//       </body>
//     </html>
//   );
// }
// import type { Metadata } from "next";
// import "./globals.css";
// import Script from "next/script";
// import SmoothScroll from "./SmoothScroll";
// import { GoogleAnalytics } from '@next/third-parties/google'

// export const metadata: Metadata = {
//   title: "Dr. Payal Bajaj - Senior IVF Consultant",
//   description: "Dr. Payal Bajaj - Senior IVF Consultant",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="shortcut icon" href="/image/icons/logo.png" type="image/x-icon" />
//         <link rel="stylesheet" href="https://cdn.hugeicons.com/font/hgi-stroke-rounded.css" />
        
//         {/* Google Tag Manager */}
//         <Script id="gtm-head" strategy="beforeInteractive">
//           {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//           })(window,document,'script','dataLayer','GTM-5BG85D5G');`}
//         </Script>
//         {/* End Google Tag Manager */}
//       </head>
//       <body>
//         {/* Google Tag Manager (noscript) */}
//         <noscript>
//           <iframe
//             src="https://www.googletagmanager.com/ns.html?id=GTM-5BG85D5G"
//             height="0"
//             width="0"
//             style={{ display: "none", visibility: "hidden" }}
//           ></iframe>
//         </noscript>
//         {/* End Google Tag Manager (noscript) */}

//         <SmoothScroll>
//           {children}
//         </SmoothScroll>

//         <GoogleAnalytics gaId="G-VX2CY2WZR5" />
//         <Script src="https://static.elfsight.com/platform/platform.js" async />
//       </body>
//     </html>
//   );
// }
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import SmoothScroll from "./SmoothScroll";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Dr. Payal Bajaj - Senior IVF Consultant",
  description: "Dr. Payal Bajaj - Senior IVF Consultant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/image/icons/logo.png"
          type="image/x-icon"
        />
        <link
          rel="stylesheet"
          href="https://cdn.hugeicons.com/font/hgi-stroke-rounded.css"
        />

        {/* Google Tag Manager - place this as high in <head> as possible */}
        <Script id="gtm-head" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TNKNSVKR');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>

      <body>
        {/* Google Tag Manager (noscript) - immediately after opening <body> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TNKNSVKR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <SmoothScroll>{children}</SmoothScroll>

        {/* Third-party script (load lazily) */}
        <Script
          src="https://static.elfsight.com/platform/platform.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
