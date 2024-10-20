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
  monthlyPrice,
  hourlyPrice,
  monthlyDescription,
  hourlyDescription,
  monthlyDetails = [],
  hourlyDetails = [],
}) => {
  const [activeTab, setActiveTab] = useState('monthly');
  const animationContainer = useRef(null);

  useEffect(() => {
    const animInstance = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => {
      animInstance.destroy();
    };
  }, [animationData]);

  const renderContent = () => {
    const isMonthly = activeTab === 'monthly';
    const price = isMonthly ? monthlyPrice : hourlyPrice;
    const description = isMonthly ? monthlyDescription : hourlyDescription;
    const details = isMonthly ? monthlyDetails : hourlyDetails;

    return (
      <>
        {/* Price */}
        <div className="text-[#f4f3ff] text-[1.75rem] md:text-[2.25rem] lg:text-[2.25rem] font-medium text-left font-header">
          {price}
        </div>

        {/* Description */}
        <div className="text-[#f4f3ff] text-[1.25rem] md:text-[1rem] lg:text-[1.25rem] text-left font-body">
          {description}
        </div>

        {/* Bullet Points */}
        <ul className="text-[#f4f3ff] text-base leading-[150%] font-body">
          {details.map((detail, index) => (
            <li key={index} className="my-2 ml-3 flex items-center">
              <SVGBullet />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <div className="h-full w-full md:w-[24rem] p-6 bg-[#f4f3ff]/10 rounded-lg border-t border-[rgba(244,243,255,0.25)] backdrop-blur-[114px] flex flex-col gap-4 transform hover:scale-105 transition duration-300 overflow-hidden">
      {/* Lottie Animation */}
      <div
        ref={animationContainer}
        className="w-10 h-10 p-2 bg-gradient-to-tl from-[#6BA000] to-[#B7DD00] rounded-[8px]"
        style={{ filter: 'invert(100%)' }}
      />

      {/* Title */}
      <div className="text-[#f4f3ff] text-base font-medium uppercase text-left font-header">
        {title}
      </div>

      {/* Tabs */}
        <div className="flex gap-4 border-b border-[#f4f3ff]/20">
        <div
            onClick={() => setActiveTab('monthly')}
            className={`cursor-pointer py-2 transition-all duration-300 ease-in-out ${
            activeTab === 'monthly'
                ? 'border-b-2 border-[#f4f3ff]'
                : 'hover:border-b-2 hover:border-[#f4f3ff]/50'
            }`}
        >
            <span
            className={`text-base font-header transition-colors duration-300 ${
                activeTab === 'monthly' ? 'text-[#f4f3ff]' : 'text-[#f4f3ff]/50'
            }`}
            >
            Monthly
            </span>
        </div>
        <div
            onClick={() => setActiveTab('hourly')}
            className={`cursor-pointer py-2 transition-all duration-300 ease-in-out ${
            activeTab === 'hourly'
                ? 'border-b-2 border-[#f4f3ff]'
                : 'hover:border-b-2 hover:border-[#f4f3ff]/50'
            }`}
        >
            <span
            className={`text-base font-header transition-colors duration-300 ${
                activeTab === 'hourly' ? 'text-[#f4f3ff]' : 'text-[#f4f3ff]/50'
            }`}
            >
            Hourly
            </span>
        </div>
        </div>

      {/* Content */}
      {renderContent()}

      {/* Button */}
      <div className="mt-4 flex justify-start">
        <SecondaryButton 
            label={buttonLabel} 
            className="inline-flex px-6 py-2 border rounded-full text-center" 
        />
        </div>
    </div>
  );
};

export default PricesCardWithTab;