import React, { useEffect, useState } from 'react';
import ValueCard from './ValueCards';
import { useSwipeable } from 'react-swipeable';
import { motion, AnimatePresence } from 'framer-motion';
import crystalBallAnimation from '../../../public/assets/animations/icons8-crystal-ball.json';
import fortuneAnimation from '../../../public/assets/animations/icons8-fortune-teller.json';
import moonStarsAnimation from '../../../public/assets/animations/icons8-moon-and-stars.json';
import newMoonAnimation from '../../../public/assets/animations/icons8-new-moon.json';

const UVPCardSlider = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false); 
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 }); 

  const handleNextSlide = () => {
    setSelectedIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrevSlide = () => {
    setSelectedIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNextSlide,
    onSwipedRight: handlePrevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const cards = [
      {
        title1: 'Committing to',
        title2: 'a Customer-Centric Approach',
        description: 'We prioritize your needs and preferences, ensuring a collaborative partnership that exceeds expectations.',
        animationData: newMoonAnimation,
        bgColor: 'linear-gradient(90deg, #81249E, #9747FF)',
        textColor: '#F4F3FF',
        inverted: true,
      },
      {
        title1: 'Using',
        title2: 'Data-Driven Design',
        description: 'Harness the power of data-driven design to drive engagement and deliver measurable results.',
        animationData: crystalBallAnimation,
        bgColor: 'linear-gradient(45deg, #FFE9E9, #F6FFBC)',
        textColor: '#141221',
        inverted: false,
      },
      {
        title1: 'Providing',
        title2: 'Personalized Service',
        description: 'Say goodbye to generic designs and bring your brand’s unique vision to life.',
        animationData: fortuneAnimation,
        bgColor: 'linear-gradient(135deg, #3B1AE5, #E1303B)',
        textColor: '#F4F3FF',
        inverted: true,
      },
      {
        title1: 'Ensuring',
        title2: 'Quality Craftsmanship',
        description: 'Meticulously crafted designs that leave a lasting impression.',
        animationData: moonStarsAnimation,
        bgColor: 'linear-gradient(25deg, #e9cdff, #f4f3ff)',
        textColor: '#141221',
        inverted: false,
      },
      {
        title1: 'Offering',
        title2: 'Strategic Expertise',
        description: 'Elevate your brand with data-driven strategies.',
        animationData: crystalBallAnimation,
        bgColor: 'linear-gradient(45deg, #3B1AE5, #A06AF8)',
        textColor: '#F4F3FF',
        inverted: true,
      },
      {
        title1: 'Promising',
        title2: 'a Seamless Experience',
        description: 'Enjoy smooth communication, timely delivery, and exceptional customer service throughout your project.',
        animationData: newMoonAnimation,
        bgColor: 'linear-gradient(25deg, #e9cdff, #f4f3ff)',
        textColor: '#141221',
        inverted: false,
      },
    ];

    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
  
    useEffect(() => {
      document.body.style.cursor = isHovering ? 'none' : 'default'; 
      return () => {
        document.body.style.cursor = 'default'; 
      };
    }, [isHovering]);  
    
    const cardVariants = {
      enter: (direction) => ({
        opacity: 0,
        scale: 0.95, // Slightly smaller for subtle entrance effect
        x: direction > 0 ? 20 : -20, // Smaller horizontal offset
        y: 0,
        position: 'absolute', // Prevent layout shifts
        transition: {
          type: 'spring',
          stiffness: 150, // Softer spring effect
          damping: 20,
          mass: 0.5, // Faster response
        },
      }),
      center: {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        position: 'absolute', // Prevent layout shifts
        transition: {
          duration: 0.4, // Faster transition for better flow
          ease: 'easeOut',
        },
      },
      exit: (direction) => ({
        opacity: 0,
        scale: 0.95,
        x: direction > 0 ? -20 : 20,
        y: 0,
        position: 'absolute',
        transition: {
          duration: 0.4,
          ease: 'easeIn',
        },
      }),
    };
    
    const floatyAnimation = {
      animate: {
        y: [0, -10, 0, 5],
        rotate: [0, 2, -2, 0],
        scale: [1, 1.02, 1],
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: 'mirror',
        },
      },
    };

   return (
    <div
      className="flex justify-center items-center h-screen relative"
      onMouseMove={handleMouseMove} // Track mouse movement globally
    >
      <div {...swipeHandlers} className="relative w-full max-w-md flex justify-center items-center">
        <AnimatePresence initial={false} mode="wait" custom={1}>
          <motion.div
            key={selectedIndex}
            custom={1}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            whileHover={floatyAnimation.animate} // Ensure hover works
            className="w-full flex justify-center items-center"
            onMouseEnter={() => setIsHovering(true)} // Start hovering
            onMouseLeave={() => setIsHovering(false)} // Stop hovering
          >
            <ValueCard {...cards[selectedIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
  
  export default UVPCardSlider;