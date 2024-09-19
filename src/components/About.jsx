// src/components/About.jsx
import React from 'react';
import Blob from './Blob';

function About() {
  return (
    <section className="w-full min-h-screen px-28 py-20 bg-[#141221] flex flex-col md:flex-row justify-center items-center gap-16">
      {/* Text Content */}
      <div className="max-w-xl flex flex-col items-start gap-9">
        {/* Heading */}
        <h2 className="text-[#f4f3ff] text-4xl font-medium font-display">
          Lorem ipsum dolor <span className="font-normal font-serif">sit amet</span>
        </h2>

        {/* Paragraphs */}
        <p className="text-[#f4f3ff] text-2xl font-normal leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget molestie augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam aliquam id libero faucibus vulputate. Donec ut ligula a leo iaculis pulvinar et eu ligula.
        </p>

        <p className="text-[#f4f3ff] text-2xl font-normal leading-relaxed">
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse fringilla arcu ligula, a cursus ex vestibulum quis. Integer eu sollicitudin libero.
        </p>

        <p className="text-[#f4f3ff] text-2xl font-normal leading-relaxed">
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse fringilla arcu ligula, a cursus ex vestibulum quis. Integer eu sollicitudin libero.
        </p>

        {/* Subheading */}
        <h3 className="text-[#f4f3ff] text-4xl font-medium font-display mt-8">
          Lorem ipsum dolor <span className="font-normal font-serif">sit amet</span>
        </h3>

        {/* Additional Paragraph */}
        <p className="text-[#f4f3ff] text-2xl font-normal leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget molestie augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </p>

        {/* Another Subheading */}
        <h3 className="text-[#f4f3ff] text-4xl font-medium font-display mt-8">
          Lorem ipsum dolor <span className="font-normal font-serif">sit amet</span>
        </h3>
      </div>

      {/* Blob Component */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Blob />
      </div>
    </section>
  );
}

export default About;
