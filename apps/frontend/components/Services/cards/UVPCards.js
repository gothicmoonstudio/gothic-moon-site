import React from 'react';

const UVPCard = ({ title, description, imageSrc }) => {
  return (
    <div className="w-[376px] h-[523px] min-w-[376px] min-h-[523px] bg-[#F4F3FF] rounded-[20px] p-6 flex flex-col justify-between items-center shadow-lg">
      {imageSrc && (
        <div className="w-full h-1/2 overflow-hidden rounded-[15px] mb-4">
          <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
        </div>
      )}

      <h2 className="text-2xl font-semibold text-[#141221] mb-4 text-center">{title}</h2>

      <p className="text-base text-[#141221] text-center">{description}</p>
    </div>
  );
};

export default UVPCard;