import React from 'react';

const Module = ({ title, description, items, bgColor = '#141221' }) => {
  return (
    <div
      className={`w-full min-h-[31rem] px-8 sm:px-12 md:px-16 lg:px-[7rem] py-12 sm:py-16 md:py-24 lg:py-24 flex flex-col justify-start items-start gap-8 md:gap-12`}
      style={{ backgroundColor: bgColor }} // Allows custom background color
    >
      {/* Title Section */}
      <div className="self-stretch font-display text-[#f4f3ff] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight">
        {title}
      </div>

      {/* Content Section */}
      <div className="self-stretch flex flex-col md:flex-row justify-start items-start gap-8 md:gap-12">
        {/* Description */}
        <div className="w-full md:w-[65%] text-[#f4f3ff] font-display text-lg sm:text-xl md:text-2xl font-normal leading-relaxed">
          {description}
        </div>

        {/* List of Items */}
        <div className="w-full md:w-[35%] flex flex-col justify-start items-start gap-2">
          {items && items.length > 0 && items.map((item, index) => (
            <div key={index} className="self-stretch text-[#f4f3ff] font-display text-lg sm:text-xl md:text-2xl font-medium">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Module;
