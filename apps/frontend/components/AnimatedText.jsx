// AnimatedText.js
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

const AnimatedText = ({ text, className = '', delay = 0, stagger = 0.2, duration = 0.8 }) => {
  const textRef = useRef(null);
  const animationRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;

    // IntersectionObserver callback
    const handleIntersection = (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        // Start GSAP animation when the element is in view
        animationRef.current = gsap.to(textElement.querySelectorAll('.text'), {
          y: '0%',
          opacity: 1,
          duration,
          stagger,
          ease: 'power3.out',
          delay,
        });
      } else {
        // Optionally, reset the animation when the element is out of view
        gsap.set(textElement.querySelectorAll('.text'), { y: '100%', opacity: 0 });
      }
    };

    // Create a new IntersectionObserver instance
    observerRef.current = new IntersectionObserver(handleIntersection, {
      root: null, // Use the viewport as the root
      threshold: 0.1, // Trigger when 10% of the element is in view
    });

    // Observe the text element
    if (textElement) {
      observerRef.current.observe(textElement);
    }

    // Cleanup function to kill animation and disconnect observer on unmount
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
      if (observerRef.current && textElement) {
        observerRef.current.unobserve(textElement);
        observerRef.current.disconnect();
      }
    };
  }, [delay, stagger, duration]);

  // Split text into lines and wrap each in a <h1> element with a <span>
  const lines = text.split('\n').map((line, index) => (
    <p key={index} className="overflow-visible">
      <span className="text inline-block translate-y-[100%] opacity-0">{line}</span>
    </p>
  ));

  return (
    <div ref={textRef} className={`wrapper ${className}`}>
      {lines}
    </div>
  );
};

AnimatedText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
  stagger: PropTypes.number,
  duration: PropTypes.number,
};

export default AnimatedText;
