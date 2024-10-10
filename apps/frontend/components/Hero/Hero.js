import React from 'react';
import { Instagram, Dribbble } from 'react-feather';
import OneColumn from '../layouts/OneColumn';

const Hero = () => {
  return (
    <OneColumn>
      {/* Main Wrapper */}
      <div className="relative w-full h-screen flex flex-col overflow-hidden">
        {/* Content Wrapper for Title and Subtitle */}
        <div className="flex-1 flex flex-col items-start justify-center text-left">
          {/* Title Section */}
          <h1 className="text-[1.75rem] md:text-[3rem] lg:text-[4.5rem] font-normal font-header leading-[150%] text-left">
            Crafting <span className="inline">spellbinding</span>
            {/* Inline video element inserted here */}
            <img
              src="/gifs/gooey.gif"
              className="inline-block w-auto h-12 md:h-16 lg:h-36 mx-[-4px] md:mx-[-12px] lg:mx-[-12px] align-middle"
              autoPlay
              loop
              muted
              playsInline
            />
            <span className="inline">user</span> experiences that enchant your users & elevate{' '}
            {/* New Image Element Inserted Between 'your' and 'digital' */}
            <span className="inline font-serif">your</span>
            <img
              src="/gifs/molecule.gif" // Replace with the correct image path or URL
              className="inline-block w-auto h-12 md:h-16 lg:h-36 mx-[-4px] md:mx-[-12px] lg:mx-[-12px] align-middle"
              autoPlay
              loop
              muted
              playsInline
            />
            <span className="inline font-serif">digital presence.</span>
          </h1>

          {/* Subtitle Section */}
          <p className="text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-normal font-header leading-[150%] text-left mt-4">
            Gothic Moon is a digital design studio specializing in product & web design. Check out our latest project.
          </p>
        </div>

        {/* Social Media and Contact Button pinned to the bottom */}
        <div className="absolute bottom-16 md:bottom-16 lg:bottom-24 left-0 w-full flex items-center justify-between bg-transparent">
          {/* Social Icons */}
          <div className="flex space-x-6">
            {/* Instagram Icon */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={24} className="hover:text-[#f8ffce] hover:scale-110 transition duration-300" />
            </a>
            {/* Dribbble Icon */}
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
              <Dribbble size={24} className="hover:text-[#f8ffce] hover:scale-110 transition duration-300" />
            </a>
          </div>
        </div>
      </div>
    </OneColumn>
  );
};

export default Hero;