import React, { useState } from 'react';

const TabSelector = ({ label, options }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Label */}
      <label className="text-[#141221] text-base font-medium font-['Greycliff CF'] leading-normal">
        {label}
      </label>

      {/* Options */}
      <div className="flex flex-wrap gap-4">
        {options.map((option, index) => (
          <div
            key={index}
            className={`px-4 py-2 rounded-full border border-[#afaacf] cursor-pointer 
              ${selectedOption === option ? 'bg-[#3f3a5b] text-[#f4f3ff]' : 'text-[#141221] bg-transparent'}`}
            onClick={() => setSelectedOption(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabSelector;