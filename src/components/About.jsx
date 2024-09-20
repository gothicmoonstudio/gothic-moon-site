import React from 'react';
import Blob from './Blob';  // Import the Blob component

function About() {
  return (
    <section className="w-full h-auto px-[113px] py-[83px] bg-[#141221] flex justify-center items-center gap-9 overflow-visible">
      {/* Blob Animation */}
      <div className="relative justify-start items-start w-50 h-50 flex-shrink-0 overflow-visible">
        <Blob />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-start items-start gap-9 h-auto">
        {/* First Heading */}
        <div className="w-[643px]">
          <span className="text-[#f4f3ff] text-[40px] font-medium font-display">
            Lorem ipsum dolor
          </span>
          <span className="text-[#f4f3ff] text-[40px] font-normal font-serif">
            sit amet
          </span>
        </div>

        {/* Paragraphs */}
        <div className="w-[643px] text-[#f4f3ff] text-2xl font-normal  leading-[33.67px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget molestie augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam aliquam id libero faucibus vulputate. Donec ut ligula a leo iaculis pulvinar et eu ligula.
        </div>
        <div className="w-[643px] text-[#f4f3ff] text-2xl font-normal font-display leading-[33.67px]">
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse fringilla arcu ligula, a cursus ex vestibulum quis. Integer eu sollicitudin libero.
        </div>

        {/* Second Heading */}
        <div className="w-[643px]">
          <span className="text-[#f4f3ff] text-[40px] font-medium font-display">
            Lorem ipsum dolor
          </span>
          <span className="text-[#f4f3ff] text-[40px] font-normal font-serif">
            sit amet
          </span>
        </div>

        {/* Additional Paragraphs */}
        <div className="w-[643px] text-[#f4f3ff] text-2xl font-normal font-display leading-[33.67px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget molestie augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam aliquam id libero faucibus vulputate. Donec ut ligula a leo iaculis pulvinar et eu ligula.
        </div>

        {/* Optional Additional Heading (If Needed) */}
        <div className="w-[643px]">
          <span className="text-[#f4f3ff] text-[40px] font-medium font-display">
            Lorem ipsum dolor
          </span>
          <span className="text-[#f4f3ff] text-[40px] font-normal font-serif">
            sit amet
          </span>
        </div>
      </div>
    </section>
  );
}

export default About;
