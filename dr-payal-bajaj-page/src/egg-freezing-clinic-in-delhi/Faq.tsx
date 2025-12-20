// app/components/Faq.tsx
"use client"; // क्योंकि useState React Hook है

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
      question: "What makes your clinic the best egg freezing clinic in Delhi?",
      answer:
        "We are recognized as the best egg freezing clinic in Delhi due to our experienced team, advanced facilities, and guidance from Dr. Payal Bajaj, a trusted IVF specialist in Delhi.",
    },
    {
      question: "How much does egg freezing cost in Delhi?",
      answer:
        "The cost of egg freezing in Delhi varies depending on the treatment plan, tests, and storage duration. We provide complete transparency with no hidden charges.",
    },
    {
      question:
        " Who can guide me through egg freezing?",
      answer:
        "Our fertility doctors in Delhi guide you through every step, from initial consultation to egg retrieval and long-term storage. ",
    },
    {
      question: " How long does the egg freezing process take?",
      answer:
        "The process typically takes 2–3 weeks, including ovarian stimulation, monitoring, and egg retrieval.",
    },
    {
      question: "Is egg freezing safe?",
      answer:
        "Yes, with modern technology at our egg freezing centre in Delhi and experienced care from Dr. Payal Bajaj, the procedure is safe, and risks are minimal.",
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
      Get answers to common questions about egg freezing and fertility preservation.
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
