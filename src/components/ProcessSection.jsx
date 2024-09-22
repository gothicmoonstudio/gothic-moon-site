import React, { useState, useEffect, useRef } from 'react';
import { TweenMax, Back } from 'gsap';
import SlideImage1 from '/images/1.svg';
import SlideImage2 from '/images/2.svg';
import SlideImage3 from '/images/3.svg';
import SlideImage4 from '/images/4.svg';
import SlideImage5 from '/images/5.svg';
import GooeyPagination from './GooeyPagination'; // Ensure this is correctly imported

const sections = [
  {
    image: SlideImage1,
    title: "Discovery",
    text1: "Charting Your Brand's Landscape.",
    text2: "We chart the landscape of your brand, understanding your goals and challenges."
  },
  {
    image: SlideImage2,
    title: "Strategy",
    text1: "Aligning Design with Business Objectives.",
    text2: "We draw up a comprehensive plan, aligning design with your business objectives."
  },
  {
    image: SlideImage3,
    title: "Design",
    text1: "Bringing Your Vision to Life.",
    text2: "We sketch and refine, bringing your vision to life with pixel-perfect precision."
  },
  {
    image: SlideImage4,
    title: "Implementation",
    text1: "Building Your Digital Presence.",
    text2: "We carefully construct your digital presence, following our meticulously crafted blueprints."
  },
  {
    image: SlideImage5,
    title: "Refinement",
    text1: "Continuous Improvement.",
    text2: "We navigate through user feedback and data, continuously improving your design."
  }
];

const ProcessSlider = () => {
  const [activeSection, setActiveSection] = useState(0); // Default to the first section
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // GSAP Animation when the section changes
    TweenMax.fromTo(imageRef.current, 0.5, { opacity: 0 }, { opacity: 1, ease: Back.easeOut });
    TweenMax.fromTo(textRef.current, 0.5, { opacity: 0, y: 50 }, { opacity: 1, y: 0, ease: Back.easeOut });
  }, [activeSection]);

  return (
    <div className="process-section w-screen h-screen px-8 md:px-16 lg:px-24 py-12 bg-[#141221] flex flex-col justify-between items-center">
      {/* Content Area */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 pt-48 lg:gap-12">
        {/* Image Section */}
        <div ref={imageRef} className="w-[637px] h-[444px] flex justify-center items-center transition-opacity duration-500 ease-in-out">
          <img
            src={sections[activeSection].image}
            alt={`Process Slide ${activeSection + 1}`}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text Section */}
        <div ref={textRef} className="w-[629px] flex flex-col justify-center items-center lg:items-start gap-9 transition-opacity duration-500 ease-in-out">
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

      {/* Gooey Pagination Component */}
      <div className="w-full pb-20 flex justify-center items-center">
        <GooeyPagination
          sections={sections}
          activeSection={activeSection}
          setActiveSection={setActiveSection} // Handles section switching
        />
      </div>
    </div>
  );
};

export default ProcessSlider;
