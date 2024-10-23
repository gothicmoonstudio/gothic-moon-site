import React, { useState, useEffect } from 'react';
import HorizontalCard from './HorizontalCard';
import styles from './HorizontalCardSlideUp.module.css';

const HorizontalCardSlideUp = ({ service, index, totalCards }) => {
  const [isActive, setIsActive] = useState(false);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCardClick = () => setIsActive(!isActive);

  const reverseIndex = totalCards - index - 1;

  return (
    <div>
    <div
        className={`${styles.cardWrapper} ${
          isActive ? styles.active : styles.cardOffset
        }`}
        style={{
          '--index': index,
          '--reverseIndex': reverseIndex,
          zIndex: isActive ? 10 : index,
          height: `${windowHeight}px`,
        }}
        onClick={handleCardClick}
      >
        <HorizontalCard {...service} />
      </div>
      </div>
  );
};

export default HorizontalCardSlideUp;