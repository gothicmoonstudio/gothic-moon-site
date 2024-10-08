import React from 'react';

// Feather icons can be directly imported, e.g., `import { IconName } from 'react-feather';`
const SolidButton = ({ label = 'Button', onClick = () => {}, Icon }) => {
  return (
    <button
      className="h-[50px] px-6 py-4 bg-[#141221] rounded-full justify-center items-center gap-2.5 inline-flex whitespace-nowrap transition-all duration-300 ease-in-out hover:bg-[#3f3a5b] focus:outline-none focus:ring-2 focus:ring-[#3f3a5b] focus:ring-offset-2"
      onClick={onClick}
    >
      {/* Conditionally render the icon if it's provided */}
      {Icon && <Icon className="w-5 h-5 text-[#f4f3ff]" />} {/* Set color and size here */}
      
      <div className="text-[#f4f3ff] text-base font-normal font-header">
        {label}
      </div>
    </button>
  );
};

export default SolidButton;