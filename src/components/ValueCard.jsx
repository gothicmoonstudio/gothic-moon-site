import React from 'react';

const ValueCard = ({ title1, title2, description, bgColor = '#141221', textColor = '#f4f3ff' }) => {
  return (
    <div
      className="w-[400px] h-[593px] p-12 rounded-2xl flex flex-col justify-between items-center"
      style={{ backgroundColor: bgColor }} // Dynamic background color
    >
      {/* Image Section with Tarot Image */}
      <div className="w-[104px] h-[104px] mt-6 rounded-full">
        <img
          src="/images/tarot_image.png" // Path to the image inside the public folder
          alt="Tarot"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-end items-center gap-6 h-full">
        <div className="text-center">
          <span className="pr-2 text-[2rem] font-medium font-display" style={{ color: textColor }}>
            {title1}
          </span>
          <span className="text-[2rem] font-normal font-serif" style={{ color: textColor }}>
            {title2}
          </span>
        </div>

        <div className="text-center text-2xl font-normal font-[Bely] leading-[33.67px]" style={{ color: textColor }}>
          {description}
        </div>
      </div>
    </div>
  );
};

export default ValueCard;
