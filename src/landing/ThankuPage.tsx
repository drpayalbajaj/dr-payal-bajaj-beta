// app/thank-you/page.tsx
"use client";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ThankYouPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-pink-50 px-6">
      <CheckCircle className="w-16 h-16 text-pink-500 mb-4" />
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
        Thank You for Booking Your Consultation!
      </h1>
      <p className="text-gray-600 max-w-xl mb-8">
        Your appointment request has been received. Our team will contact you soon to confirm the details.
      </p>

      <Link
        href="/"
        className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-all"
      >
        Back to Home
      </Link>
    </section>
  );
}
