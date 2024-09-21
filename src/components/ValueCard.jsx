import React from 'react';

const ValueCard = () => {
  return (
    <div className="w-[677px] h-[492px] px-[68px] py-[108px] bg-[#f4f3ff]/20 rounded-lg border border-[rgba(244, 243, 255, 0.3)] backdrop-blur-[13px] flex flex-col justify-center items-center gap-6">
      <div className="w-full text-center">
        <span className="text-[#f4f3ff] text-4xl font-medium font-display">Lorem ipsum dolor</span>
        <span className="text-[#f4f3ff] text-4xl font-normal font-display"> </span>
        <span className="text-[#f4f3ff] text-4xl font-normal font-serif">sit amet</span>
      </div>
      <div className="w-full text-center text-[#f4f3ff] text-2xl font-normal font-display leading-[33.67px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget molestie augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam aliquam id libero faucibus vulputate. Donec ut ligula a leo iaculis pulvinar et eu ligula.
      </div>
    </div>
  );
};

export default ValueCard;
