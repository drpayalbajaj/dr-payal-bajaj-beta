import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

interface UserInputFormProps {
  onCheckReviews: (formData: { name: string; email: string; phone: string }) => Promise<boolean>;
}


const UserInputForm: React.FC<UserInputFormProps> = ({ onCheckReviews }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      toast.error('Email is required');
      return;
    }

    // Call the function to check reviews and pass the email
    const hasReview = await onCheckReviews({name, email, phone});

    console.log(hasReview, 'Review');
    // ✅ No need to handle the game here — RewardsPage will handle it
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="w-full bg-pink-600 text-white p-2 rounded"
      >
        Check Reviews
      </button>
    </form>
  );
};

export default UserInputForm;
