import React, { useEffect } from 'react';
import { Instagram, Dribbble } from 'react-feather';
import OneColumn from '../layouts/OneColumn';
import { motion, useAnimation } from 'framer-motion';

const Hero = () => {
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
      transition: { duration: 1.2, ease: 'easeOut', delay: 1 },
    },
  };

  // Start animations for social icons when component mounts
  useEffect(() => {
    socialControls.start('visible');
  }, [socialControls]);

  return (
    <OneColumn>
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        {/* Title Section */}
        <motion.div
          className="flex flex-col items-center space-y-6"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.h1
            className="w-full lg:px-40 text-[1.75rem] md:text-[3rem] lg:text-[4rem] font-normal font-header leading-[150%] text-center"
            layout
          >
            Crafting{' '}
            <span className="inline-block -mt-2">spellbinding</span>{' '}
            <motion.img
              src="/gifs/gooey.gif"
              className="inline-block w-auto h-12 md:h-16 lg:h-36 -mx-2 md:-mx-4 lg:-mx-4 -mt-2 align-middle"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              alt="Gooey Animation"
            />{' '}
            user experiences that enchant your users & elevate{' '}
            <motion.img
              src="/gifs/molecule.gif"
              className="inline-block w-auto h-12 md:h-16 lg:h-36 -mx-2 md:-mx-4 lg:-mx-4 -mt-2 align-middle"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
              alt="Molecule Animation"
            />{' '}
            <span className="font-serif">your digital presence.</span>
          </motion.h1>

          <motion.p
            className="text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-normal font-header leading-[150%] text-center mt-6"
            variants={fadeInDelay}
          >
            Gothic Moon is a digital design studio specializing in product & web design.
          </motion.p>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          className="flex justify-center space-x-4 md:space-x-6 lg:space-x-8 mt-8"
          initial="hidden"
          animate={socialControls}
          variants={socialIconsFadeIn}
        >
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram
              size={24}
              className="hover:text-[#f8ffce] hover:scale-110 transition duration-300"
            />
          </a>
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