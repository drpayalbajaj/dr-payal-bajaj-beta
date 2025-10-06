// app/components/StatsBanner.tsx
import React from "react";

const Banner: React.FC = () => {
  const stats = [
    { value: "20+", label: "Years Experience" },
    { value: "1000+", label: "Successful Pregnancies" },
    { value: "95%", label: "Patient Satisfaction" },
    { value: "24/7", label: "Support Available" },
  ];

  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-pink-600 font-bold text-3xl md:text-4xl">
                {stat.value}
              </span>
              <p className="text-gray-700 text-sm md:text-base mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
