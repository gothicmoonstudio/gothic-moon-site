import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web-light';
import SolidButton from '../ui/SolidButton';

const ProjectCard = ({ title, subtitle, description, status, animationData }) => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const animationInstance = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
    });

    return () => animationInstance.destroy();
  }, [animationData]);

  return (
    <div className="relative w-full h-[30rem] md:h-[30rem] lg:h-[34rem] p-6 md:p-8 lg:p-12 bg-gradient-to-tl from-[#DBD6FF] to-[#F4F3FF] rounded-2xl shadow-lg flex flex-col justify-between gap-6 transition-all duration-300 overflow-visible">
      {/* Background Lottie Animation */}
      <div
        ref={animationContainer}
        className="absolute bottom-0 right-0 w-full h-[18rem] md:w-full md:h-[20rem] lg:w-full lg:h-[24rem] object-contain"
      />

      {/* Top Section: Title, Subtitle, and Button */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 w-full">
        <div className="flex flex-col gap-2">
          <div className="text-[#141221] text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] leading-9 font-header font-medium text-left">
            {title} <span className="font-serif">{subtitle}</span>
          </div>
          <div className="text-[#3f3a5b] text-base font-normal leading-7 font-body text-left">
            {description}
          </div>
        </div>

        <div className="flex justify-end items-center">
          <SolidButton label={status} />
        </div>
      </div>

      {/* Optional Bottom Section */}
      <div className="mt-auto"></div>
    </div>
  );
};

export default ProjectCard;