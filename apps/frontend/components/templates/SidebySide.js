import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '../../plugins/ScrollTrigger';
import TwoColumn from '../layouts/TwoColumn';

gsap.registerPlugin(ScrollTrigger);

const SideBySide = ({ leftContent, rightContent }) => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Left column animation
      gsap.from(leftRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: leftRef.current,
          start: 'top 80%',
        },
      });

      // Right column animation
      gsap.from(rightRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: rightRef.current,
          start: 'top 80%',
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <TwoColumn
      leftContent={<div ref={leftRef}>{leftContent}</div>}
      rightContent={<div ref={rightRef}>{rightContent}</div>}
    />
  );
};

export default SideBySide;