import React, { useEffect, useRef, useState } from 'react';
import styles from './SlideInRight.module.css';

const SlideInRight = ({ children, className = '', style = {} }) => {
  const [isVisible, setIsVisible] = useState(false); // Track visibility state
  const elementRef = useRef(null); // Ref for the animated element

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% visible
    );

    if (elementRef.current) {
      observer.observe(elementRef.current); // Start observing
    }

    return () => observer.disconnect(); // Cleanup observer
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${
        isVisible ? styles['slide-in-right'] : styles.hidden
      } ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default SlideInRight;