"use client";
import React from "react";
import { Heart, Award, Users, Sparkles, CheckCircle, Shield, Clock } from "lucide-react";

const EggFreezingSection: React.FC = () => {
  const supportPoints = [
    {
      icon: <Heart className="w-8 h-8 text-pink-500" />,
      title: "Personal Attention",
      description: "We sit with you and understand your goals before planning anything."
    },
    {
      icon: <Shield className="w-8 h-8 text-pink-500" />,
      title: "Simple Explanations",
      description: "The process can feel heavy; we break it into easy steps."
    },
    {
      icon: <Clock className="w-8 h-8 text-pink-500" />,
      title: "Regular Monitoring",
      description: "Your safety comes first—always."
    }
  ];

  const doctorExpertise = [
    "Track your body's response to ensure safe egg retrieval",
    "Use advanced freezing systems to keep egg quality intact",
    "Guide you on long-term storage and future use"
  ];

  return (
    <section className="px-6 md:px-20 py-16 bg-gradient-to-b from-white to-gray-50">
      {/* Title and Subtitle */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
          Best Egg Freezing Clinic in Delhi: Secure Your Future
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          With more than two decades of fertility experience and an 82.5% success rate, our clinic has grown into a trusted place for women who want to preserve their fertility. Being known as one of the best egg freezing clinics in Delhi, we offer advanced egg freezing in Delhi under a dedicated and caring team.
        </p>
      </div>

      {/* Tried Everything Section */}
      <div className="max-w-6xl mx-auto mb-16 bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
        <div className="flex items-center justify-center mb-8">
          <Heart className="w-12 h-12 text-pink-500 mr-3" />
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Tried Everything but Still Waiting for the Right Time?
          </h2>
        </div>
        
        <div className="space-y-6">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            For many women, life doesn't always match the timeline they once imagined. Work, dreams, travel plans, personal changes—sometimes motherhood just doesn't fit into the present moment. And there's nothing wrong with that.
          </p>
          
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            But if the thought of "maybe later" has been on your mind, egg freezing can give you the space and freedom to decide when your right time truly is.
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Our clinic, often chosen as the best egg freezing clinic in Delhi, focuses on two things: solid medical support and genuine emotional understanding. Fertility choices are delicate, and we walk with you step-by-step—slowly, clearly, and without pressure.
          </p>
        </div>
      </div>

      {/* Why Egg Freezing Matters */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl shadow-lg p-8 md:p-12 border border-pink-100">
          <div className="flex items-center justify-center mb-8">
            <Award className="w-12 h-12 text-pink-500 mr-3" />
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Why Egg Freezing Matters?
            </h2>
          </div>
          
          <div className="space-y-6 text-center">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Age affects egg quality, and most women already know this—but knowing doesn't always make life easier. Egg freezing simply gives you a safe way to preserve healthier eggs today, so you don't have to rush tomorrow.
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              At our egg freezing centre in Delhi, we follow modern and secure freezing methods. From your first visit, we make sure you feel comfortable and fully aware of what's happening. No medical jargon, no confusion—just clear guidance at every stage.
            </p>
          </div>
        </div>
      </div>

      {/* How We Support You */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
          <div className="flex items-center justify-center mb-8">
            <Users className="w-12 h-12 text-pink-500 mr-3" />
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              How do We Support You?
            </h2>
          </div>
          
          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center mb-8">
            Every woman comes with her own story. Some are planning ahead, some have health-related concerns, and others simply want time before they start a family. We respect all of it.
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center mb-8 font-semibold">
            Here's how we stand with you:
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {supportPoints.map((point, index) => (
              <div key={index} className="bg-pink-50 rounded-xl p-6 shadow-md text-center">
                <div className="flex justify-center mb-4">{point.icon}</div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-sm">{point.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-pink-50 rounded-xl p-6 text-center">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              <span className="font-semibold">A calm, supportive atmosphere:</span> You're never rushed or ignored here.
            </p>
          </div>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center mt-8">
            Most women tell us that what they appreciate most is the warmth and patience of the team, not just the medical part.
          </p>
        </div>
      </div>

      {/* Advanced Technology */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl shadow-lg p-8 md:p-12 border border-pink-100">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-gray-800">
            Advanced Technology and Experienced Hands
          </h2>
          
          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center mb-8">
            As a leading clinic for egg freezing in Delhi, we combine updated technology with experienced IVF specialist in Delhi. Our doctors:
          </p>

          <div className="space-y-4 max-w-3xl mx-auto">
            {doctorExpertise.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-base md:text-lg">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center mt-8">
            Everything is designed to make the process safe and smooth, without adding stress to your life.
          </p>
        </div>
      </div>

      {/* Take Charge Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-gray-800">
            Take Charge of Your Future
          </h2>
          
          <div className="space-y-6 text-center">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Egg freezing isn't only about fertility—it's about choice. It gives you peace of mind, especially when you're focused on your career, personal growth, or simply waiting for the right chapter of life.
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              The right egg freezing centre in Delhi gives you not just treatment, but comfort, clarity, and confidence.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-12 h-12 mr-3" />
            <h2 className="text-2xl md:text-3xl font-semibold">
              Start Your Journey Today
            </h2>
          </div>
          
          <div className="space-y-6 mb-8">
            <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              You don't have to wait for life to "slow down" before thinking about motherhood. If you want to explore egg freezing in Delhi, our team is here to guide you with honesty and empathy.
            </p>
            <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              Take the first step. Book a consultation at the best egg freezing clinic in Delhi and let us help you plan your future with confidence and care.
            </p>
          </div>
          
          <a
            href="/egg-freezing-in-delhi"
            className="inline-block bg-white text-pink-600 font-semibold px-10 py-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-lg"
          >
            Book Your Consultation at Best Egg Freezing Clinic in Delhi
          </a>
        </div>
      </div>
    </section>
  );
};

export default EggFreezingSection;