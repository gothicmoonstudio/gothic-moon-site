import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web-light';
import SecondaryButton from '../ui/SecondaryButton';

const SVGBullet = () => (
  <img
    src="/images/star-rectangle-4-bloat-round 1.svg"
    alt="Bullet Point Icon"
    width="12"
    height="12"
    className="mr-3"
  />
);

const PricesCard = ({
  animationData,
  title,
  priceRange,
  priceSuffix,
  description,
  details = [],
  buttonLabel,
  buttonLink,
}) => {
  const animationContainer = useRef(null);
  const animationInstance = useRef(null); // Store the animation instance

  useEffect(() => {
    if (animationContainer.current) {
      animationInstance.current = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: false,
        animationData,
      });
    }

    return () => {
      // Safely clean up the animation on unmount
      animationInstance.current?.destroy();
    };
  }, [animationData]);

  // Function to handle hover start
  const handleMouseEnter = () => {
    animationInstance.current?.play(); // Play animation on hover
  };

  // Function to handle hover end
  const handleMouseLeave = () => {
    animationInstance.current?.stop(); // Stop animation when not hovered
  };

  return (
    <div
      className="h-full w-full md:w-[24rem] lg:w-[24rem] bg-[#f4f3ff]/10 p-6 md:p-8 rounded-lg 
      border-t border-[rgba(244,243,255,0.25)] backdrop-blur-[114px] 
      flex flex-col justify-center items-start gap-4 
      transform hover:scale-105 transition-transform duration-300 ease-in-out 
      hover:shadow-lg overflow-hidden will-change-transform"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Lottie Animation Container */}
      <div
        ref={animationContainer}
        className="w-10 h-10 mb-4 p-2 bg-gradient-to-tl from-[#6BA000] to-[#B7DD00] 
        rounded-[8px] flex justify-center items-center"
        style={{ filter: 'invert(100%)' }}
      />

      {/* Small Title */}
      <div className="text-[#f4f3ff] text-base font-medium uppercase font-header">
        {title}
      </div>

      {/* Price Range with Suffix */}
      <div className="flex items-baseline gap-2">
        <div className="text-[#f4f3ff] text-[1.75rem] md:text-[2.25rem] lg:text-[2.25rem] font-medium capitalize font-header">
          {priceRange}
        </div>
        {priceSuffix && (
          <div className="text-[#f4f3ff] text-base font-normal font-header">
            {priceSuffix}
          </div>
        )}
      </div>

      {/* Description */}
      <div className="text-[#f4f3ff] text-[1.25rem] md:text-[1rem] lg:text-[1.25rem] font-normal leading-[150%] text-left font-body">
        {description}
      </div>

      {/* Bullet-Pointed Details */}
      <ul className="text-[#f4f3ff] text-base md:text-[1rem] lg:text-[1rem] font-normal leading-[150%] text-left font-body">
        {details.map((detail, index) => (
          <li key={index} className="my-2 flex items-center">
            <SVGBullet />
            <span>{detail}</span>
          </li>
        ))}
      </ul>

      {/* Button */}
      <div className="mt-4">
        <SecondaryButton label={buttonLabel} href={buttonLink} />
      </div>
    </div>
  );
};

export default PricesCard;