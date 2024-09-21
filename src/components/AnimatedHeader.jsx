import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedHeader = ({ text1, text3, className, textSize }) => {
  const [gooeyIntensity, setGooeyIntensity] = useState(15);

  useEffect(() => {
    const interval = setInterval(() => {
      setGooeyIntensity(prev => (prev === 15 ? 25 : 15)); // Switch between intensities
    }, 2000); // Change intensity every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation={gooeyIntensity} result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="
              1 0 0 0 0  
              0 1 0 0 0  
              0 0 1 0 0  
              0 0 0 30 -15"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>

      <motion.div
        className={`${className}`}
        initial={{ opacity: 0, filter: 'blur(20px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        viewport={{ once: true }}
        style={{ filter: 'url(#goo)' }}  // Apply the gooey effect
      >
        <span className="text-[#f4f3ff] font-normal font-display" style={{ fontSize: textSize }}>{text1}</span>
        <span className="text-[#f4f3ff] font-normal font-serif pl-4" style={{ fontSize: textSize }}>{text3}</span>
      </motion.div>
    </>
  );
};

export default AnimatedHeader;
