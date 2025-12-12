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
      question: "What is the success rate of IUI at your clinic?",
      answer:
        "Our clinic offers a high IUI success rate, which depends on age, medical history, and fertility condition, and we consistently aim to achieve better-than-average outcomes with personalized care.",
    },
    {
      question: "How long does the IUI process take?",
      answer:
        "A typical IUI cycle takes around 10-15 days, including monitoring, ovulation tracking, and the insemination procedure.",
    },
    {
      question:
        "What makes your centre the best IUI center in Delhi?",
      answer:
        "We are recognized as the best IUI center in Delhi due to our experienced team, advanced facilities, personalized treatment plans, and guidance from Dr. Payal Bajaj, a trusted IUI specialist in Delhi.",
    },
    {
      question: "Are there any side effects of IUI treatment?",
      answer:
        "IUI treatment is generally safe, with mild side effects such as slight cramping or spotting, which usually resolve quickly.",
    },
    {
      question: "What is the IUI treatment cost in Delhi?",
      answer:
        "The IUI treatment cost in Delhi varies based on required tests and medications, but we maintain complete transparency and ensure there are no hidden charges.",
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