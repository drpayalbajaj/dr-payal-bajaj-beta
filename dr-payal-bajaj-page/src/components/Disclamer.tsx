import React from 'react';
import { Home,  Shield } from 'lucide-react';

const Disclaimer: React.FC = () => {
  const sections = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "Introduction",
      content: "Dr. Payal Bajaj provides information on its website, www.drpayal.com, for informational purposes only. While every effort is made by our team of physicians to ensure the accuracy of the content, we cannot guarantee its complete accuracy. This information is not intended to replace professional medical advice or consultation with healthcare professionals. Any opinions expressed in videos, blogs, Q&A sessions, and other content on the website are those of individual physicians and do not necessarily reflect the views of Dr. Payal Bajaj."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Disclaimer of Liability",
      content: "We do not assume responsibility or liability for any treatment decisions, diagnoses, or other information obtained through this website. Additionally, user-generated content such as comments, opinions, and advice are the sole responsibility of the users who contribute them. Dr. Payal Bajaj does not endorse or guarantee the accuracy of such user-generated content."
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
            Disclaimer
          </h1>
          <p className="text-center text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Important information regarding the use of our website and content.
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
            <strong className="text-primary text-xl">Last Updated:</strong> This disclaimer is effective as of December 11, 2025. We reserve the right to update this policy at any time. Please review this page periodically for any changes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;