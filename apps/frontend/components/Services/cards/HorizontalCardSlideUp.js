import React, { useEffect, useState } from 'react';
import HorizontalCard from './HorizontalCard';
import styles from './HorizontalCardSlideUp.module.css';

const HorizontalCardSlideUp = ({ service, index, totalCards }) => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const reverseIndex = totalCards - index - 1;

  return (
    <div>
      <div
        className={`${styles.cardWrapper} ${styles.cardOffset}`}
        style={{
          '--index': index,
          '--reverseIndex': reverseIndex,
          zIndex: index,
          height: `${windowHeight}px`,
        }}
      >
        <HorizontalCard {...service} />
      </div>
    </div>
  );
};

export default HorizontalCardSlideUp;