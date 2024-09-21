import React, { useState, useEffect, useRef } from 'react';
import { TweenMax, Back } from 'gsap';
import SlideImage1 from '/images/1.svg';
import SlideImage2 from '/images/2.svg';
import SlideImage3 from '/images/3.svg';
import SlideImage4 from '/images/4.svg';
import SlideImage5 from '/images/5.svg';

const sections = [
  {
    image: SlideImage1,
    title: "Discovery",
    text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    text2: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames."
  },
  {
    image: SlideImage2,
    title: "Strategy",
    text1: "Aliquam aliquam id libero faucibus vulputate.",
    text2: "Morbi eget molestie augue."
  },
  {
    image: SlideImage3,
    title: "Design",
    text1: "Ut id ornare est, a faucibus neque.",
    text2: "Vivamus dictum nisi ut diam tincidunt placerat."
  },
  {
    image: SlideImage4,
    title: "Implementation",
    text1: "Nulla facilisi. Sed ut nisi tincidunt.",
    text2: "Pellentesque vitae ipsum eget massa tempor vulputate."
  },
  {
    image: SlideImage5,
    title: "Refinement",
    text1: "Aenean eget leo et felis cursus gravida ut in est.",
    text2: "Maecenas varius nibh vitae nibh facilisis feugiat."
  }
];

const ProcessSection = () => {
  const [activeSection, setActiveSection] = useState(0);
  const selectDotRef = useRef(null);

  useEffect(() => {
    const dots = document.querySelectorAll('.dot');
    const selectDot = selectDotRef.current;

    // Set initial position of the select dot to the active section
    if (selectDot) {
      const firstDot = dots[activeSection].getBoundingClientRect().left;
      TweenMax.set(selectDot, { x: firstDot });
    }

    return () => {
      // Clean up ongoing animations
      if (selectDot) {
        TweenMax.killTweensOf(selectDot);
      }
    };
  }, [activeSection]);

  const handlePaginationMove = (index) => {
    setActiveSection(index);

    const dots = document.querySelectorAll('.dot');
    const selectDot = selectDotRef.current;
    const dest = dots[index].getBoundingClientRect().left - dots[0].getBoundingClientRect().left;

    // Move select dot to the destination
    TweenMax.to(selectDot, 0.6, { x: dest, ease: Back.easeOut });
  };

  return (
    <div className="process-section w-screen h-screen px-8 md:px-16 lg:px-24 py-12 bg-[#141221] flex flex-col justify-between items-center">
      {/* SVG Gooey Filter */}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Content Area */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 pt-48 lg:gap-12">
        <div className="w-[637px] h-[444px] flex justify-center items-center transition-opacity duration-500 ease-in-out">
          <img src={sections[activeSection].image} alt={`Process Slide ${activeSection + 1}`} className="w-full h-full object-contain" />
        </div>

        <div className="w-[629px] flex flex-col justify-center items-center lg:items-start gap-9 transition-opacity duration-500 ease-in-out">
          <div className="w-full text-center lg:text-left">
            <span className="text-[#f4f3ff] text-4xl font-medium font-display">{sections[activeSection].title}</span>
          </div>
          <div className="w-full text-[#f4f3ff] text-2xl font-normal font-display leading-relaxed">
            {sections[activeSection].text1}
          </div>
          <div className="w-full text-[#f4f3ff] text-2xl font-normal font-display leading-relaxed">
            {sections[activeSection].text2}
          </div>
        </div>
      </div>

      {/* Pagination/Carousel Indicators with Gooey Effect */}
      <div className="dots w-[393px] flex justify-center items-center gap-6 relative" style={{ filter: 'url("#goo")' }}>
        {/* Active Dot */}
        <div ref={selectDotRef} className="select w-10 h-10 rounded-full bg-[#F6FFBC] absolute"></div>

        {/* Inactive Dots */}
        {sections.map((_, index) => (
          <div
            key={index}
            onClick={() => handlePaginationMove(index)} // Set the active section on click
            className="dot w-6 h-6 bg-gray-600 rounded-full cursor-pointer"
            onMouseEnter={() => handlePaginationMove(index)} // Ensure hover works
          />
        ))}
      </div>
    </div>
  );
};

export default ProcessSection;
