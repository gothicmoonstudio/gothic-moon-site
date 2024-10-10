import React from 'react';
import SideBySide from '../templates/SidebySide';
import UVPCardSlider from './cards/UVPCardSlider';

const UVPDetails = () => {
  const leftContent = (
    <div className="flex flex-col gap-6">
      <div className="text-[1.75rem] md:text-[2rem] lg:text-[3rem] font-medium font-header">
        Cookie-cutter designs leaving your brand feeling <span className="font-serif">invisible</span>?
      </div>
      <div className="text-[1.25rem] md:text-[1.25rem] lg:text-[1.5rem] font-normal font-body leading-9">
      At Gothic Moon, we do more than just design. We're strategic partners dedicated to crafting digital experiences that not only look stunning but also resonate deeply with your brand's essence. Let's break free from the ordinary and create something truly extraordinary together.
      </div>
    </div>
  );

  const rightContent = (
    <div className="w-full h-full px-8 md:px-8 lg:px-8 flex justify-center items-center">
      <UVPCardSlider />
    </div>
  );

  return (
    <div className="flex justify-center items-center">
      <SideBySide leftContent={leftContent} rightContent={rightContent} />
    </div>
  );
};

export default UVPDetails;