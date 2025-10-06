// app/components/WhyChoose.tsx
import React from "react";
import { CheckCircle } from "lucide-react";

const WhyChoose: React.FC = () => {
  const reasons = [
    {
      title: "Expertise in Complex Cases",
      description:
        "Over 18 years of experience handling challenging infertility and reproductive cases with advanced medical knowledge.",
    },
    {
      title: "Personalized Care",
      description:
        "Every patient receives individualized treatment plans tailored to their unique needs for the best outcomes.",
    },
    {
      title: "Ethical & Transparent",
      description:
        "Commitment to honesty, ethical practices, and complete transparency in all treatments and procedures.",
    },
  ];

  return (
    <div className="bg-white">
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Why Choose Dr. Payal Bajaj ?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition"
            >
              <CheckCircle className="w-10 h-10 text-pink-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-center mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-center">{reason.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WhyChoose;
