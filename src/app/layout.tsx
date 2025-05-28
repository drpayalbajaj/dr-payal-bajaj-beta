import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import SmoothScroll from "./SmoothScroll";
import { GoogleAnalytics } from '@next/third-parties/google'
 

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
        <link rel="shortcut icon" href="/image/icons/logo.png" type="image/x-icon" />
        <link rel="stylesheet" href="https://cdn.hugeicons.com/font/hgi-stroke-rounded.css"></link>
      </head>
      <body>
        <SmoothScroll>
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
        </SmoothScroll>
        <GoogleAnalytics gaId="G-VX2CY2WZR5" />
        <Script src="https://static.elfsight.com/platform/platform.js" async />
      </body>
    </html>
  );
}
