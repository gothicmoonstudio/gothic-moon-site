import React from 'react';

const PrimaryButton = ({ label }) => {
  return (
    <div className="h-[54px] px-6 bg-gradient-to-r from-[#E1303B] to-[#3B1AE5] rounded-full flex justify-center items-center gap-2.5 relative overflow-hidden transition-all duration-500 ease-in-out group">
      <div className="absolute inset-0 bg-gradient-to-r from-[#3B1AE5] to-[#E1303B] opacity-0 rounded-full transition-opacity duration-500 ease-in-out group-hover:opacity-100"></div>
      <div className="text-[#f4f3ff] text-lg font-medium relative z-10 font-display">
        {label}
      </div>
    </div>
  );
};

export default PrimaryButton;