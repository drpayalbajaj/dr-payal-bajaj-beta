"use client";
import React from "react";
import { Heart, Award, Users, Sparkles, CheckCircle, Shield } from "lucide-react";

const SurrogacySection: React.FC = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Every Couple's Journey is Different",
      description: "No two journeys are the same. We take time to listen and plan a path that makes sense for you, at your pace."
    },
    {
      icon: <Shield className="w-8 h-8 text-pink-500" />,
      title: "Thorough Screening Process",
      description: "Comprehensive and honest screening of surrogate mothers to ensure safety and success."
    },
    {
      icon: <Users className="w-8 h-8 text-pink-500" />,
      title: "Complete Transparency",
      description: "You'll always know what's happening with regular updates throughout the journey."
    }
  ];

  return (
    <section className="px-6 md:px-20 py-16 bg-gradient-to-b from-white to-gray-50">
      {/* Title and Subtitle */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
          Best Surrogacy Centre in Delhi - Trusted IVF Specialists
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Have you been hoping to become parents, but it just hasn't happened yet? At our best surrogacy centre in Delhi, we don't just do procedures. We're here to walk with you, hold your hand, and answer every little question.
        </p>
      </div>

      {/* Journey Section */}
      <div className="max-w-6xl mx-auto mb-16 bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
        <div className="flex items-center justify-center mb-8">
          <Heart className="w-12 h-12 text-pink-500 mr-3" />
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Every Couple's Journey is Different
          </h2>
        </div>
        
        <div className="space-y-6">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            No two journeys are the same. Some couples have been trying for years. Others are only just starting to think about surrogacy. Whatever your story, we take the time to listen. We are proud to offer the best surrogacy treatment in Delhi, where every couple receives care, guidance, and support at every step.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">We hear your fears</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">We celebrate your little wins</p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">We plan a path that makes sense for you</p>
            </div>
          </div>
          
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-6">
            When you come here, you're not just a patient. You're part of a small, caring community that understands exactly what you're feeling.
          </p>
        </div>
      </div>

      {/* How Surrogacy Works */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl shadow-lg p-8 md:p-12 border border-pink-100">
          <div className="flex items-center justify-center mb-8">
            <Award className="w-12 h-12 text-pink-500 mr-3" />
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              How Surrogacy Works Here?
            </h2>
          </div>
          
          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center mb-8">
            Surrogacy might seem complicated, but it doesn't need to be scary. We explain everything clearly, step by step.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-center mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">
                <span className="font-semibold">IVF and embryo transfer?</span> We handle it carefully and safely, leveraging expertise from the best IVF specialists in Delhi, India.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">
                <span className="font-semibold">Screening surrogate mothers?</span> Thorough and honest.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">
                <span className="font-semibold">Updates?</span> You'll always know how things are going.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
              <p className="text-gray-700">
                <span className="font-semibold">Questions?</span> Ask anything—you won't be brushed off.
              </p>
            </div>
          </div>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center mt-8">
            Knowing what's happening takes away so much stress. If you are exploring surrogacy in Delhi, our centre makes the journey smoother with clear guidance and compassionate care.
          </p>
        </div>
      </div>

      {/* Emotional Support */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
          <div className="flex items-center justify-center mb-8">
            <Users className="w-12 h-12 text-pink-500 mr-3" />
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Emotional Support is Key
            </h2>
          </div>
          
          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center mb-8">
            This journey isn't just medical—it's emotional. The waiting, the unknowns, the small joys—they all matter. That's why we make support part of our care.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-pink-50 rounded-xl">
              <p className="text-gray-700">You can talk to us whenever you feel anxious</p>
            </div>
            <div className="text-center p-6 bg-pink-50 rounded-xl">
              <p className="text-gray-700">You'll get updates so you're never in the dark</p>
            </div>
            <div className="text-center p-6 bg-pink-50 rounded-xl">
              <p className="text-gray-700">Every doubt or worry is treated seriously</p>
            </div>
          </div>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center mt-8">
            Couples often say this support makes them feel safe, hopeful, and even a little lighter. Our surrogacy clinic in Delhi is known for its personalized approach, where couples feel understood and supported throughout the process.
          </p>
        </div>
      </div>

      {/* Why Choose Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl shadow-lg p-8 md:p-12 border border-pink-100">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-gray-800">
            Why People Choose Dr. Payal Bajaj?
          </h2>
          
          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center mb-6">
            Trust is everything. At our centre, we combine experience with genuine care. We listen. We guide. We reassure.
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center">
            Couples leave feeling understood and supported. And that's why so many consider us the best surrogacy centre in Delhi. Many also rely on our wider network of fertility doctors in Delhi, IVF doctors in Delhi NCR, and specialists in secondary infertility treatment if needed.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-12 h-12 mr-3" />
            <h2 className="text-2xl md:text-3xl font-semibold">
              Take the First Step
            </h2>
          </div>
          
          <div className="space-y-6 mb-8">
            <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              Parenthood starts with a single step. If you're ready, we're ready too. We'll be here for you through every worry, every update, and every joyful moment.
            </p>
            <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              Book a consultation today with Dr. Payal Bajaj. Your little one is waiting, and we'll be right beside you.
            </p>
          </div>
          
          <a
            href="/surrogacy-centre-in-delhi"
            className="inline-block bg-white text-pink-600 font-semibold px-10 py-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-lg"
          >
            Book Your Consultation Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default SurrogacySection;