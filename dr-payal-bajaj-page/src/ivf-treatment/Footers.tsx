import React from "react";

const Footers: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white text-center py-6 px-4">
      <div className="flex flex-col items-center justify-center space-y-2 md:space-y-1">
        <h3 className="text-lg md:text-xl font-semibold">Dr. Payal Bajaj</h3>
        <p className="text-sm md:text-base text-pink-100">
          Medical Director – Nandi IVF | Senior IVF Consultant
        </p>
      </div>

      <div className="mt-4 border-t border-white w-3/4 mx-auto opacity-60"></div>

      <p className="text-xs md:text-sm text-pink-100 mt-3">
        © {new Date().getFullYear()} Dr. Payal Bajaj. All rights reserved.
      </p>
    </footer>
  );
};

export default Footers;
