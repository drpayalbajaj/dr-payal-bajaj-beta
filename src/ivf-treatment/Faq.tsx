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
      question: "What is the success rate of IVF at your clinic?",
      answer:
        "Our clinic maintains a high IVF success rate, which varies depending on age and medical condition, but we consistently achieve results above the national average.",
    },
    {
      question: "How long does the IVF process take?",
      answer:
        "The entire IVF process typically takes 4–6 weeks, including ovarian stimulation, egg retrieval, fertilization, and embryo transfer.",
    },
    {
      question:
        "What makes Dr. Payal Bajaj different from other IVF specialists?",
      answer:
        "Dr. Payal Bajaj is known for her expertise in handling complex infertility cases, her personalized approach, and her commitment to ethical and transparent medical practices.",
    },
    {
      question: "Are there any side effects of IVF treatment?",
      answer:
        "Some patients may experience mild side effects like bloating, mood swings, or discomfort, but serious complications are rare with expert care.",
    },
    {
      question: "What is the cost of IVF treatment?",
      answer:
        "The cost of IVF varies depending on the treatment plan and additional procedures required. We ensure complete transparency with no hidden charges.",
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
        Get answers to common questions about IVF and fertility treatments
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
