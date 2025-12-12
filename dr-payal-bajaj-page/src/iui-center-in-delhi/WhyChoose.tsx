// Updated: WhyChoose.tsx (Integrated "Why Couples Choose Our Clinic?" points into the reasons array; improved styling with gradients, better shadows, and hover effects)
"use client";
import React from "react";
import { CheckCircle } from "lucide-react";

const WhyChoose: React.FC = () => {
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
    {
      title: "Leading IUI Specialist in Delhi",
      description:
        "Personalized IUI treatments with transparent costs and advanced care for your journey to parenthood.",
    },
    // Integrated from "Why Couples Choose Our Clinic?"
    {
      title: "Personalized IUI Treatment",
      description:
        "Every couple is different, and we tailor the treatment according to your medical history, lifestyle, and previous fertility attempts.",
    },
    {
      title: "Transparent IUI Treatment Cost in Delhi",
      description:
        "We ensure complete transparency from the start. You’ll never feel confused or surprised about costs.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <section className="px-6 md:px-20 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Why Choose Dr. Payal Bajaj?
        </h2>

        {/* Cards grid - show all reasons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={reason.title ?? index}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-pink-200 transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <CheckCircle className="w-12 h-12 text-pink-500 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-center mb-4 text-gray-800 group-hover:text-pink-600 transition-colors">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/ivf-treatment"
            className="inline-block bg-gradient-to-r from-pink-500 to-pink-600 text-white font-semibold px-10 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-lg"
          >
            Book an Appointment
          </a>
        </div>
      </section>
    </div>
  );
};

export default WhyChoose;