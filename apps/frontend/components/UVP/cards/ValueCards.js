import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web-light';

const ValueCard = ({
  title1,
  title2,
  description,
  animationData,
  bgColor = 'linear-gradient(to top left, #3b1ae5, #a06af8)',
  textColor = '#fefefe',
  borderColor,
  circleColor,
  inverted = false,
}) => {
  const animationContainer = useRef(null);

  const appliedBorderColor = borderColor || textColor;
  const appliedCircleColor = circleColor || textColor;

  useEffect(() => {
    const animInstance = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
    });

    return () => animInstance.destroy();
  }, [animationData]);

  return (
    <div
      className="relative p-6 rounded-3xl flex flex-col justify-start items-center shadow-lg cursor-pointer"
      style={{
        background: bgColor,
        color: textColor,
        maxWidth: 'clamp(280px, 22.8rem, 30rem)',
        width: '100%',
        height: 'auto',
      }}
    >
      {/* Content Area with Border */}
      <div
        className="w-full h-[28rem] grow p-6 rounded-3xl border-[1.5px] flex flex-col justify-between items-center"
        style={{ borderColor: appliedBorderColor }}
      >
        {/* Lottie Animation Container */}
        {animationData && (
          <div
            ref={animationContainer}
            className="w-20 h-20 flex justify-center items-center overflow-visible relative mt-4"
            style={{
              filter: inverted ? 'invert(1)' : 'none',
            }}
          />
        )}

        {/* Titles */}
        <div className="h-full flex flex-col justify-end items-center gap-3">
          <div className="text-center">
            <h2 className="text-[clamp(1rem, 1.25rem, 1.5rem)] font-medium font-header mb-0 mt-0">
              {title1}
            </h2>
            <h3 className="text-[clamp(1rem, 1.25rem, 1.5rem)] font-normal font-serif mb-0 mt-0">
              {title2}
            </h3>
          </div>

          {/* Description */}
          <p className="text-[clamp(1rem, 1.25rem, 1.25rem)] font-normal font-['Alegreya'] leading-relaxed text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ValueCard;