import React, { useState, useEffect, useRef } from 'react';
import { TweenMax, Back } from 'gsap';
import SlideImage1 from '/images/1.svg';
import SlideImage2 from '/images/2.svg';
import SlideImage3 from '/images/3.svg';
import SlideImage4 from '/images/4.svg';
import SlideImage5 from '/images/5.svg';

const sections = [
  { image: SlideImage1, 
      title: "Discovery", 
      text1: "Charting Your Brand's Landscape.", 
      text2: "We chart the landscape of your brand, understanding your goals and challenges." },

  { image: SlideImage2, 
    title: "Strategy", 
    text1: "Aligning Design with Business Objectives.", 
    text2: "We draw up a comprehensive plan, aligning design with your business objectives." },

  { image: SlideImage3, 
    title: "Design",
    text1: "Bringing Your Vision to Life.", 
    text2: "We sketch and refine, bringing your vision to life with pixel-perfect precision." },

  { image: SlideImage4, 
    title: "Implementation", 
    text1: "Building Your Digital Presence.", 
    text2: "We carefully construct your digital presence, following our meticulously crafted blueprints." },

  { image: SlideImage5, 
    title: "Refinement", 
    text1: "Continuous Improvement.", 
    text2: "We navigate through user feedback and data, continuously improving your design." }
];

const ProcessSection = () => {
  const [activeSection, setActiveSection] = useState(0);
  const selectDotRef = useRef(null); // Reference to the select dot
  const lastPosRef = useRef(0); // To track the last position of the select dot

  useEffect(() => {
    const dots = document.querySelectorAll('.dot');
    const selectDot = selectDotRef.current;

    // Initialize select dot position to the active section
    if (selectDot) {
      const firstDotPos = dots[activeSection].getBoundingClientRect().left;
      TweenMax.set(selectDot, { x: firstDotPos });
    }

    // Cleanup function to kill animations on unmount
    return () => {
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

    // Move select dot to the hovered dot's position
    TweenMax.to(selectDot, 0.6, { x: dest, ease: Back.easeOut });
  };

  useEffect(() => {
    // Continuous scale update based on position change
    function updateScale() {
      const selectDot = selectDotRef.current;
      if (!selectDot) return;

      const currentPos = selectDot.getBoundingClientRect().left;
      const speed = Math.abs(currentPos - lastPosRef.current);
      const d = 44; // Assumed distance between dots
      const offset = -20; // For adjusting the scale
      const hd = d / 2;

      let scale = (offset + currentPos) % d;
      if (scale > hd) {
        scale = hd - (scale - hd);
      }
      scale = 1 - ((scale / hd) * 0.35); // Normalize scaling

      // Apply scaling to select dot
      TweenMax.to(selectDot, 0.1, { scaleY: scale, scaleX: 1 + (speed * 0.06) });
      lastPosRef.current = currentPos;

      requestAnimationFrame(updateScale);
    }

    requestAnimationFrame(updateScale); // Keep updating scale dynamically
  }, []);

  return (
    <div className="process-section w-screen h-screen px-8 md:px-16 lg:px-24 py-12 bg-[#141221] flex flex-col justify-between items-center">
      {/* Content Area */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 pt-48 lg:gap-12">
        <div className="w-[637px] h-[444px] flex justify-center items-center transition-opacity duration-500 ease-in-out">
          <img src={sections[activeSection].image} alt={`Process Slide ${activeSection + 1}`} className="w-full h-full object-contain" />
        </div>

        <div className="w-[629px] flex flex-col justify-center items-center lg:items-start gap-9 transition-opacity duration-500 ease-in-out">
          <div className="w-full text-center lg:text-left">
            <span className="text-[#f4f3ff] text-2xl font-medium font-display uppercase">{sections[activeSection].title}</span>
          </div>
          <div className="w-full text-[#f4f3ff] text-6xl font-normal font-display leading-relaxed">
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