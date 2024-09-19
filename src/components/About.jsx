// src/components/About.jsx
import React from 'react';

function About() {
  return (
    <section className="w-full h-[982px] px-28 py-20 bg-secondary flex justify-center items-center">
      <div className="h-[612px] flex flex-col items-start gap-9">
        <div className="w-[643px]">
          <span className="text-light text-[40px] font-medium font-display">
            Lorem ipsum dolor
          </span>
          <span className="text-light text-[40px] font-normal font-display">
            {' '}
          </span>
          <span className="text-light text-[40px] font-normal font-serif">
            sit amet
          </span>
        </div>
        <div className="w-[643px] text-light text-2xl font-normal font-display leading-9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget
          molestie augue. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Aliquam aliquam id libero
          faucibus vulputate. Donec ut ligula a leo iaculis pulvinar et eu
          ligula.
        </div>
        <div className="w-[643px] text-light text-2xl font-normal font-display leading-9">
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. Suspendisse fringilla arcu ligula, a cursus
          ex vestibulum quis. Integer eu sollicitudin libero.
        </div>
        {/* Repeat additional content as needed */}
      </div>
    </section>
  );
}

export default About;
