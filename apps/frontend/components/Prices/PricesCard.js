import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web-light';
import SecondaryButton from '../ui/SecondaryButton';

const PricesCard = ({ animationData, title, priceRange, description, details = [], buttonLabel }) => {
  const animationContainer = useRef(null);

  useEffect(() => {
    // Load Lottie animation
    const animInstance = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    // Cleanup function to destroy the animation on unmount
    return () => {
      animInstance.destroy();
    };
  }, [animationData]);

  return (
    <div className="w-[28rem] h-[40rem] md:h-auto px-8 md:px-10 py-8 md:py-10 bg-[#f4f3ff]/10 rounded-lg border-t border-[#3f3a5b] backdrop-blur-[114px] flex flex-col justify-center items-start gap-6 transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg">
      {/* Lottie Animation Container */}
      <div
        ref={animationContainer}
        className="w-10 h-10 mb-6"
        style={{ filter: 'invert(100%)' }} // Apply the filter to change colors
      />

      {/* Small Title */}
      <div className="text-[#f4f3ff] text-base font-medium uppercase font-header">
        {title}
      </div>

      {/* Price Range */}
      <div className="text-[#f4f3ff] text-[2.25rem] font-medium capitalize font-header">
        {priceRange}
      </div>

      {/* Description */}
      <div className="text-[#f4f3ff]] text-[1.25rem] font-normal leading-[150%] text-left font-body">
        {description}
      </div>

      {/* Bullet-Pointed Details */}
      <ul className="list-disc list-inside text-[#f4f3ff]] text-base font-normal leading-[150%] text-left font-body">
        {details && details.map((detail, index) => (
          <li key={index} className="my-2">
            {detail}
          </li>
        ))}
      </ul>

      {/* Button */}
      <div className="mt-4">
        <SecondaryButton label={buttonLabel} />
      </div>
    </div>
  );
};

export default PricesCard;