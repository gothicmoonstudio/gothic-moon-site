import React, { useState } from 'react';
import styles from './Modal.module.css';
import SolidButton from '../ui/SolidButton';
import ScaleInCenter from '../Animations/ScaleInCenter/ScaleInCenter';
import { motion } from 'framer-motion';

const Modal = ({
  title = "Lorem ipsum dolor sit amet",
  description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                 Morbi eget molestie augue. Class aptent taciti sociosqu ad 
                 litora torquent per conubia nostra, per inceptos himenaeos. 
                 Aliquam aliquam id libero faucibus vulputate. 
                 Donec ut ligula a leo iaculis pulvinar et eu ligula.`,
  buttonLabel = "👌 Perfect! Start Exploring...",
  onClose,
}) => {
  const [isShaking, setIsShaking] = useState(false);

  // Handle outside click to trigger shake animation
  const handleOverlayClick = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 800);
  };

  // Handle button click to close the modal
  const handleButtonClick = () => {
    onClose();
  };

  return (
    <div
      className={styles.modalOverlay}
      onClick={handleOverlayClick}
    >
      <ScaleInCenter> {/* Animation Wrapper */}
        <motion.div
          className={`${styles.modalContainer} ${isShaking ? styles['shake-bl'] : ''}`} 
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className={styles.modalHeader}>
            <h2 className={styles.modalTitle}>{title}</h2>
          </div>

          {/* Modal Description */}
          <p className={styles.modalDescription}>{description}</p>

          {/* Action Button (Closes the Modal) */}
          <div className={styles.buttonWrapper}>
            <SolidButton label={buttonLabel} onClick={handleButtonClick} />
          </div>
        </motion.div>
      </ScaleInCenter>
    </div>
  );
};

export default Modal;