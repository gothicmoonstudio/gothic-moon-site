import React, { useEffect, useRef, useState } from 'react';
import styles from './SlideInBckCenter.module.css';

const SlideInBckCenter = ({ children, className = '', style = {} }) => {
  const [isVisible, setIsVisible] = useState(false); // Track visibility state
  const elementRef = useRef(null);

  useEffect(() => {
    // Create an Intersection Observer to detect when the element is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visibility to true when the element is in view
          observer.disconnect(); // Disconnect the observer after triggering once
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the element is in view
    );

    // Attach the observer to the element
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    // Cleanup function to disconnect the observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef} // Attach the reference to the element
      className={`${isVisible ? styles['slide-in-bck-center'] : ''} ${className}`} // Apply animation class based on visibility
      style={style}
    >
      {children}
    </div>
  );
};

export default SlideInBckCenter;