import React from 'react';

// If you are using Next.js 13+ with the new App Router, consider using `export default function`:
const SecondaryButton = ({ label }) => {
  return (
    <div className="relative h-[54px] px-6 bg-white/15 rounded-full border-[0.5px] border-[#f4f3ff] flex justify-center items-center overflow-hidden transition-all duration-300 ease-in-out hover:animate-halo">
      <div className="text-[#f4f3ff] text-base font-medium relative z-10 text-center font-header">
        {label}
      </div>
    </div>
  );
};

// In Next.js, default exports work the same way as in React
export default SecondaryButton;