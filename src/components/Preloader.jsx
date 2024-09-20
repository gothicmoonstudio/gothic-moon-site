// src/components/Preloader.jsx
import React, { useEffect } from 'react';

function Preloader({ setLoading }) {
  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the time as needed
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-light z-50">
      {/* Your logo or animation */}
      <div className="w-40 h-40 mb-16">
        {/* Placeholder for logo */}
        <img src="/images/moon.svg" alt="Logo" className="w-full h-full" />
      </div>
      {/* Loading Bar */}
      <div className="w-64 h-1 bg-[#cec2ff] relative overflow-hidden">
        <div className="h-full bg-accent loading-bar"></div>
      </div>
      {/* Loading Text */}
      <p className="mt-4 text-dark text-lg font-[Bely]">Loading...</p>
    </div>
  );
}

export default Preloader;
