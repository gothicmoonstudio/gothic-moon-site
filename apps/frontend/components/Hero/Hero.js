import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Dribbble } from 'react-feather';
import OneColumn from '../layouts/OneColumn';
import PrimaryButton from '../ui/PrimaryButton';

const Hero = () => {
  return (
    <OneColumn>
      {/* Main Wrapper */}
      <div className="relative w-full h-screen flex flex-col overflow-hidden">
        {/* Content Wrapper for Title and Subtitle */}
        <div className="flex-1 flex flex-col items-start justify-center text-left">
          {/* Title Section */}
          <motion.h1
            className="text-[1.75rem] md:text-[3rem] lg:text-[4rem] font-normal font-header leading-[150%] text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            Crafting spellbinding user experiences that enchant your users & elevates{' '}
            <span className="font-serif">your digital presence.</span>
          </motion.h1>

          {/* Subtitle Section */}
          <motion.p
            className="text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-normal font-header leading-[150%] text-left mt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          >
            Gothic Moon is a digital design studio specializing in product & web design. Check out our latest project.
          </motion.p>
        </div>

        {/* Social Media and Contact Button pinned to the bottom */}
        <div className="absolute bottom-16 md:bottom-16 lg:bottom-24 left-0 w-full flex items-center justify-between bg-transparent">
          {/* Social Icons */}
          <div className="flex space-x-6">
            {/* Instagram Icon */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram
                size={24}
                className="hover:text-[#f8ffce] hover:scale-110 transition duration-300"
              />
            </a>
            {/* Dribbble Icon */}
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
              <Dribbble
                size={24}
                className="hover:text-[#f8ffce] hover:scale-110 transition duration-300"
              />
            </a>
          </div>

          {/* Contact Button */}
          <div>
            <PrimaryButton label="Start a Project" href="/contact" />
          </div>
        </div>
      </div>
    </OneColumn>
  );
};

export default Hero;