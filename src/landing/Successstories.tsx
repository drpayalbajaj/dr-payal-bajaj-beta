// app/components/Successstories.tsx
import React from "react";
import { FaYoutube } from "react-icons/fa";

interface StoryCardProps {
  thumbnail: string;
  link: string;
}

const StoryCard: React.FC<StoryCardProps> = ({ thumbnail, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
    >
      <img
        src={thumbnail}
        alt="Success Story Thumbnail"
        className="w-full h-56 md:h-64 lg:h-72 object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
        <FaYoutube className="text-red-500 w-16 h-16 md:w-20 md:h-20 drop-shadow-lg" />
      </div>

      <div className="absolute bottom-0 w-full bg-black/60 text-white p-3 text-center text-lg font-semibold"></div>
    </a>
  );
};

const Successstories: React.FC = () => {
  return (
    <section className="py-10 px-4 md:px-8 lg:px-16 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Real Patients <span className="text-pink-600">Real Stories</span>
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <StoryCard
          thumbnail="/image/landing/Story1.jpg"
          link="https://youtu.be/c1PhfC7xm1A?si=XOqCvTUXHfMumHDB"
        />
        <StoryCard
          thumbnail="/image/landing/Story2.jpg"
          link="https://youtu.be/SAZ0btr89ls?si=SfEKz5RVHLz2d-cF"
        />
        <StoryCard
          thumbnail="/image/landing/Story3.jpg"
          link="https://youtu.be/SQ27tFxChQA?si=EvCZrbKD_QyiQXGj"
        />
      </div>
    </section>
  );
};

export default Successstories;
