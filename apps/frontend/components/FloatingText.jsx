import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SplitText } from '../plugins/SplitText';

gsap.registerPlugin(SplitText);

const FloatingText = ({ text1, text3, className, textSize, textColor }) => {
  const headerRef = useRef(null);

  useEffect(() => {
    const split = new SplitText(headerRef.current, { type: 'chars' });

    gsap.fromTo(
      split.chars,
      { x: 'random(-100, 100)', y: 'random(-100, 100)', opacity: 0 },
      {
        x: 0,
        y: 0,
        opacity: 1,
        delay: 'random(0, 0.2)',
        ease: 'back.out(1.7)',
        duration: 1.5,
        stagger: 0.05,
        repeat: -1,
        yoyo: true,
      }
    );

    return () => {
      split.revert();
    };
  }, []);

  return (
    <div className={`flex items-center justify-center${className}`}>
      <h1 
        ref={headerRef}
        className="text-center"
        style={{ fontSize: textSize, color: textColor, whiteSpace: 'no wrap' }}
      >
        <span 
          className="font-normal font-display"
          style={{ fontSize: textSize, color: textColor, whiteSpace: 'no wrap' }}
        >
          {text1}
        </span>
        <span 
          className="font-normal font-serif pl-4"
          sstyle={{ fontSize: textSize, color: textColor, whiteSpace: 'no wrap' }}
        >
          {text3}
        </span>
      </h1>
    </div>
  );
};

export default FloatingText;
