import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web-light';

const UVPCard = ({
  title1,
  title2,
  description,
  animationData, // Lottie animation data
  bgColor = 'linear-gradient(to top left, #3b1ae5, #a06af8)', // Default gradient
  textColor = '#fefefe', // Default text color
  borderColor,
  circleColor,
  inverted = false, // New prop to control inversion
}) => {
  const animationContainer = useRef(null); // Lottie animation container reference

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

    return () => animInstance.destroy(); // Cleanup animation on unmount
  }, [animationData]);

  return (
    <div
      className="relative w-[22.8rem] h-[32.6rem] p-6 rounded-2xl flex flex-col justify-start items-center shadow-lg"
      style={{ background: bgColor, color: textColor }}
    >
      {/* Circle Element */}
      {/* <div
        className="absolute w-[1.6rem] h-[1.6rem] rounded-full top-3"
        style={{ backgroundColor: appliedCircleColor }}
      /> */}

      {/* Content Area with Border */}
      <div
        className="self-stretch grow p-6 rounded-2xl border-[1.5px] flex flex-col justify-between items-center"
        style={{ borderColor: appliedBorderColor }}
      >
        {/* Lottie Animation Container */}
        {animationData && (
          <div
            ref={animationContainer}
            className="w-20 h-20 flex justify-center items-center overflow-visible relative mt-4"
            style={{
              filter: inverted ? 'invert(1)' : 'none', // Apply inversion conditionally
            }}
          />
        )}

        {/* Titles */}
        <div className="h-full flex flex-col justify-end items-center gap-6">
          <div className="text-center">
            <h2 className="text-2xl font-medium font-header mb-0 mt-0">{title1}</h2>
            <h3 className="text-2xl font-normal font-serif mb-0 mt-0">{title2}</h3>
          </div>

          {/* Description */}
          <p className="text-lg font-normal font-['Alegreya'] leading-relaxed text-center">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UVPCard;