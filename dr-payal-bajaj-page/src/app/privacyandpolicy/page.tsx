// app/privacyandpolicy/page.tsx (ya jaha bhi aapka privacy policy page hai)
import React from "react";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <PrivacyPolicy />
      <Footer />
    </>
  );
}