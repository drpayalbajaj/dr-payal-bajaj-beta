import React from 'react';
import { Home, FileText, Shield, Clock, Send, Share2 } from 'lucide-react';

const TermsOfUse: React.FC = () => {
  const sections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Acceptance of Terms",
      content: "By accessing or using the website www.drpayal.com (the 'Website'), operated by Dr. Payal Bajaj, you agree to be bound by these Terms of Use ('Terms'). If you do not agree with any part of these Terms, you must not use the Website. These Terms may be updated from time to time, and your continued use of the Website after such changes constitutes acceptance of the revised Terms."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Use of the Website",
      content: "The Website is provided for informational purposes only regarding fertility treatments, IVF consultations, and related services offered by Dr. Payal Bajaj. You may use the Website only for lawful purposes and in accordance with these Terms. You agree not to: (a) misuse the Website or its content; (b) transmit harmful code; (c) infringe on intellectual property rights; or (d) engage in any activity that disrupts the Website's functionality."
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Intellectual Property",
      content: "All content on the Website, including text, graphics, logos, images, videos, and software (collectively, 'Content'), is the property of Dr. Payal Bajaj or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may view and print Content for personal, non-commercial use, provided you retain all copyright notices. Any other use requires prior written permission from Dr. Payal Bajaj."
    },
    {
      icon: <Send className="w-6 h-6" />,
      title: "User Content",
      content: "If you submit comments, feedback, or other materials ('User Content') via the Website, you grant Dr. Payal Bajaj a non-exclusive, royalty-free, perpetual, irrevocable license to use, reproduce, and distribute such User Content. You represent that your User Content does not violate any third-party rights and is not defamatory or unlawful. Dr. Payal Bajaj reserves the right to remove any User Content at its discretion."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Disclaimers and Limitations of Liability",
      content: "The Website and its Content are provided 'as is' without warranties of any kind, express or implied. Dr. Payal Bajaj disclaims all warranties, including accuracy, completeness, or fitness for a particular purpose. In no event shall Dr. Payal Bajaj be liable for any indirect, incidental, or consequential damages arising from your use of the Website. Your use of the Website is at your own risk."
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Termination and Governing Law",
      content: "Dr. Payal Bajaj may terminate or suspend your access to the Website at any time without notice if you violate these Terms. These Terms are governed by the laws of India, with exclusive jurisdiction in the courts of Delhi. Any disputes arising from these Terms shall be resolved through arbitration in Delhi."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 text-gray-800 py-16 sm:py-20 shadow-lg border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm p-4 rounded-full border border-primary/30">
              <Shield className="w-14 h-14 sm:w-20 sm:h-20 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4 text-gray-900">
            Terms of Use
          </h1>
          <p className="text-center text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Please read these terms carefully before using our website and services.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 sm:p-8 border border-gray-200"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-gradient-to-br from-blue-50 to-indigo-50 text-primary p-3 sm:p-4 rounded-xl shadow-sm border border-primary/10">
                  {section.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 bg-blue-50 border border-blue-100 rounded-2xl p-6 sm:p-8 shadow-sm">
          <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
            <strong className="text-primary text-xl">Last Updated:</strong> These terms of use are effective as of December 11, 2025. We reserve the right to update these terms at any time. Please review this page periodically for any changes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;