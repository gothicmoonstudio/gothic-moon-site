import React from 'react';

const SecondaryButton = ({ label }) => {
  return (
    <div className="relative h-[54px] px-6 bg-white/15 rounded-full border border-[0.5px] border-[#f4f3ff] flex justify-center items-center overflow-hidden transition-all duration-300 ease-in-out hover:animate-halo">
      <div className="text-[#f4f3ff] text-lg font-medium relative z-10 text-center font-display">
        {label}
      </div>
    </div>
  );
};

export default SecondaryButton;