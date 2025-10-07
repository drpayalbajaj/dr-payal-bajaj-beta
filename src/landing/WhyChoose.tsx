"use client";
import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import ConsultationPopup from "./ConsultationPopup";

const WhyChoose: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const reasons = [
    {
      title: "23+ Years of IVF Excellence",
      description:
        "Trusted fertility specialist with decades of proven success in helping couples conceive.",
    },
    {
      title: "Trained in Germany & Japan",
      description:
        "International exposure ensures advanced, evidence-based fertility treatments.",
    },
    {
      title: "82.5% IVF Success Rate",
      description:
        "Among the highest in the field, real results, not just promises.",
    },
    {
      title: "Expert in Complex Cases",
      description:
        "Specialized protocols designed for couples who’ve faced multiple IVF failures.",
    },
    {
      title: "Personalized Support at Every Step",
      description:
        "Dedicated one-on-one attention and compassionate care throughout your journey.",
    },
    {
      title: "All Fertility Solutions in One Place",
      description:
        "From diagnosis to advanced IVF, every treatment is done with care and precision.",
    },
    {
      title: "Honest Guidance, No False Promises",
      description:
        "Clear communication, transparent pricing, and genuine care you can trust.",
    },
    {
      title: "Advanced Technology & Labs",
      description:
        "Equipped with the latest fertility tools and techniques for higher success rates.",
    },
    {
      title: "Hundreds of Happy Families",
      description:
        "500+ Families Blessed with Parenthood. Proven track record of transforming parenthood dreams into realities.",
    },
  ];

  const handleCTA = () => {
    setShowModal(true);
    window.history.pushState({}, "", "/ivf-treatment");
  };

  const handleClose = () => {
    setShowModal(false);
    window.history.pushState({}, "", "/landing");
  };

  return (
    <div className="bg-white">
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Why Choose Dr. Payal Bajaj?
        </h2>

        {/* Cards grid - show all reasons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title ?? index}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              <CheckCircle className="w-10 h-10 text-pink-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-center mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-center">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button
            onClick={handleCTA}
            className="inline-block bg-pink-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-pink-600 transition-all duration-300 hover:-translate-y-0.5"
          >
            Book an Appointment
          </button>
        </div>

        {showModal && <ConsultationPopup onClose={handleClose} />}
      </section>
    </div>
  );
};

export default WhyChoose;
