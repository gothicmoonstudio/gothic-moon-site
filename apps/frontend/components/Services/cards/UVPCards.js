import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web-light';

const UVPCard = ({
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
      className="relative w-[19.12rem] md:w-[22.8rem] lg:w-[22.8rem] h-[26.56rem] md:h-[32.6rem] lg:h-[32.6rem] p-6 rounded-3xl flex flex-col justify-start items-center shadow-lg"
      style={{ background: bgColor, color: textColor }}
    >
      {/* Content Area with Border */}
      <div
        className="self-stretch grow p-6 rounded-3xl border-[1.5px] flex flex-col justify-between items-center"
        style={{ borderColor: appliedBorderColor }}
      >
        {/* Lottie Animation Container */}
        {animationData && (
          <div
            ref={animationContainer}
            className="w-16 md:w-16 lg:w-20 h-20 md:h-20 lg:h-20 flex justify-center items-center overflow-visible relative mt-4"
            style={{
              filter: inverted ? 'invert(1)' : 'none',
            }}
          />
        )}

        {/* Titles */}
        <div className="h-full flex flex-col justify-end items-center gap-3 md:gap-6 lg:gap-6">
          <div className="text-center">
            <h2 className="text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem] font-medium font-header mb-0 mt-0">{title1}</h2>
            <h3 className="text-[1.125rem] md:text-[1.25rem] lg:text-[1.5rem] font-normal font-serif mb-0 mt-0">{title2}</h3>
          </div>

          {/* Description */}
          <p className="text-[1rem] md:text-[1.05rem] lg:text-[1.25rem] font-normal font-['Alegreya'] leading-relaxed text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UVPCard;