// Header.jsx
import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '../../plugins/ScrollTrigger';
import OneColumn from '../layouts/OneColumn';

gsap.registerPlugin(ScrollTrigger);

const Header = ({ title }) => {
  const textRef = useRef(null);
  const moonRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Create a timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          invalidateOnRefresh: true, // Recalculate values on refresh
        },
      });

      // Text reveal animation
      tl.fromTo(
        textRef.current,
        { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
        {
          clipPath: 'inset(0 0% 0 0)',
          opacity: 1,
          duration: 2,
          ease: 'power3.out',
        }
      )
        // Moon movement animation
        .fromTo(
          moonRef.current,
          {
            x: 0,
            y: '-20px',
            opacity: 1,
          },
          {
            x: () => textRef.current.offsetWidth, // Dynamic end position
            y: '-20px',
            duration: 2,
            ease: 'power3.out',
            immediateRender: false, // Prevent immediate rendering on refresh
          },
          '<' // Start at the same time as text reveal
        );
    });

    return () => {
      ctx.revert();
    };
  }, [title]);

  return (
    <OneColumn>
      <header className="relative text-center font-header font-medium mb-4">
        {/* Single Text Line Enforced with No Wrap */}
        <div
          className="relative inline-block overflow-hidden whitespace-nowrap"
          ref={textRef}
        >
          <h1 className="inline-block text-[1.5rem] md:text-[3rem] lg:text-[5rem]">
            {title}
          </h1>
        </div>

        {/* Moon SVG Positioned Absolutely */}
        <img
          ref={moonRef}
          src="/images/moon.svg"
          alt="Moon Icon"
          className="absolute w-2 h-2 md:w-4 md:h-4 lg:w-6 lg:h-6 ml-2 md:ml-3 lg:ml-4"
          style={{
            top: '65%',
            transform: 'translateY(-50%)',
            opacity: 1,
            left: 0,
          }}
        />
      </header>
    </OneColumn>
  );
};

export default Header;