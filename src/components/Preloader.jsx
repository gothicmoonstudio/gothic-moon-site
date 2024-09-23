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
      {/* Moon Loader */}
      <div className="full-moon">
        <div className="moon-cover"></div>
      </div>
      {/* Framer Motion Animated Counter */}
      <div className="preloader-text">
        <motion.h1>{`[${displayCount}]`}</motion.h1>
      </div>
    </div>
  );
};

export default Preloader;
