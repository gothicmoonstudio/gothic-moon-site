import React from 'react';

const SolidButton = ({ label = 'Button', onClick = () => {}, Icon }) => {
  return (
    <button
      className="
        h-[50px] px-6 py-4 bg-[#141221] rounded-full justify-center items-center gap-2.5 inline-flex whitespace-nowrap 
        transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#3f3a5b] 
        focus:outline-none focus:ring-2 focus:ring-[#3f3a5b] focus:ring-offset-2
      "
      onClick={onClick}
    >
      {/* Conditionally render the icon if it's provided */}
      {Icon && <Icon className="w-4 h-4 text-[#f4f3ff]" />} {/* Set color and size here */}
      
      <div className="text-[#f4f3ff] text-base font-normal font-header">
        {label}
      </div>
    </button>
  );
};

export default SolidButton;