import React, { useEffect, useRef, useState } from 'react';
import styles from './TextFocus.module.css';

const TextFocus = ({ children, className = '', style = {} }) => {
  const [isVisible, setIsVisible] = useState(false); // Track visibility
  const elementRef = useRef(null); // Ref for the element

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set visible when in view
          observer.disconnect(); // Stop observing
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect(); // Cleanup
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${
        isVisible ? styles['text-focus-in'] : styles.hidden
      } ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default TextFocus;