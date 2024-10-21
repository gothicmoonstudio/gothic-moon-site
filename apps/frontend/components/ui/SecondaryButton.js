import React from 'react';

const SecondaryButton = ({ label, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative h-[54px] px-6 bg-white/15 rounded-full border-[.75px] border-[#f4f3ff] flex justify-center items-center cursor-pointer overflow-hidden transition-all duration-150 ease-in-out hover:animate-halo"
    >
      <div className="text-[#f4f3ff] text-base font-medium relative z-10 text-center font-header">
        {label}
      </div>
    </a>
  );
};

export default SecondaryButton;