import React from 'react';
import Link from 'next/link';
import { Send } from 'react-feather';

const PrimaryButton = ({ label, onClick, position = 'fixed', bottom = '24px', right = '24px' }) => {
  return (
        <div
          className="h-[54px] w-auto px-4 md:px-6 rounded-full flex justify-center items-center gap-2.5 relative overflow-hidden transition-all duration-500 ease-in-out bg-gradient-to-r from-[#E1303B] to-[#3B1AE5] group-hover:scale-105 group-hover:shadow-lg group-hover:from-[#3B1AE5] group-hover:to-[#E1303B] group-hover:animate-gradient-smooth cursor-pointer"
          style={{
            position: position,
            bottom: bottom,
            right: right, 
            zIndex: 1000,
          }}
          onClick={onClick} // Add the onClick handler to control modal visibility
        >
          {/* Icon Always Present */}
          <Send className="text-[#f4f3ff] relative z-10 text-xl" />

          {/* Show label only on medium and larger screens */}
          <div className="hidden md:block text-[#f4f3ff] text-base font-medium relative z-10 font-header ml-2">
            {label}
          </div>
        </div>
  );
};

export default PrimaryButton;