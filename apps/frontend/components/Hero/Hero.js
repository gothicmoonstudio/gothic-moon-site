import React from 'react';
import { Instagram, Dribbble } from 'react-feather';
import OneColumn from '../layouts/OneColumn';
import { motion } from 'framer-motion';

const Hero = () => {
  // Animation variants for title and subtitle
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 }, // Start hidden and slide up
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  const fadeInDelay = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: 'easeOut', delay: 0.3 },
    },
  };

  // Animation variant for social icons
  const socialIconsFadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2, 
        ease: 'easeOut', 
        delay: 1, // Matches the total time of the previous animation
      },
    },
  };

  return (
    <OneColumn>
      {/* Main Wrapper */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        {/* Content Wrapper for Title and Subtitle */}
        <motion.div
          className="flex flex-col items-center space-y-6"
          initial="hidden"
          animate="visible"
          variants={fadeInUp} // Apply fade-in and slide-up animation
        >
          {/* Title Section */}
          <h1 className="w-full lg:px-40 text-[1.75rem] md:text-[3rem] lg:text-[4rem] font-normal font-header leading-[150%] text-center">
            Crafting{' '}
            <span className="inline-block -mt-2">spellbinding</span>

            <img
              src="/gifs/gooey.gif"
              className="inline-block w-auto h-12 md:h-16 lg:h-36 mx-[-4px] md:mx-[-6px] lg:mx-[-6px] -mt-2 align-middle"
              autoPlay
              loop
              muted
              playsInline
            />

            <span className="inline-block -mt-2">user</span> experiences that enchant your users & elevate{' '}

            <span className="inline-block font-serif -mt-2">your</span>

            <img
              src="/gifs/molecule.gif"
              className="inline-block w-auto h-12 md:h-16 lg:h-36 mx-[-4px] md:mx-[-6px] lg:mx-[-6px] -mt-2 align-middle"
              autoPlay
              loop
              muted
              playsInline
            />

            <span className="inline-block font-serif -mt-2">digital presence.</span>
          </h1>

          {/* Subtitle Section with Slight Delay */}
          <motion.p
            className="text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-normal font-header leading-[150%] text-center mt-6"
            variants={fadeInDelay} // Subtitle has a slight delay
          >
            Gothic Moon is a digital design studio specializing in product & web design. Check out our latest project.
          </motion.p>
        </motion.div>

        {/* Social Media Icons Section with Fade-in Animation */}
        <motion.div
          className="flex justify-center space-x-4 mt-8"
          initial="hidden"
          animate="visible"
          variants={socialIconsFadeIn} // Apply fade-in animation for social icons
        >
          {/* Instagram Icon */}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram size={24} className="hover:text-[#f8ffce] hover:scale-110 transition duration-300" />
          </a>
          {/* Dribbble Icon */}
          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
            <Dribbble size={24} className="hover:text-[#f8ffce] hover:scale-110 transition duration-300" />
          </a>
        </motion.div>
      </div>
    </OneColumn>
  );
};

export default Hero;