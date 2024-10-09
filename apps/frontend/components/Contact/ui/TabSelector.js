import React, { useState } from 'react';

const TabSelector = ({ label, options }) => {
  const [selectedOption, setSelectedOption] = useState(null); // No option selected initially

  return (
    <div className="w-full flex flex-col gap-3">
      {/* Label */}
      <label className="text-[#141221] text-base font-normal font-header leading-[150%]">
        {label}
      </label>

      {/* Options */}
      <div className="flex flex-wrap gap-4">
        {options.map((option, index) => (
          <div
            key={index}
            className={`px-4 py-2 rounded-full border-[.5px] border-[#afaacf] font-header text-sm cursor-pointer transform transition-transform duration-300 ease-in-out 
              ${selectedOption === option ? 'bg-[#3f3a5b] text-[#f4f3ff]' : 'text-[#141221] bg-[#f4f3ff]'}
              hover:scale-105`}
            onClick={() => setSelectedOption(option)} // Set the clicked option as the selected option
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabSelector;