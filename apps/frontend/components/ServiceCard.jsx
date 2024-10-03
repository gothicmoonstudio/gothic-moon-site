// ServiceCard.jsx
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import SecondaryButton from './SecondaryButton';
import lottie from 'lottie-web-light';

const ServiceCard = ({ animationData, title, description, buttonLabel, buttonLink }) => {
  const animationRef = useRef(null);

  useEffect(() => {
    // Initialize Lottie animation
    lottie.loadAnimation({
      container: animationRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
    });

    return () => {
      lottie.destroy(); // Clean up animation on unmount
    };
  }, [animationData]);

  return (
    <div className="w-full lg:w-full md:w-full flex flex-col justify-between items-center md:h-[37.5rem] h-[33rem] px-6 py-16 md:px-6 md:py-16 lg:px-8 lg:py-24 bg-[#f4f3ff]/10 rounded-lg border-t border-[rgba(244,243,255,0.5)] backdrop-blur-[114px] shadow-sm transform hover:scale-105 transition-transform">
      {/* Lottie Animation Icon */}
      <div className="w-10 h-10 md:w-10 md:h-10 lg:w-12 lg:h-12 mb-8" ref={animationRef} style={{ filter: 'invert(100%)' }}></div>
      <div className="flex flex-col justify-center gap-4 mb-6">
        {/* Title */}
    <div className="text-center text-[#f4f3ff] text-3xl md:text-3xl lg:text-3xl font-semibold font-display">
        {title}
      </div>

      {/* Description */}
    <div className="w-full max-w-xs text-center text-[#f4f3ff] text-[1.25rem] lg:text-[1.25rem] font-normal font-[Bely] leading-7">
        {description}
      </div>

    </div>
  
      {/* Button */}
      {buttonLink ? (
        <a href={buttonLink} target="_blank" rel="noopener noreferrer">
          <SecondaryButton label={buttonLabel} />
        </a>
      ) : (
        <SecondaryButton label={buttonLabel} />
      )}
    </div>
  );
};

// PropTypes for type checking
ServiceCard.propTypes = {
  animationData: PropTypes.object.isRequired, // Lottie animation data
  title: PropTypes.string.isRequired, // Card title
  description: PropTypes.string.isRequired, // Card description
  buttonLabel: PropTypes.string.isRequired, // Text for button
  buttonLink: PropTypes.string, // Optional link for button
};

export default ServiceCard;
