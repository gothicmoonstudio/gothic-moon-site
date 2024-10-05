import React, { useLayoutEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Dribbble } from 'react-feather';
import { gsap } from 'gsap';
import OneColumn from '../layouts/OneColumn';

const Hero = () => {
  const [circleData, setCircleData] = useState([]);
  const blobsRef = useRef([]);
  const contentRef = useRef(null);

  // Debounce function to optimize resize events
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  // Function to generate initial blob positions
  const generateBlobs = (count) => {
    const blobs = [];
    for (let i = 0; i < count; i++) {
      blobs.push({
        r: Math.random() * 80 + 50, // Radius between 50 and 130
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        xSpeed: Math.random() * 1 - 0.5, // Speed between -0.5 and 0.5
        ySpeed: Math.random() * 1 - 0.5,
      });
    }
    return blobs;
  };

  // Set blob positions based on the current viewport size
  useLayoutEffect(() => {
    const updateBlobsBasedOnViewport = () => {
      const width = window.innerWidth;
      let blobCount = 5; // Default for small screens

      if (width >= 1200) {
        blobCount = 10; // For large screens
      } else if (width >= 768) {
        blobCount = 7; // For medium screens
      }

      setCircleData(generateBlobs(blobCount));
    };

    const handleResize = debounce(updateBlobsBasedOnViewport, 200);
    updateBlobsBasedOnViewport();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update blob positions using requestAnimationFrame
  useLayoutEffect(() => {
    const bounds = {
      minX: -150,
      minY: -150,
      maxX: window.innerWidth + 100,
      maxY: window.innerHeight + 100,
    };

    const updateBlobs = () => {
      blobsRef.current.forEach((blob, index) => {
        const circle = circleData[index];
        if (!circle) return;

        // Update positions based on speed and bounds
        circle.x += circle.xSpeed;
        circle.y += circle.ySpeed;

        if (circle.x < bounds.minX || circle.x > bounds.maxX) circle.xSpeed *= -1;
        if (circle.y < bounds.minY || circle.y > bounds.maxY) circle.ySpeed *= -1;

        // Apply updated positions
        if (blob) {
          gsap.set(blob, { attr: { cx: circle.x, cy: circle.y } });
        }
      });
      requestAnimationFrame(updateBlobs);
    };

    updateBlobs(); // Start animation loop

    return () => cancelAnimationFrame(updateBlobs); // Cleanup on unmount
  }, [circleData]);

  return (
    <OneColumn>
      <div className="relative w-full h-screen bg-[#141221] overflow-visible">
        {/* SVG Metaballs */}
        <svg className="absolute w-full h-full overflow-visible">
          <defs>
            <filter id="gooify" width="400%" x="-10%" height="400%" y="-150%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        0 0 0 25 -10"
              />
            </filter>
            <linearGradient id="lavaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3B1AE5" />
              <stop offset="100%" stopColor="#E1303B" />
            </linearGradient>
          </defs>

          <g filter="url(#gooify)">
            {circleData.map((circle, index) => (
              <circle
                ref={(el) => (blobsRef.current[index] = el)}
                key={index}
                cx={circle.x}
                cy={circle.y}
                r={circle.r}
                fill="url(#lavaGradient)"
              />
            ))}
          </g>
        </svg>

        {/* Main Content */}
        <div className="relative flex flex-col mt-36 z-10">
          {/* Title Section */}
          <motion.h1
            className="text-[2rem] md:text-[3rem] lg:text-[5rem] font-normal font-header leading-[150%] text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            Crafting spellbinding user experiences that enchant your users & elevates{' '}
            <span className="font-serif">your digital presence.</span>
          </motion.h1>

          {/* Subtitle Section */}
          <motion.p
            className="text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem] font-normal font-body leading-[150%] text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          >
            Gothic Moon is a digital design studio specializing in product & web design. Check out our latest project.
          </motion.p>

          {/* Social Media and Contact Section */}
          <motion.div
            className="flex items-center justify-between mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.4 }}
          >
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
            <button className="px-5 py-3 bg-[#f4f3ff] text-[#141221] text-lg font-normal font-header rounded-full hover:bg-[#e4e4ff] transition duration-300">
              Contact me
            </button>
          </motion.div>
        </div>
      </div>
    </OneColumn>
  );
};

export default Hero;