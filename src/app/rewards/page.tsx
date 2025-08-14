'use client';

import React, { useState } from 'react';
import UserInputForm from '@/components/UserInputForm';
import ScratchCardGame from '@/components/ScratchCardGame';
import { toast } from 'react-hot-toast';

const RewardsPage: React.FC = () => {
  const [userData, setUserData] = useState({ name: '', email: '', phone: '' });
  const [canPlay, setCanPlay] = useState(false);

  const checkUserReviews = async (formData: { name: string; email: string; phone: string }) => {
    setUserData(formData);

    try {
      const res = await fetch('/api/rewards/check-eligibility', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email }),
      });

      const data = await res.json();

      if (data.exists) {
        toast.error('You already tried it once!');
        setCanPlay(false);
        return false;
      } else {
        toast.success('You can play the game!');
        setCanPlay(true);
        return true;
      }
    } catch (error) {
      toast.error('Error checking Google Sheets.');
      console.error(error);
      return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-6 sm:py-12">
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
