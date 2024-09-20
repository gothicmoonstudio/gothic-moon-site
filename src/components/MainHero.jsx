import React from 'react';
// Import the specific icons you need
import { Instagram, Dribbble } from 'react-feather';

function MainHero() {
  return (
    <section 
    id="home"
    className="w-full min-h-screen bg-secondary flex flex-col items-center justify-center">
      <div className="w-full h-62 px-28 flex flex-col items-center gap-9">
        <div className="text-center">
          <span className="text-light text-[60px] font-normal font-display leading-tight">
            Crafting spellbinding user experiences that enchants your users & elevates your {' '}
          </span>
          <span className="text-light text-[60px] font-normal font-serif leading-tight">
            digital presence
          </span>
          <span className="text-light text-[60px] font-normal font-display leading-tight">
            .
          </span>
        </div>
        <div className="flex justify-center items-center gap-9">
          {/* Add the custom-cursor-area class to the icon containers */}
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
