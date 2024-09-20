import React from 'react';
import { Instagram, Dribbble } from 'react-feather';

function MainHero() {
  return (
    <section 
      id="main-hero"
      className="relative w-full min-h-screen bg-secondary flex flex-col items-center justify-center overflow-hidden">
      
      {/* Gooey filter for smooth merging */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="50" result="blur" /> {/* Higher blur for more gooey effect */}
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" /* Adjusted values for a stronger merge */
              result="gooey"
            />
            <feBlend in="SourceGraphic" in2="gooey" />
          </filter>
        </defs>
      </svg>

      {/* Blobs with movement */}
      <div className="blobs-container z-0 absolute inset-0">
        <div className="blobs blob-1"></div>
        <div className="blobs blob-2"></div>
        <div className="blobs blob-3"></div>
        <div className="blobs blob-4"></div>
        <div className="blobs blob-5"></div>
      </div>

      {/* Main Content */}
      <div className="w-full h-62 px-28 flex flex-col items-center gap-9 relative z-10">
        <div className="text-center">
          <span className="text-light text-[60px] font-normal font-display leading-tight">
            Crafting spellbinding user experiences that enchant your users & elevate your {' '}
          </span>
          <span className="text-light text-[60px] font-normal font-serif leading-tight">
            digital presence
          </span>
          <span className="text-light text-[60px] font-normal font-display leading-tight">
            .
          </span>
        </div>
        <div className="flex justify-center items-center gap-9">
          <div className="custom-cursor-area w-9 h-9 flex justify-center items-center relative">
            <Instagram />
          </div>
          <div className="custom-cursor-area w-9 h-9 flex justify-center items-center relative">
            <Dribbble />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainHero;
