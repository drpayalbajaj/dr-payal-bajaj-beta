"use client";
import React, { useMemo, useState } from "react";
import { CheckCircle } from "lucide-react";
import ConsultationPopup from "./ConsultationPopup";
const ITEMS_PER_PAGE = 3;

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

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(reasons.length / ITEMS_PER_PAGE));


  const handleCTA = () => {
  setShowModal(true); 
  window.history.pushState({}, "", "/ivf-treatment");
  
};
  const handleClose = () => {
  setShowModal(false);
  window.history.pushState({}, "", "/landing"); 

};


  const paginated = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return reasons.slice(start, end);
  }, [currentPage, reasons]);

  const gotoPage = (page: number) => {
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    setCurrentPage(page);
  };

  return (
    <div className="bg-white">
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Why Choose Dr. Payal Bajaj?
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {paginated.map((reason, index) => (
            <div
              key={index}
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

        {/* Pagination controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => gotoPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-2 rounded-md font-medium border ${
              currentPage === 1
                ? "text-gray-400 border-gray-200 cursor-not-allowed bg-gray-50"
                : "text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            Prev
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => gotoPage(p)}
                className={`min-w-[36px] h-9 flex items-center justify-center rounded-md border font-medium ${
                  p === currentPage
                    ? "bg-pink-500 text-white border-pink-500"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {p}
              </button>
            ))}
          </div>

          <button
            onClick={() => gotoPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-2 rounded-md font-medium border ${
              currentPage === totalPages
                ? "text-gray-400 border-gray-200 cursor-not-allowed bg-gray-50"
                : "text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            Next
          </button>
        </div>

        <p className="mt-4 text-center text-sm text-gray-500">
          Showing {Math.min(
            reasons.length,
            (currentPage - 1) * ITEMS_PER_PAGE + 1
          )}
          –
          {Math.min(currentPage * ITEMS_PER_PAGE, reasons.length)} of{" "}
          {reasons.length}
        </p>

      
        <div className="text-center mt-12">
          <button
            onClick={ handleCTA}
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
