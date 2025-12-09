"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Banner() {
  const router = useRouter();
 
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    
    if (error) setError("");
    
    if (name === "phone") {
      const digitsOnly = value.replace(/\D/g, "");
      if (digitsOnly.length <= 10) {
        setForm((prev) => ({ ...prev, [name]: digitsOnly }));
      }
      return;
    }
    
    if (name === "name") {
      const lettersOnly = value.replace(/[^a-zA-Z\s]/g, "");
      if (lettersOnly.length <= 50) {
        setForm((prev) => ({ ...prev, [name]: lettersOnly }));
      }
      return;
    }
    
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    setError("");
    
    if (!form.name.trim() || form.name.length < 2) {
      setError("Name must be at least 2 characters");
      return;
    }
    
    if (form.phone.length !== 10 || !/^[6-9]/.test(form.phone)) {
      setError("Please enter a valid 10-digit mobile number");
      return;
    }
    
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address");
      return;
    }
    
    if (!form.treatment) {
      setError("Please select a treatment");
      return;
    }

    setIsSubmitting(true);

    try {
      // 🔥 Environment variable se API URL le rahe hain
      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      
      const response = await fetch(`${API_URL}/api/v1/contact`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone, // Backend "phone" expect karta hai
          treatment: form.treatment,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setForm({ name: "", phone: "", email: "", treatment: "" });
        router.push("/thank-you");
      } else {
        setError(data.message || "Failed to submit. Please try again.");
        setIsSubmitting(false);
      }
    } catch (err) {
      console.error(err);
      setError("Network error. Please try again.");
      setIsSubmitting(false);
    }
  }

  return (
    <section className="flex flex-col lg:flex-row justify-between items-center flex-1 container mx-auto px-6 py-12 gap-10">
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 leading-snug mb-4">
          Tried Everything but <span className="text-pink-600 font-bold">Still Waiting</span> for the Good News
        </h2>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          With 82.5% success rate and 23+ years of IVF excellence, Dr. Payal Bajaj offers advanced treatments that bring results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-4">
          <a
            href="/ivf-treatment"
            className="bg-pink-600 text-white px-5 py-3 rounded-lg font-medium hover:bg-pink-700 transition text-center"
          >
            Book Free Consultation
          </a>
        </div>
      </div>

      <div className="lg:w-1/2 w-full">
        <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 max-w-md mx-auto">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 text-center">
            Get Your Free Consultation
          </h3>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600 text-center">{error}</p>
            </div>
          )}

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Full Name *"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
              disabled={isSubmitting}
              maxLength={50}
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Phone Number *"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
              disabled={isSubmitting}
              maxLength={10}
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Email Address *"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
              disabled={isSubmitting}
            />

            <select
              name="treatment"
              value={form.treatment}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
              disabled={isSubmitting}
            >
              <option value="">Select Treatment of Interest</option>
              <option value="IVF">IVF</option>
              <option value="IUI">IUI</option>
              <option value="Fertility Counseling">Fertility Counseling</option>
              <option value="Other">Other</option>
            </select>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`py-3 rounded-lg font-medium transition ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-pink-600 hover:bg-pink-700 text-white"
              }`}
            >
              {isSubmitting ? "Submitting..." : "Book Free Consultation"}
            </button>

            <p className="text-xs text-gray-500 text-center mt-2">
              Your information is safe and secure with us.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}