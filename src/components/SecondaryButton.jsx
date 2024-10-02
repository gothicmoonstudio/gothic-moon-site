// SecondaryButton.jsx
import React, { useEffect } from 'react';
import { useFontsContext } from '../context/fontscontext';

const SecondaryButton = ({ label }) => {
  const { fonts } = useFontsContext();

  useEffect(() => {
    if (fonts.length > 0) {
      const displayFont = fonts[0]?.css_stack || 'sans-serif';
      document.documentElement.style.setProperty('--font-display', displayFont);
    }
  }, [fonts]);

  return (
    <div className="relative h-[54px] px-6 bg-white/15 rounded-full border border-[0.5px] border-[#f4f3ff] flex justify-center items-center overflow-hidden transition-all duration-300 ease-in-out hover:animate-halo">
      <div className="text-[#f4f3ff] text-lg font-medium relative z-10 text-center" style={{ fontFamily: 'var(--font-display)' }}>
        {label}
      </div>
    </div>
  );
};

export default SecondaryButton;
