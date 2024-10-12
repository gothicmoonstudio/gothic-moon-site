import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '../../../plugins/ScrollTrigger';
import styles from './TextReveal.module.css'; 

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const TextReveal = ({ children, className = '', style = {} }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Basic GSAP animation triggered by ScrollTrigger
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 }, // Initial state: hidden and below
      {
        opacity: 1, // Final state: fully visible
        y: 0, // Moves to its original position
        duration: 1, // Duration of the animation
        ease: 'power2.out', // Smooth easing
        scrollTrigger: {
          trigger: containerRef.current, // Use this element as the trigger
          start: 'top 80%', // Start animation when the top of the element is 80% from the top of the viewport
          end: 'bottom 20%', // End animation when the bottom of the element is 20% from the top of the viewport
          toggleActions: 'play none none none', // Play the animation when in view
          markers: true, // Optional: add markers to see the start and end points
        },
      }
    );

    // Clean up ScrollTrigger instance on component unmount
    return () => {
      ScrollTrigger.getById(containerRef.current)?.kill();
    };
  }, []);

  return (
    <div ref={containerRef} className={`${styles.textContainer} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default TextReveal;