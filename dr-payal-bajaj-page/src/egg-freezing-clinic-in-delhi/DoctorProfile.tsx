
"use client";
import React from "react";




const DoctorProfile: React.FC = () => {
 

  
  return (
    <div className="px-6 md:px-20 py-10">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Meet Dr. Payal Bajaj
      </h2>

      {/* Doctor Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src="/image/landing/1.JPG"
            alt="Dr. Payal Bajaj"
            className="rounded-full w-64 h-64 object-cover border-4 border-pink-400"
          />
        </div>

        {/* Text */}
        <div className="text-gray-700 max-w-2xl">
          <h2 className="text-xl font-semibold mb-2">
          Medical Director and Lead Egg Freezing Specialist
          </h2>
          <p className="mb-3 text-base md:text-lg leading-relaxed">
  <span className="font-bold text-pink-600">Dr. Payal Bajaj</span> brings more than{" "}
  <span className="font-bold text-gray-900">23 years of clinical expertise</span> as an{" "}
  <span className="font-semibold">Obstetrician and Gynaecologist.</span> She is a distinguished{" "}
  Reproductive Endocrinologist
  <span className="font-semibold"> infertility specialist.</span> She specialises in{" "}
  egg freezing and fertility preservation, helping women proactively safeguard their reproductive potential with advanced, personalised care.
</p>
          <h3 className="font-bold mb-2">Education</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <span className="font-bold">Graduation</span> – Lady Hardinge
              Medical College
            </li>
            <li>
              <span className="font-bold">Postgraduation</span> – VMMC and
              Safdarjung Hospital
            </li>
            <li>
              <span className="font-bold">DMAS</span> – Diploma in Minimal
              Access Surgery
            </li>
            <li>
              <span className="font-bold">DRM</span> – Diploma in Reproductive
              Medicine, University of Keil, Germany
            </li>
            <li>
              <span className="font-bold">ISAR</span> – Fellowship from AFGC,
              India
            </li>
            <li>
              <span className="font-bold">ASPIRE</span> – Training in
              Reproductive Medicine, St Mothers Hospital, Japan
            </li>
            <li>
              <span className="font-bold">Senior residency</span> – Bara Hindu
              Rao Hospital, Delhi
            </li>
            <li>
              <span className="font-bold">Ex-Senior Egg Freezing Consultant</span> – Aveya
              Fertility
            </li>
          </ul>
        </div>
      </div>

      {/* Specializations Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Specializations
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-pink-50 rounded-lg shadow">IVF Treatment</div>
          <div className="p-4 bg-pink-50 rounded-lg shadow">ICSI</div>
          <div className="p-4 bg-pink-50 rounded-lg shadow">IUI</div>
          <div className="p-4 bg-pink-50 rounded-lg shadow">Egg Freezing</div>
          <div className="p-4 bg-pink-50 rounded-lg shadow">
            Fertility Preservation
          </div>
          <div className="p-4 bg-pink-50 rounded-lg shadow">
            Reproductive Surgery
          </div>
        </div>
      </div>

      {/* CTA BUTTON */}
      <div className="text-center mt-12">
        <a
         href="https://drpayalbajaj.com/#contact "
          className="inline-block bg-pink-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-pink-600 transition-all duration-300 hover:-translate-y-0.5"
        >
          Book an Appointment
        </a>
      </div>
       
    </div>
  );
};

export default DoctorProfile;
