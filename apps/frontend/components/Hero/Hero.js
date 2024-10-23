import React, { useState, useEffect } from 'react';
import { Instagram, Dribbble } from 'react-feather';
import OneColumn from '../layouts/OneColumn';
import { motion, useAnimation } from 'framer-motion';

const Hero = () => {
  // State to control the visibility of images
  const [showImages, setShowImages] = useState(false);

  // Animation controls for social icons
  const socialControls = useAnimation();

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  const fadeInDelay = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: 'easeOut', delay: 0.3 },
    },
  };

  const socialIconsFadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: 'easeOut',
        delay: 1, // Adjust delay if needed
      },
    },
  };

  // Trigger the social icons animation and then show the images
  useEffect(() => {
    async function sequence() {
      // Start the social icons animation
      await socialControls.start('visible');
      // After the social icons are visible, show the images
      setShowImages(true);
    }
    sequence();
  }, [socialControls]);

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
          <motion.h1
            className="w-full lg:px-40 text-[1.75rem] md:text-[3rem] lg:text-[4rem] font-normal font-header leading-[150%] text-center"
            layout
          >
            Crafting{' '}
            <motion.span className="inline-block -mt-2" layout>
              spellbinding
            </motion.span>{' '}
            {/* Conditionally render images */}
            {showImages ? (
              <motion.img
                src="/gifs/gooey.gif"
                className="inline-block w-auto h-12 md:h-16 lg:h-36 mx-[-4px] md:mx-[-6px] lg:mx-[-6px] -mt-2 align-middle"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              // Placeholder to maintain spacing
              <span style={{ display: 'inline-block', width: '0', height: '0' }} />
            )}
            <motion.span className="inline-block -mt-2" layout>
              user
            </motion.span>{' '}
            experiences that enchant your users & elevate{' '}
            <motion.span className="inline-block font-serif -mt-2" layout>
              your
            </motion.span>{' '}
            {/* Conditionally render the second image */}
            {showImages ? (
              <motion.img
                src="/gifs/molecule.gif"
                className="inline-block w-auto h-12 md:h-16 lg:h-36 mx-[-4px] md:mx-[-6px] lg:mx-[-6px] -mt-2 align-middle"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 500,
                  damping: 20,
                  delay: 0.1,
                }}
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              // Placeholder to maintain spacing
              <span style={{ display: 'inline-block', width: '0', height: '0' }} />
            )}
            <motion.span className="inline-block font-serif -mt-2" layout>
              digital presence.
            </motion.span>
          </motion.h1>

          {/* Subtitle Section with Slight Delay */}
          <motion.p
            className="text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-normal font-header leading-[150%] text-center mt-6"
            variants={fadeInDelay} // Subtitle has a slight delay
          >
            Gothic Moon is a digital design studio specializing in product & web design.
          </motion.p>
        </motion.div>

        {/* Social Media Icons Section with Fade-in Animation */}
        <motion.div
          className="flex justify-center space-x-4 md:space-x-6 lg:space-x-8 mt-8"
          initial="hidden"
          animate={socialControls}
          variants={socialIconsFadeIn} // Apply fade-in animation for social icons
        >
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
        </motion.div>
      </div>
    </OneColumn>
  );
};

export default Hero;