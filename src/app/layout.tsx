import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";


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
          rel="stylesheet"
          href="https://cdn.hugeicons.com/font/hgi-stroke-rounded.css"
        />
        <Script src="https://static.elfsight.com/platform/platform.js" async />
      </head>
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
