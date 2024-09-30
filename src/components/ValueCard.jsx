import React from 'react';

const ValueCard = ({ title1, title2, description, bgColor = '#141221', textColor = '#f4f3ff' }) => {
  return (
    <div
      className="w-[20rem] sm:w-[20rem] md:w-[22rem] lg:w-[25rem] h-[28rem] md:h-[30rem] lg:h-[37rem] p-6 md:p-10 lg:p-12 rounded-2xl flex flex-col justify-between items-center"
      style={{ backgroundColor: bgColor }} // Dynamic background color
    >
      {/* Image Section with Tarot Image */}
      <div className="w-[4rem] h-[4rem] md:w-[5rem] md:h-[5rem] lg:w-[6.5rem] lg:h-[6.5rem] mt-6 rounded-full">
        <img
          src="/images/tarot_image.png" // Path to the image inside the public folder
          alt="Tarot"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-end items-center gap-4 md:gap-6 h-full">
        <div className="text-center">
          <span className="pr-2 text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] font-medium font-display" style={{ color: textColor }}>
            {title1}
          </span>
          <span className="text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] font-normal font-serif" style={{ color: textColor }}>
            {title2}
          </span>
        </div>

        <div className="text-center text-base md:text-xl lg:text-2xl font-normal font-[Bely] leading-relaxed" style={{ color: textColor }}>
          {description}
        </div>
      </div>
    </div>
  );
};

export default ValueCard;
