import React, { useState, useEffect, useRef } from 'react';
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

const PricesCardWithTab = ({
  animationData,
  title,
  buttonLabel,
  buttonLink,
  monthlyPrice,
  hourlyPrice,
  monthlyPriceSuffix = "/ month",
  hourlyPriceSuffix = "/ hour",
  monthlyDescription,
  hourlyDescription,
  monthlyDetails = [],
  hourlyDetails = [],
}) => {
  const [activeTab, setActiveTab] = useState('monthly');
  const animationContainer = useRef(null);
  const animationInstance = useRef(null); // Store animation instance

  useEffect(() => {
    animationInstance.current = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: false, // Autoplay disabled by default
      animationData,
    });

    return () => {
      animationInstance.current.destroy(); // Cleanup animation on unmount
    };
  }, [animationData]);

  // Hover handlers to play/pause the animation
  const handleMouseEnter = () => animationInstance.current?.play();
  const handleMouseLeave = () => animationInstance.current?.stop();

  const renderContent = () => {
    const isMonthly = activeTab === 'monthly';
    const price = isMonthly ? monthlyPrice : hourlyPrice;
    const priceSuffix = isMonthly ? monthlyPriceSuffix : hourlyPriceSuffix;
    const description = isMonthly ? monthlyDescription : hourlyDescription;
    const details = isMonthly ? monthlyDetails : hourlyDetails;

    return (
      <>
        <div className="flex items-baseline gap-2">
          <div className="text-[#f4f3ff] text-[1.75rem] md:text-[2.25rem] lg:text-[2.25rem] font-medium font-header">
            {price}
          </div>
          <div className="text-[#f4f3ff] text-base font-normal font-header">
            {priceSuffix}
          </div>
        </div>

        <div className="text-[#f4f3ff] text-lg leading-[150%] text-left font-body">
          {description}
        </div>

        <ul className="text-[#f4f3ff] text-base leading-[150%] font-body">
          {details.map((detail, index) => (
            <li key={index} className="my-2 flex items-center text-left">
              <SVGBullet />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <div
      className="h-full w-full md:w-[24rem] p-6 rounded-lg bg-[#f4f3ff]/10 border-t border-[rgba(244,243,255,0.25)] 
      backdrop-blur-[114px] flex flex-col justify-center items-start gap-4 transform hover:scale-105 
      transition-transform duration-300 ease-in-out hover:shadow-lg overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Lottie Animation Container */}
      <div
        ref={animationContainer}
        className="w-10 h-10 mb-4 p-2 bg-gradient-to-tl from-[#6BA000] to-[#B7DD00] rounded-[8px]"
        style={{ filter: 'invert(100%)' }}
      />

      {/* Title */}
      <div className="text-[#f4f3ff] text-base font-medium uppercase font-header">
        {title}
      </div>

      {/* Tabs */}
      <div className="self-stretch border-b border-[#f4f3ff]/20 flex justify-start gap-6 mb-4">
        <button
          onClick={() => setActiveTab('monthly')}
          className={`px-2 py-1 text-base font-header transition-all duration-150 ease-in-out ${
            activeTab === 'monthly'
              ? 'border-b-2 border-[#f4f3ff]'
              : 'hover:border-b-2 hover:border-[#f4f3ff]/50'
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setActiveTab('hourly')}
          className={`px-2 py-1 text-base font-header transition-all duration-150 ease-in-out ${
            activeTab === 'hourly'
              ? 'border-b-2 border-[#f4f3ff]'
              : 'hover:border-b-2 hover:border-[#f4f3ff]/50'
          }`}
        >
          Hourly
        </button>
      </div>

      {/* Render Content based on active tab */}
      {renderContent()}

      {/* Button */}
      <div className="mt-4">
        <SecondaryButton label={buttonLabel} href={buttonLink} />
      </div>
    </div>
  );
};

export default PricesCardWithTab;