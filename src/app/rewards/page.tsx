'use client';

import React, { useState } from 'react';
import UserInputForm from '@/components/UserInputForm';
import ScratchCardGame from '@/components/ScratchCardGame';
import toast, { Toaster } from 'react-hot-toast';

const RewardsPage: React.FC = () => {
  const [userData, setUserData] = useState({ name: '', email: '', phone: '' });
  const [canPlay, setCanPlay] = useState(false);

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
      loading: "Checking your eligibility...",
      success: (message) => message || "You are eligible for reward games!",
      error: (err) => err.message || "You are not eligible for reward games.",
    });

    return true;

  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-6 sm:py-12">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-xl sm:max-w-6xl mx-auto px-4">
        <h1 className="text-2xl sm:text-4xl font-bold text-center mb-4">Rewards & Games</h1>

        {!canPlay ? (
          <UserInputForm onCheckReviews={checkUserReviews} />
        ) : (
          <ScratchCardGame {...userData} />
        )}
      </div>
    </div>
  );
};

export default RewardsPage;
