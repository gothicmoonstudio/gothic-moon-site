import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const Preloader = ({ setLoading }) => {
  // Using Framer Motion for animated count
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => {
      setDisplayCount(v);
    });

    const animation = animate(count, 100, { duration: 10 });

    const stopLoading = setTimeout(() => {
      setLoading(false);
    }, 10000);

    return () => {
      animation.stop();
      clearTimeout(stopLoading);
      unsubscribe();
    };
  }, [count, setLoading, rounded]);

  // Function to generate random values
  const getRandom = (min, max) => Math.random() * (max - min) + min;

  return (
    <div className="preloader-container">
      {/* Plasma Loader */}
      <div className="plasma fill">
        <svg width="0" height="0">
          <filter id="gooey-fill">
            <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -16"
              result="goo"
            />
          </filter>
        </svg>
        <div className="gooey-container">
          <span className="level">
            {/* Plasma bubbles */}
            {[...Array(8)].map((_, index) => (
              <motion.span
                key={index}
                className="plasma_bubble"
                initial={{
                  x: getRandom(-150, 150), // Random starting x position
                  y: getRandom(-150, 150), // Random starting y position
                  scale: getRandom(0.8, 1.2), // Random initial scale
                }}
                animate={{
                  x: [getRandom(-200, 200), getRandom(-200, 200), getRandom(-200, 200)], // Randomized x movement
                  y: [getRandom(-200, 200), getRandom(-200, 200), getRandom(-200, 200)], // Randomized y movement
                  scale: [1, getRandom(1.3, 1.6), 1], // Random scaling
                  rotate: [0, getRandom(90, 360), 0], // Randomized rotation
                }}
                transition={{
                  duration: getRandom(4, 7), // Randomized duration for each bubble
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </span>
        </div>
      </div>

      {/* Framer Motion Animated Counter */}
      <div className="preloader-text">
        <motion.h1>{`[${displayCount}]`}</motion.h1>
      </div>
    </div>
  );
};

export default Preloader;
