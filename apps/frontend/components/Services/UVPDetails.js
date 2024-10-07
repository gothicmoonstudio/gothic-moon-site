import React from 'react';
import SideBySide from '../templates/SidebySide';
import UVPCards from './cards/UVPCards';

const UVPDetails = () => {
  const leftContent = (
    <div className="flex flex-col gap-6">
      <div className="text-[1.5rem] md:text-[2rem] lg:text-[4rem] font-medium text-[#141221] font-header">
        Cookie-cutter designs leaving your brand feeling <span className="font-serif">invisible</span>?
      </div>
      <div className="text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] text-[#141221] font-normal font-body leading-9">
      At Gothic Moon, we do more than just design. We're strategic partners dedicated to crafting digital experiences that not only look stunning but also resonate deeply with your brand's essence. Let's break free from the ordinary and create something truly extraordinary together.
      </div>
    </div>
  );

  const rightContent = (
    <div className="w-full h-full px-[129px] py-[1.6rem] flex justify-center items-center">
      <UVPCards />
    </div>
  );

  return (
    <div className="bg-[#f8ffce] flex justify-center items-center">
      <SideBySide leftContent={leftContent} rightContent={rightContent} />
    </div>
  );
};

export default UVPDetails;