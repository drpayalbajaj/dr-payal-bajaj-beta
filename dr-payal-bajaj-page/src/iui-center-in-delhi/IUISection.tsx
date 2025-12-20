"use client";
import React from "react";
import { Heart, Award, Users, Sparkles } from "lucide-react";

const IUISection: React.FC = () => {
  return (
    <section className="px-6 md:px-20 py-16 bg-gradient-to-b from-white to-gray-50">
      {/* Title and Subtitle */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
          Leading IUI Specialist for Effective IUI Treatment in Delhi

        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          With trusted care and advanced expertise, our centre is known as the best IUI center in Delhi, offering personalised IUI treatment in Delhi with guidance from a leading IUI specialist in Delhi.
        </p>
      </div>

      {/* Journey Section */}
      <div className="max-w-6xl mx-auto mb-16 bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
        <div className="flex items-center justify-center mb-8">
          <Heart className="w-12 h-12 text-pink-500 mr-3" />
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Your Journey to Parenthood Starts with Best IUI Center in Delhi
          </h2>
        </div>

        <div className="space-y-6">
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
  Every couple dreams of starting a family, but the path to parenthood is not always straightforward. Many couples face challenges that can feel overwhelming, confusing, or even discouraging. That&apos;s why choosing the{' '}
  <a 
    href="https://drpayalbajaj.com/iui-center-in-delhi" 
    className="text-pink-600 hover:text-pink-700 font-semibold underline"
  >
    best IUI center in Delhi
  </a>
  {' '}is so important. You need not just modern technology, but someone who listens, understands, and guides you with care at every step.
</p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            At our clinic, we treat each couple as unique. Some come to us full of hope and excitement, while others arrive anxious or tired after trying for months, or even years, without success. Our IUI specialist in Delhi takes the time to listen to your story, understand your concerns, and create a treatment plan specifically for you.
          </p>
        </div>
      </div>

      {/* Expert Care Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl shadow-lg p-8 md:p-12 border border-pink-100">
          <div className="flex items-center justify-center mb-8">
            <Award className="w-12 h-12 text-pink-500 mr-3" />
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Expert Care Meets Advanced Technology
            </h2>
          </div>

          <div className="space-y-6 text-center">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Medical expertise and modern equipment go hand in hand for successful fertility treatment. Our clinic combines both. Our best IUI doctor in Delhi carefully examines each case, looking for the root cause of fertility challenges and recommending the treatment that gives you the best chance of success.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              This level of attention and care is why couples feel at ease and why our clinic is recognized as a trusted IUI center in Delhi.
            </p>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              If your case requires more advanced solutions, our network with the{' '}
              <a
                href="https://drpayalbajaj.com/ivf-treatment/"
                className="text-pink-600 hover:text-pink-700 font-semibold underline"
              >
                best IVF clinic in Delhi India
              </a>
              , ensures seamless access to higher-level treatment options.
            </p>
          </div>
        </div>
      </div>

      {/* Compassionate Support */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-gray-100">
          <div className="flex items-center justify-center mb-8">
            <Users className="w-12 h-12 text-pink-500 mr-3" />
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Compassionate Support at Every Step
            </h2>
          </div>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center max-w-4xl mx-auto">
            We understand that undergoing fertility treatment can be emotionally challenging. That&apos;s why we make empathy a core part of our care. From explaining procedures in plain language to offering reassurance during stressful moments, our team is with you at every stage. You&apos;re not just a patient here—you&apos;re a couple with hopes, dreams, and stories that matter.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl shadow-xl p-8 md:p-12 text-white text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-12 h-12 mr-3" />
            <h2 className="text-2xl md:text-3xl font-semibold">
              Take the First Step Toward Parenthood
            </h2>
          </div>

          <div className="space-y-6 mb-8">
            <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              If you&apos;re ready to start your journey to parenthood, our clinic is here to guide you. With expert advice from Dr. Payal Bajaj, a trusted IUI specialist in Delhi, modern facilities, and complete transparency about IUI treatment cost in Delhi, you can approach your fertility journey with confidence.
            </p>
            <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              Whether it&apos;s your first attempt or a new plan after previous challenges, our goal is simple: to help you take one step closer to holding your little one in your arms.
            </p>
          </div>

          <a
            href="/iui-treatment"
            className="inline-block bg-white text-pink-600 font-semibold px-10 py-5 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-lg"
          >
            Book Your Consultation with the Best IUI Doctor in Delhi Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default IUISection;