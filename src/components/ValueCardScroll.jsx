import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ValueCard from './ValueCard'; // Assuming you have a separate ValueCard component

gsap.registerPlugin(ScrollTrigger);

const ValueCardScroll = () => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null); // Reference to the outer wrapper

  useEffect(() => {
    let ctx = gsap.context(() => {
      const container = containerRef.current;
      const wrapper = wrapperRef.current; // The outer container that wraps the scrollable content

      gsap.to(container, {
        xPercent: -100 * (container.children.length - 1), // Move based on the number of cards
        ease: 'none',
        scrollTrigger: {
          trigger: wrapper, // Triggering the scroll on the outer container
          pin: true, // Pin the section until scrolling is complete
          scrub: 1, // Smooth scrubbing
          start: 'top top', // Start pinning when the top of the section hits the top of the viewport
          end: () => `+=${container.offsetWidth}`, // Scroll distance based on content width
          pinSpacing: false, // Avoid extra spacing when pinning ends
        },
      });
    });

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div ref={wrapperRef} className="w-screen h-screen flex justify-center items-center overflow-hidden">
      <div ref={containerRef} className="flex">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="px-12 py-6">
            <ValueCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValueCardScroll;