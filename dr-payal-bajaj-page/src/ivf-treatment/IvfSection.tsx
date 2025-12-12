"use client";
import React from "react";
import { Heart, Award,  Sparkles, } from "lucide-react";

const IvfSection: React.FC = () => {



  return (
    <section className="px-6 md:px-20 py-16 bg-gradient-to-b from-white to-gray-50">
      {/* Title and Subtitle */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
          Best IVF Doctor in Delhi for Advanced Fertility Treatment
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
        When couples begin their parenthood journey, most of them look for two things-solid medical support and someone who genuinely understands what they’re feeling. That’s exactly why so many families trust Dr. Payal Bajaj, the best IVF doctor in Delhi, one of the most respected fertility experts in the city, and why our centre is known as the best IVF clinic in Delhi India. When you walk in, it doesn’t feel like just another medical facility. You feel like your story, your struggle, and your hope actually matter.
        </p>
      </div>

      {/* Tried Everything Section */}
      <div className="max-w-6xl mx-auto mb-16 bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
        <div className="flex items-center justify-center mb-8">
          <Heart className="w-12 h-12 text-pink-500 mr-3" />
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Trusted Specialists and Advanced Technology
          </h2>
        </div>
        
        <div className="space-y-6">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Our centre stands out as a leading fertility clinic in Delhi because of its advanced labs and updated technology. Dr. Payal Bajaj believes that both medical expertise and modern equipment must work together for better success rates. Whether you’re attempting IVF for the first time or coming after multiple failures elsewhere, she investigates the root cause thoroughly instead of rushing into treatment.
          </p>
          
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          This balanced approach is why many couples see our clinic as a dependable IVF centre in Delhi that focuses on real, science-backed solutions.
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          Patients often mention how comfortable they feel with her. As an experienced and approachable IVF specialist in Delhi, she makes sure every doubt, even the smallest one, gets a clear answer. And since budget is a major concern for many families, she maintains complete clarity when explaining the IVF treatment cost in Delhi so that nothing feels hidden or confusing.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          In the end, the goal is simple and sincere: to continue being known as the best IVF clinic in Delhi, India, led by Dr. Payal Bajaj-a specialist who combines expertise with genuine care, helping hopeful parents move one step closer to building their family.
          </p>
        </div>
      </div>

      {/* Why Egg Freezing Matters */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl shadow-lg p-8 md:p-12 border border-pink-100">
          <div className="flex items-center justify-center mb-8">
            <Award className="w-12 h-12 text-pink-500 mr-3" />
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Why Couples Choose us?
            </h2>
          </div>
          
          <div className="space-y-6 text-center">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Over the last two decades, Dr. Payal Bajaj has handled countless fertility cases-straightforward ones, highly complex ones, and cases where couples had almost given up. Her experience allows her to design treatment plans that actually match each couple’s medical needs. This is one big reason people confidently refer to our centre as the best IVF clinic in Delhi India.
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
            Best IVF Centre in Delhi - Start Your Journey Today
            </h2>
          </div>
          
          <div className="space-y-6 mb-8">
            <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            If you’re searching for the best IVF centre in Delhi, this is the right place to begin. Under the guidance of Dr. Payal Bajaj, you get advanced treatment, personalised support, and completely transparent care from day one. Don’t wait any longer-take the first step toward parenthood today and book your consultation now.

            </p>
            <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            You may also be interested in exploring IUI treatment in Delhi, the best surrogacy treatment in Delhi, or an egg freezing centre in Delhi to support a more personalized fertility approach.
            </p>
          </div>
          
          <a
            href="/ivf-treatment"
            className="inline-block bg-white text-pink-600 font-semibold px-10 py-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-lg"
          >
            Book Your Consultation at Best Egg Freezing Clinic in Delhi
          </a>
        </div>
      </div>
    </section>
  );
};

export default IvfSection;