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
  monthlyPriceSuffix = "/ month",  // New prop for monthly suffix
  hourlyPriceSuffix = "/ hour",    // New prop for hourly suffix
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
    const priceSuffix = isMonthly ? monthlyPriceSuffix : hourlyPriceSuffix;
    const description = isMonthly ? monthlyDescription : hourlyDescription;
    const details = isMonthly ? monthlyDetails : hourlyDetails;

    return (
      <>
        <div className="flex justify-center items-end gap-2">
          {/* Price */}
          <div className="text-[#f4f3ff] text-4xl font-normal font-header">
            {price}
          </div>
          {/* Price Suffix */}
          <div className="text-[#f4f3ff] text-base font-normal font-header mb-3">
            {priceSuffix}
          </div>
        </div>

        {/* Description */}
        <div className="text-[#f4f3ff] text-lg leading-[150%] text-left font-body">
          {description}
        </div>

        {/* Bullet-pointed Details */}
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
    <div className="h-full w-full md:w-[24rem] p-6 rounded-lg bg-[#f4f3ff]/10 border-t border-[rgba(244,243,255,0.25)] backdrop-blur-[114px] flex flex-col justify-center items-start gap-4 transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg overflow-hidden">
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
      <div className="self-stretch border-b border-[#f4f3ff]/20 flex justify-start gap-6">
        <button
          onClick={() => setActiveTab('monthly')}
          className={`px-2 py-1 text-base font-header transition-all duration-300 ${
            activeTab === 'monthly' ? 'border-b-2 border-[#f4f3ff]' : 'hover:border-b-2 hover:border-[#f4f3ff]/50'
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setActiveTab('hourly')}
          className={`px-2 py-1 text-base font-header transition-all duration-300 ${
            activeTab === 'hourly' ? 'border-b-2 border-[#f4f3ff]' : 'hover:border-b-2 hover:border-[#f4f3ff]/50'
          }`}
        >
          Hourly
        </button>
      </div>

      {/* Render Content based on active tab */}
      {renderContent()}

      {/* Button */}
      <div className="mt-4">
        <SecondaryButton label={buttonLabel} />
      </div>
    </div>
  );
};

export default PricesCardWithTab;