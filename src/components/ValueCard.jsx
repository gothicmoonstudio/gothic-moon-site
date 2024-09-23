import React from 'react';

const ValueCard = ({ title1, title2, description, bgColor = '#f6ffbc', textColor = '#141221' }) => {
  return (
    <div
      className="w-screen h-screen flex-col justify-center items-center gap-9 inline-flex"
      style={{ backgroundColor: bgColor }} // Apply dynamic background color
    >
      {/* Title Section */}
      <div className="self-stretch text-center">
        <span className="text-[40px] font-medium" style={{ color: textColor, fontFamily: 'Greycliff CF' }}>
          {title1}
        </span>
        <span className="text-[40px] font-normal" style={{ color: textColor, fontFamily: 'Greycliff CF' }}>
          {' '}
        </span>
        <span className="text-[40px] font-normal" style={{ color: textColor, fontFamily: 'Bely Display' }}>
          {title2}
        </span>
      </div>

      {/* Description Section */}
      <div
        className="self-stretch text-center text-2xl font-normal leading-[33.67px]"
        style={{ color: textColor, fontFamily: 'Greycliff CF' }}
      >
        {description}
      </div>
    </div>
  );
};

export default ValueCard;
