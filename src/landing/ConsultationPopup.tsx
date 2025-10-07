
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const countryCodes = [
  { code: "+1", country: "USA/Canada" },
  { code: "+44", country: "UK" },
  { code: "+91", country: "India" },
  { code: "+61", country: "Australia" },
  { code: "+81", country: "Japan" },
  { code: "+49", country: "Germany" },
];

interface ConsultationPopupProps {
  onClose?: () => void;
}

const ConsultationPopup: React.FC<ConsultationPopupProps> = ({ onClose }) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [captchaChecked, setCaptchaChecked] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleClose = () => {
    setShowModal(false);
    if (onClose) onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contact || !captchaChecked) {
      alert("Please fill all fields and verify captcha!");
      return;
    }
    router.push("/thank-you");
    if (onClose) onClose();
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white w-11/12 max-w-md p-6 rounded-2xl shadow-lg relative">
        <button onClick={handleClose} className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold">
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Book Your Consultation</h2>
        <hr className="my-4 border-t border-gray-300" />

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:outline-none" required />
          </div>

          <div>
            <label className="block text-sm font-medium">Contact</label>
            <div className="flex flex-col sm:flex-row gap-2 mt-1">
              <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)}
                className="border rounded-lg px-2 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none sm:w-1/3">
                {countryCodes.map((c) => (<option key={c.code} value={c.code}>{c.code} ({c.country})</option>))}
              </select>
              <input type="number" value={contact} onChange={(e) => setContact(e.target.value)}
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none flex-1" required />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="captcha" checked={captchaChecked} onChange={(e) => setCaptchaChecked(e.target.checked)} className="h-4 w-4" />
            <label htmlFor="captcha" className="text-sm">I am not a robot</label>
          </div>

          <button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg font-semibold transition">
            Book Appointment
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationPopup;
