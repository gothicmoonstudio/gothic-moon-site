import React from 'react';
import { Instagram, Dribbble } from 'react-feather';
import OneColumn from '../layouts/OneColumn';

const Hero = () => {
  return (
    <OneColumn>
      {/* Main Wrapper */}
      <div className="relative w-full h-screen flex flex-col">
        {/* Content Wrapper for Title and Subtitle */}
        <div className="flex-1 w-full flex flex-col items-center justify-center">
          {/* Title Section */}
          <h1 className="w-full lg:px-40 text-[1.75rem] md:text-[3rem] lg:text-[4rem] font-normal font-header leading-[150%] text-center">
          {/* First Span with Negative Margin */}
          Crafting{' '}
          <span className="inline-block -mt-2">spellbinding</span>

          {/* Inline Video Element with Negative Margin */}
          <img
            src="/gifs/gooey.gif"
            className="inline-block w-auto h-12 md:h-16 lg:h-36 mx-[-4px] md:mx-[-6px] lg:mx-[-6px] -mt-2 align-middle"
            autoPlay
            loop
            muted
            playsInline
          />

          <span className="inline-block -mt-2">user</span> experiences that enchant your users & elevate{' '}

          {/* Second Span with Negative Margin */}
          <span className="inline-block font-serif -mt-2">your</span>

          {/* Second Image Element with Negative Margin */}
          <img
            src="/gifs/molecule.gif" // Replace with the correct image path or URL
            className="inline-block w-auto h-12 md:h-16 lg:h-36 mx-[-4px] md:mx-[-6px] lg:mx-[-6px] -mt-2 align-middle"
            autoPlay
            loop
            muted
            playsInline
          />

          <span className="inline-block font-serif -mt-2">digital presence.</span>
        </h1>

          {/* Subtitle Section */}
          <p className="text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-normal font-header leading-[150%] text-center mt-4">
            Gothic Moon is a digital design studio specializing in product & web design. Check out our latest project.
          </p>
        </div>

        {/* Social Media and Contact Button pinned to the bottom */}
        <div className="absolute w-full h-full py-8 md:py-16 lg:py-24 flex items-end justify-start bg-transparent">
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