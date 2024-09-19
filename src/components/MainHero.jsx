// src/components/MainHero.jsx
import React from 'react';

function MainHero() {
  return (
    <section className="w-full min-h-screen bg-secondary flex flex-col items-center justify-center">
      <div className="w-full h-62 px-28 flex flex-col items-center gap-9">
        <div className="text-center">
          <span className="text-light text-[66px] font-medium font-display leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi{' '}
          </span>
          <span className="text-light text-[66px] font-normal font-serif leading-tight">
            molestie augue
          </span>
          <span className="text-light text-[66px] font-normal font-display leading-tight">
            .
          </span>
        </div>
        <div className="flex justify-center items-center gap-9">
          <div className="w-9 h-9 relative"></div>
          <div className="w-9 h-9 relative"></div>
        </div>
      </div>
    </section>
  );
}

export default MainHero;

