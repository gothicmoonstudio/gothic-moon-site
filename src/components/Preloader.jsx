import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const Preloader = ({ setLoading }) => {
  // Using Framer Motion for animated count
  const count = useMotionValue(0); // Initial count value using motion
  const rounded = useTransform(count, Math.round); // Round the value for display

  useEffect(() => {
    // Animate the count from 0 to 100 over 10 seconds
    const animation = animate(count, 100, { duration: 10 });

    // Set loading to false when the animation completes
    const stopLoading = setTimeout(() => {
      setLoading(false); // Hide preloader and show main content
    }, 10000); // Matches the animation duration (10 seconds)

    // Clean up the animation and timeout on component unmount
    return () => {
      animation.stop();
      clearTimeout(stopLoading);
    };
  }, [count, setLoading]);

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
            <span className="plasma_bubble"></span>
            <span className="plasma_bubble"></span>
            <span className="plasma_bubble"></span>
            <span className="plasma_bubble"></span>
            <span className="plasma_bubble"></span>
            <span className="plasma_bubble"></span>
            <span className="plasma_bubble"></span>
            <span className="plasma_bubble"></span>
          </span>
        </div>
      </div>

      {/* Framer Motion Animated Counter */}
      <div className="preloader-text">
        <motion.h1>{rounded}</motion.h1> {/* Display the animated count */}
      </div>
    </div>
  );
};

export default Preloader;
