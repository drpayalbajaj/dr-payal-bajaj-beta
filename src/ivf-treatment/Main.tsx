// app/components/Main.tsx
"use client";

import { useState, useEffect } from "react";
import ConsultationPopup from "./ConsultationPopup";
import { useRouter } from "next/navigation";

export default function Banner() {
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
  });

  useEffect(() => {
    setShowPopup(true);
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Submit consultation:", form);
    setForm({ name: "", phone: "", email: "", treatment: "" });
    router.push("/thank-you");
  }

  return (
    <section className="flex flex-col lg:flex-row justify-between items-center flex-1 container mx-auto px-6 py-12 gap-10">
      {/* Left Content */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 leading-snug mb-4">
          Tried Everything but <span className="text-pink-600 font-bold">Still Waiting</span> for the Good News
        </h2>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          With 82.5% success rate and 23+ years of IVF excellence, Dr. Payal Bajaj offers advanced treatments that bring results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-4">
          <button
            onClick={() => setShowPopup(true)}
            className="bg-pink-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-pink-700 transition text-center"
          >
            Book Free Consultation
          </button>
        </div>
      </div>

      {/* Right Form */}
      <div className="lg:w-1/2 w-full">
        <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 max-w-md mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">Get Your Free Consultation</h3>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Full Name *"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Phone Number *"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Email Address *"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
            <select
              name="treatment"
              value={form.treatment}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            >
              <option value="">Select Treatment of Interest</option>
              <option value="IVF">IVF</option>
              <option value="IUI">IUI</option>
              <option value="Fertility Counseling">Fertility Counseling</option>
              <option value="Other">Other</option>
            </select>

            <button
              type="submit"
              className="bg-pink-600 text-white py-3 rounded-lg font-medium hover:bg-pink-700 transition"
            >
              Book Free Consultation
            </button>

            <p className="text-xs text-gray-500 text-center mt-2">Your information is safe and secure with us.</p>
          </form>
        </div>
      </div>

      {/* Consultation Popup */}
      {showPopup && <ConsultationPopup onClose={() => setShowPopup(false)} />}
    </section>
  );
}
