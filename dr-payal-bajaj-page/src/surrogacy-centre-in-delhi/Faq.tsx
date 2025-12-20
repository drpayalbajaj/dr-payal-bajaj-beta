"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "What makes your centre the best surrogacy centre in Delhi?",
      answer:
        "We are recognised as the best surrogacy centre in Delhi because of our experienced team, advanced facilities, and guidance from Dr. Payal Bajaj, a trusted IVF specialist in Delhi.",
    },
    {
      question: "How much does surrogacy treatment cost in Delhi?",
      answer:
        "The cost of surrogacy varies depending on individual treatment plans, IVF cycles, and medical requirements. We maintain complete transparency with IVF treatment cost in Delhi and other associated procedures.",
    },
    {
      question: "Who can guide me through the surrogacy process?",
      answer:
        "Our best IVF doctor in Delhi provides step-by-step guidance, emotional support, and expert medical care throughout the surrogacy journey.",
    },
    {
      question: "How long does the surrogacy process take?",
      answer:
        "The entire process, including IVF, embryo transfer, and pregnancy monitoring, usually takes several months. Timing varies based on individual medical needs and surrogate screening.",
    },
    {
      question: "Is surrogacy safe?",
      answer:
        "Yes. With experienced specialists like Dr. Payal Bajaj, thorough screening, and modern facilities at our surrogacy clinic in Delhi, the process is safe, and risks are minimized.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 md:px-20 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-gray-600 mb-10">
      Get answers to common questions about Surrogacy and fertility treatments
      </p>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white border rounded-lg shadow-sm">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left p-4 font-medium text-gray-800 hover:bg-pink-50 transition"
            >
              {faq.question}
              {openIndex === index ? (
                <Minus className="w-5 h-5 text-pink-500" />
              ) : (
                <Plus className="w-5 h-5 text-pink-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-600 text-sm">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;