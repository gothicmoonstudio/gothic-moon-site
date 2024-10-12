import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const messages = [
    {
      title1: 'Committing to',
      title2: 'a Customer-Centric Approach',
      description: 'We prioritize your needs and preferences, ensuring a collaborative partnership that exceeds expectations.',
    },
    {
      title1: 'Using',
      title2: 'Data-Driven Design',
      description: 'Harness the power of data-driven design to drive engagement and deliver measurable results.',
    },
    {
      title1: 'Providing',
      title2: 'Personalized Service',
      description: 'Say goodbye to generic designs and bring your brand’s unique vision to life.',
    },
    {
      title1: 'Ensuring',
      title2: 'Quality Craftsmanship',
      description: 'Meticulously crafted designs that leave a lasting impression.',
    },
    {
      title1: 'Offering',
      title2: 'Strategic Expertise',
      description: 'Elevate your brand with data-driven strategies.',
    },
    {
      title1: 'Promising',
      title2: 'a Seamless Experience',
      description: 'Enjoy smooth communication, timely delivery, and exceptional customer service throughout your project.',
    },
];

const CrystalBall = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState('');
  const [isInitial, setIsInitial] = useState(true);
  const [showTryAgain, setShowTryAgain] = useState(false);

  const handleClick = () => {
    setIsShaking(true);
    setShowTryAgain(false);
    setTimeout(() => {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      setSelectedMessage(randomMessage);
      setIsRevealed(true);
      setIsShaking(false);
      setIsInitial(false);
    }, 800);
  };

  useEffect(() => {
    if (isRevealed) {
      const timer = setTimeout(() => {
        setIsRevealed(false);
        setShowTryAgain(true);
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, [isRevealed]);

  const handleTryAgain = () => {
    setIsRevealed(false);
    setIsShaking(true);
    setTimeout(() => {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      setSelectedMessage(randomMessage);
      setIsRevealed(true);
      setIsShaking(false);
      setShowTryAgain(false);
    }, 800);
  };

  return (
    <div className="w-[416px] h-[416px] relative flex flex-col justify-center items-center">
      {/* Initial Invitation Text */}
      {isInitial && !isRevealed && (
        <motion.div
          className="absolute text-[#272343] text-[1.25rem] font-medium font-header leading-9 z-50 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          What’s in your future?
        </motion.div>
      )}

      {/* Circle with hover and shake effect via Framer Motion */}
      <motion.div
        className={`w-[416px] h-[416px] glowing-crystal ${isShaking ? 'shake-vertical' : ''}`}
        onClick={isRevealed ? handleTryAgain : handleClick}
        whileHover={{ scale: 1.05 }}
        animate={isShaking ? { y: [0, -8, 8, -8, 8, 0] } : { y: 0 }}
        transition={{ duration: 0.8, ease: [0.455, 0.03, 0.515, 0.955] }}
      />

      {/* Revealed Message */}
      {isRevealed && !isShaking && selectedMessage && (
        <motion.div
          className="absolute flex flex-col justify-center items-center text-center w-full h-full crystal-text-container"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, staggerChildren: 0.05 }}
        >
          <motion.span className="text-[#272342] text-xl font-header font-semibold leading-tight">{selectedMessage.title1}</motion.span>
          <motion.span className="text-[#272342] text-xl font-serif font-bold leading-tight mb-4">{selectedMessage.title2}</motion.span>
          <motion.p className="text-[#272342] text-base leading-relaxed max-w-xs">{selectedMessage.description}</motion.p>
        </motion.div>
      )}

      {/* "Try Again?" Prompt */}
      {showTryAgain && (
        <motion.div
          className="absolute text-[#272343] text-[1.25rem] font-medium font-header leading-9 z-50 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Try Again?
        </motion.div>
      )}
    </div>
  );
};

export default CrystalBall;