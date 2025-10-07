"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface ConsultationPopupProps {
  onClose?: () => void;
}

const ConsultationPopup: React.FC<ConsultationPopupProps> = ({ onClose }) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
  });

  useEffect(() => {
    setShowModal(true);
    window.history.pushState({}, "", "/ivf-treatment");
  }, []);

  const handleClose = () => {
    setShowModal(false);
      window.history.pushState({}, "", "/landing");
    if (onClose) onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submit consultation:", form);
    setForm({ name: "", phone: "", email: "", treatment: "" });
    router.push("/thank-you");
    if (onClose) onClose();
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white w-11/12 max-w-md p-6 rounded-2xl shadow-lg relative">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Book Your Consultation</h2>
        <hr className="my-4 border-t border-gray-300" />

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="Full Name *"
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-400 focus:outline-none"
            required
          />
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            type="tel"
            placeholder="Phone Number *"
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-400 focus:outline-none"
            required
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Email Address *"
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-400 focus:outline-none"
            required
          />
          <select
            name="treatment"
            value={form.treatment}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-400 focus:outline-none"
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
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Book Free Consultation
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationPopup;
