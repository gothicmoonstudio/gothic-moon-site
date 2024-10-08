import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web-light';
import SecondaryButton from '../ui/SecondaryButton';

const PricesCard = ({ animationData, title, description, buttonLabel }) => {
  const animationContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });


    return () => {
      lottie.destroy();
    };
  }, [animationData]);

  return (
    <div className="h-[40rem] px-9 py-[20rem] bg-[#f4f3ff]/10 rounded-lg border-t border-[#3f3a5b] backdrop-blur-[114px] flex flex-col justify-center items-center gap-9 md:h-auto md:py-12">
    {/* Lottie Animation Container with Filter to Make it White */}
    <div
      ref={animationContainer}
      className="w-16 h-16"
      style={{ filter: 'invert(100%)' }} // Apply the filter to change colors
    />
      {/* Text Content */}
      <div className="flex flex-col justify-start items-center gap-9 text-center">
        {/* Title */}
        <div className="text-[#f4f3ff] text-2xl font-bold" style={{ fontFamily: 'Greycliff CF' }}>
          {title}
        </div>

        {/* Description */}
        <div className="w-[306.67px] text-[#cac1fb] text-lg font-normal leading-7" style={{ fontFamily: 'Bely' }}>
          {description}
        </div>

        {/* Button */}
        <SecondaryButton className="" label={buttonLabel} />
      </div>
    </div>
  );
};

export default PricesCard;