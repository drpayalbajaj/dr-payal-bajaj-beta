// 'use client';

// import React, { useState } from 'react';
// import UserInputForm from '@/components/UserInputForm';
// import ScratchCardGame from '@/components/ScratchCardGame';
// import toast, { Toaster } from 'react-hot-toast';

// const RewardsPage: React.FC = () => {
//   const [userData, setUserData] = useState({ name: '', email: '', phone: '' });
//   const [canPlay, setCanPlay] = useState(false);

//   const checkUserReviews = async (formData: { name: string; email: string; phone: string }) => {
//     setUserData(formData);

//     const promise = fetch("/api/rewards/check-eligibility", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email: formData.email }),
//     }).then(async (res) => {
//       const data = await res.json();
//       if (!res.ok || !data.eligible) {
//         setCanPlay(false);
//         throw new Error(data.message || "Not eligible");
//       }
//       setCanPlay(true);
//       return data.message;
//     });

//     toast.promise(promise, {
//       loading: "Checking your eligibility...",
//       success: (message) => message || "You are eligible for reward games!",
//       error: (err) => err.message || "You are not eligible for reward games.",
//     });

//     return true;

//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-6 sm:py-12">
//       <Toaster position="top-center" reverseOrder={false} />
//       <div className="max-w-xl sm:max-w-6xl mx-auto px-4">
//         <h1 className="text-2xl sm:text-4xl font-bold text-center mb-4">Rewards & Games</h1>

//         {!canPlay ? (
//           <UserInputForm onCheckReviews={checkUserReviews} />
//         ) : (
//           <ScratchCardGame {...userData} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default RewardsPage;

//new change
'use client';
import React, { useState } from 'react';
import UserInputForm from '@/components/UserInputForm';
import ScratchCardGame from '@/components/ScratchCardGame';
import toast, { Toaster } from 'react-hot-toast';

const RewardsPage: React.FC = () => {
  const [userData, setUserData] = useState({ name: '', email: '', phone: '' });
  const [canPlay, setCanPlay] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [photoError, setPhotoError] = useState(false);

  const checkUserReviews = async (formData: { name: string; email: string; phone: string }) => {
    setUserData(formData);
    const promise = fetch("/api/rewards/check-eligibility", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: formData.email }),
    }).then(async (res) => {
      const data = await res.json();
      if (!res.ok || !data.eligible) {
        setCanPlay(false);
        throw new Error(data.message || "Not eligible");
      }
      setCanPlay(true);
      return data.message;
    });

    toast.promise(promise, {
      loading: "Verifying your review...",
      success: (message) => message || "Congratulations! You&rsquo;re eligible for our appreciation rewards!",
      error: (err) => err.message || "We couldn&rsquo;t find your review. Please ensure you&rsquo;ve reviewed us on Google.",
    });
    return true;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 py-6 sm:py-12">
      <Toaster 
        position="top-center" 
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            background: '#ffffff',
            color: '#1f2937',
            boxShadow: '0 10px 25px -5px rgba(147, 51, 234, 0.1), 0 10px 10px -5px rgba(147, 51, 234, 0.04)',
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            padding: '16px',
            fontSize: '14px',
            maxWidth: '420px',
          },
        }}
      />
      
      <div className="max-w-xl sm:max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          {/* Nandi IVF Logo */}
          <div className="mb-6">
            <img 
              src="/images/nandi-ivf-logo.png" 
              alt="Nandi IVF Logo" 
              className="h-16 sm:h-20 mx-auto mb-4"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'block';
              }}
            />
            {/* Fallback if logo doesn't load */}
            <div className="hidden">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-rose-500 rounded-full mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Appreciation Rewards
            <span className="block text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800 mt-2">
              For Our Valued Patients
            </span>
          </h1>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-gray-600 text-lg sm:text-xl mb-4 leading-relaxed">
              Thank you for trusting <span className="font-semibold text-gray-800">Dr. Payal Bajaj</span> with your fertility journey
            </p>

            {/* Dr. Payal Bajaj Photo */}
            <div className="mb-6">
              <div className="relative inline-block">
                <img 
                  src="/images/dr-payal-bajaj.jpg" 
                  alt="Dr. Payal Bajaj - IVF Specialist" 
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full mx-auto object-cover shadow-lg border-4 border-white"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback if photo doesn't load */}
                <div className="hidden w-24 h-24 sm:w-28 sm:h-28 rounded-full mx-auto bg-gradient-to-r from-purple-600 to-purple-800 items-center justify-center shadow-lg border-4 border-white">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                {/* Professional badge */}
                <div className="absolute -bottom-2 -right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
                  IVF Expert
                </div>
              </div>
              <div className="mt-3">
                <h3 className="text-lg font-semibold text-gray-800">Dr. Payal Bajaj</h3>
                <p className="text-sm text-gray-600">Senior IVF Specialist & Fertility Expert</p>
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 mb-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-1">82.5%</div>
                  <div className="text-sm text-gray-600 font-medium">Success Rate</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-purple-500 mb-1">15+</div>
                  <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-1">3000+</div>
                  <div className="text-sm text-gray-600 font-medium">Happy Families</div>
                </div>
              </div>
            </div>
            
            <p className="text-gray-500 text-base leading-relaxed">
              As a token of our gratitude for sharing your experience through a Google review, 
              we're excited to offer you exclusive rewards. Your feedback helps other families 
              find hope and begin their own journey to parenthood.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-md mx-auto">
          {!canPlay ? (
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-purple-800 p-6 text-center">
                <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                  Verify Your Review
                </h2>
                <p className="text-purple-50 text-sm">
                  Enter your details to check your reward eligibility
                </p>
              </div>
              
              <div className="p-6">
                <UserInputForm onCheckReviews={checkUserReviews} />
                
                <div className="mt-6 text-center">
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Haven&rsquo;t reviewed us yet? 
                    <a 
                      href="https://www.google.com/search?q=Dr+Payal+Bajaj+reviews" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 font-medium ml-1 underline"
                    >
                      Leave a review on Google
                    </a>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-full mb-3">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                  Congratulations!
                </h2>
                <p className="text-green-50 text-sm">
                  You&rsquo;re eligible for our appreciation rewards
                </p>
              </div>
              
              <div className="p-6">
                <ScratchCardGame {...userData} />
              </div>
            </div>
          )}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Secure & Private</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Verified Reviews Only</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Trusted by 3000+ Families</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardsPage;
