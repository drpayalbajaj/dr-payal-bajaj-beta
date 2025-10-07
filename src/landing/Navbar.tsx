// app/components/Navbar.jsx
"use client";
import {useState} from "react";
import Link from "next/link";
import ConsultationPopup from "./ConsultationPopup";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);

    const handleCTA = () => {
    setShowModal(true); 
    window.history.pushState({}, "", "/ivf-treatment");
  };
  const handleClose = () => {
    setShowModal(false);
    window.history.pushState({}, "", "/landing"); 
  
  };

  return (
    <nav className="bg-white shadow-md py-3 px-6 flex justify-between items-center sticky top-0 z-50">
      <Link href="/" className="text-xl sm:text-2xl font-bold text-pink-600">
        Dr. Payal Bajaj
      </Link>

      <button
        onClick={ handleCTA}
        className="bg-pink-600 text-white px-4 py-2 rounded-lg text-sm sm:text-base hover:bg-pink-700 transition"
      >
        📞 Call Now
      </button>
         {showModal && <ConsultationPopup onClose={handleClose} />}
    </nav>
  );
}
