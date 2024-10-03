import React, { useEffect } from 'react';
import { useFontsContext } from '../context/fontscontext';

const PrimaryButton = ({ label }) => {
  const { fonts } = useFontsContext();

  useEffect(() => {
    if (fonts.length > 0) {
      const displayFont = fonts[0]?.css_stack || 'sans-serif';
      // Set CSS variable for button font dynamically
      document.documentElement.style.setProperty('--font-display', displayFont);
    }
  }, [fonts]);

  return (
    <div className="h-[54px] px-6 bg-gradient-to-r from-[#E1303B] to-[#3B1AE5] rounded-full flex justify-center items-center gap-2.5 relative overflow-hidden transition-all duration-500 ease-in-out group">
      {/* Hover Effect Using Tailwind Classes */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3B1AE5] to-[#E1303B] opacity-0 rounded-full transition-opacity duration-500 ease-in-out group-hover:opacity-100"></div>

      {/* Text with Dynamic Font Family */}
      <div className="text-[#f4f3ff] text-lg font-medium relative z-10" style={{ fontFamily: 'var(--font-display)' }}>
        {label}
      </div>
    </div>
  );
};

export default PrimaryButton;
