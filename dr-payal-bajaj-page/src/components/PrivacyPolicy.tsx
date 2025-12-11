import React from 'react';

import {  Home, Shield, Cookie, Database, Share2, Clock, FileText, Send } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const sections = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "Who we are",
      content: "Our website address is: http://drpayal.com/privacy-policy/."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Comments",
      content: "When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor's IP address and browser user agent string to help spam detection. An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Media",
      content: "If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website."
    },
    {
      icon: <Cookie className="w-6 h-6" />,
      title: "Cookies",
      content: "If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year. If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser. When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select \"Remember Me\", your login will persist for two weeks. If you log out of your account, the login cookies will be removed. If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day."
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Embedded content from other websites",
      content: "Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website. These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Who we share your data with",
      content: "If you request a password reset, your IP address will be included in the reset email."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "How long we retain your data",
      content: "If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue. For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "What rights you have over your data",
      content: "If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes."
    },
    {
      icon: <Send className="w-6 h-6" />,
      title: "Where we send your data",
      content: "Visitor comments may be checked through an automated spam detection service."
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
            Privacy Policy
          </h1>
          <p className="text-center text-gray-700 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
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
            <strong className="text-primary text-xl">Last Updated:</strong> This privacy policy is effective as of the date of your acceptance. We reserve the right to update this policy at any time. Please review this page periodically for any changes.
          </p>
        </div>
      </div>
    </div>
  );
};  

export default PrivacyPolicy;