// Loader.js
import React from 'react';
import styles from './Loader.module.css';

const Loader = () => {
  const particles = Array.from({ length: 200 });

  return (
    <div className={styles.loader}>
      {particles.map((_, index) => {
        // Generate random values for each particle
        const left = Math.random() * 100;
        const animationDelay = Math.random() * 5;
        const animationDuration = 5 + Math.random() * 5;
        const size = Math.random() * 3 + 2;

        const particleStyle = {
          left: `${left}%`,
          animationDelay: `-${animationDelay}s`,
          animationDuration: `${animationDuration}s`,
          width: `${size}px`,
          height: `${size}px`,
        };

        return (
          <div
            key={index}
            className={styles.particle}
            style={particleStyle}
          ></div>
        );
      })}
    </div>
  );
};

export default Loader;