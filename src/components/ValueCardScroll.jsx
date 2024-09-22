import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ValueCard from './ValueCard';

gsap.registerPlugin(ScrollTrigger);

const valueCardData = [
  {
    title1: "Providing",
    title2: "Personalized Service",
    description: "Say goodbye to generic designs and bring your brand's unique vision to life."
  },
  {
    title1: "Ensuring",
    title2: "Quality Craftsmanship",
    description: "Get meticulously crafted designs that exceed your expectations and leave a lasting impression."
  },
  {
    title1: "Offering",
    title2: "Strategic Expertise",
    description: "Elevate your brand with smart, data-driven strategies that enhance both aesthetics and performance."
  },
  {
    title1: "Using",
    title2: "Data-Driven Design",
    description: "Harness the power of data-driven design that drive engagement and deliver measurable results."
  },
  {
    title1: "Committed to",
    title2: "Transparent Pricing",
    description: "No hidden fees, just clear, honest estimates so you can plan with confidence."
  },
  {
    title1: "Promising a",
    title2: "Seamless Partnership",
    description: "Enjoy smooth communication and on-time delivery for a stress-free experience."
  },
];

const ValueCardScroll = () => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const container = containerRef.current;
      const wrapper = wrapperRef.current;

      gsap.to(container, {
        xPercent: -100 * (container.scrollWidth - 1), // Scroll based on the number of cards
        ease: 'none',
        scrollTrigger: {
          trigger: wrapper, // Pinning the wrapper for scroll trigger
          pin: true, // Pin the section until scrolling is complete
          scrub: 1, // Smooth scrubbing
          start: 'top top', // Pin starts when top of the section hits the top of the viewport
          end: () => `+=${container.children.length}`, // Scroll distance based on the content width
          pinSpacing: false, // Avoid extra space when the pinning ends
          markers: true, // Set to true if you want to see markers for debugging
        },
      });
    });

    return () => ctx.revert(); // Clean up when unmounted
  }, []);

  return (
      <div
        ref={wrapperRef}
        className="w-screen h-screen px-8 md:px-16 lg:px-24 py-12 bg-[#141221] flex flex-col justify-center items-start overflow-hidden"
        style={{
          background: "linear-gradient(90deg, #3B1AE5 0%, #A06AF8 100%)"
        }}
      >
        <div ref={containerRef} className="flex">
          {valueCardData.map((card, index) => (
            <div key={index} className="px-6 py-4">
              <ValueCard
                title1={card.title1}
                title2={card.title2}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </div>
  );
};

export default ValueCardScroll;
