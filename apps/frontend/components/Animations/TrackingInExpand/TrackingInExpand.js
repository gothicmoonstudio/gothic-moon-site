import React, { useEffect, useRef, useState } from 'react';
import styles from './TrackingInExpand.module.css'; // Ensure correct path

const TrackingInExpand = ({ children, className = '', style = {} }) => {
  const [isVisible, setIsVisible] = useState(false); // Track visibility state
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); 
          observer.disconnect(); 
        }
      },
      { threshold: 0.5 } 
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect(); 
  }, []);

  return (
    <span
      ref={elementRef} // Attach ref to element
      className={`${styles.hidden} ${isVisible ? styles['tracking-in-expand'] : ''} ${className}`} // Apply hidden class initially, animation class on visibility
      style={style}
    >
      {children}
    </span>
  );
};

export default TrackingInExpand;