// TextOverContent.jsx
import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '../../plugins/ScrollTrigger';
import OneColumn from '../layouts/OneColumn';

gsap.registerPlugin(ScrollTrigger);

const TextOverContent = ({ title, subtitle, children }) => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Create a timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          // markers: true, // Uncomment for debugging
        },
      });

      // Animate the title (header)
      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });

      // Animate the children content after the subtitle
      tl.from(contentRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.1,
        ease: 'power3.out',
      });
    });

    // Cleanup function
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <OneColumn>
      <div className="w-full flex flex-col justify-center items-center text-center">
        <div className="z-10 w-full max-w-7xl">
          <h1
            ref={titleRef}
            className="font-medium text-[1rem] md:text-[2rem] lg:text-[3rem] mb-4"
          >
            {title}
          </h1>
          <p ref={subtitleRef} className="mb-8">
            {subtitle}
          </p>
          <div ref={contentRef}>{children}</div>
        </div>
      </div>
    </OneColumn>
  );
};

export default TextOverContent;