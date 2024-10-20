import React from 'react';
import { Send } from 'react-feather';

const PrimaryButton = ({ label, onClick, position = 'fixed', bottom = '2.5rem', right = '2.5rem' }) => {
  return (
    <div
      className="h-[3.4rem] w-auto px-4 md:px-6 rounded-full flex justify-center items-center gap-2.5 relative overflow-hidden transition-all duration-500 ease-in-out bg-gradient-to-r from-[#E1303B] to-[#3B1AE5] hover:scale-105 hover:shadow-lg hover:from-[#3B1AE5] hover:to-[#E1303B] hover:animate-gradient-smooth cursor-pointer hover-shake-top"
      style={{
        position: position,
        bottom: bottom,
        right: right,
        zIndex: 1000,
      }}
      onClick={onClick} // Add the onClick handler to control modal visibility
    >
      {/* Icon Always Present */}
      <Send className="text-[#f4f3ff] w-6 h-6 relative z-10" />

      {/* Show label only on medium and larger screens */}
      <div className="whitespace-nowrap hidden md:block text-[#f4f3ff] text-[1.05rem] font-medium relative z-10 font-header pl-0">
        {label}
      </div>
    </div>
  );
};

export default PrimaryButton;