import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import SmoothScroll from "./SmoothScroll";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

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
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-VX2CY2WZR5"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-VX2CY2WZR5');
</script>
      </head>
      <body>
        <SmoothScroll>
          {/* <Header /> */}
          {children}
          {/* <Footer /> */}
        </SmoothScroll>
        <Script src="https://static.elfsight.com/platform/platform.js" async />
      </body>
    </html>
  );
}
