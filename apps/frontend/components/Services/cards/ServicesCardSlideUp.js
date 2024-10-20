import React, { useState } from 'react';
import ServicesCard from './ServicesCard';
import styles from './ServicesCardSlideUp.module.css';

const ServicesCardSlideUp = ({ service, index, totalCards }) => {
  const [isActive, setIsActive] = useState(false);

  const handleCardClick = () => {
    setIsActive(!isActive);
  };

  // Calculate reverseIndex for positioning
  const reverseIndex = totalCards - index - 1;

  return (
      <div
        className={`${styles.cardWrapper} ${
          isActive ? styles.active : styles.cardOffset
        }`}
        style={{
          '--index': index,
          '--reverseIndex': reverseIndex,
          zIndex: isActive ? 10 : index, // Active card comes to the front
        }}
        onClick={handleCardClick}
      >
        <ServicesCard {...service} />
      </div>
  );
};

export default ServicesCardSlideUp;