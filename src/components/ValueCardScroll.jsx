import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ValueCard from './ValueCard';

gsap.registerPlugin(ScrollTrigger);

// Array containing dynamic content for ValueCards
const valueCardData = [
  {
    title1: "Personalized Service",
    title2: "Subtitle 1",
    description: "Say goodbye to generic designs and bring your brand's unique vision to life."
  },
  {
    title1: "Quality Craftsmanship",
    title2: "Subtitle 2",
    description: "Get meticulously crafted designs that exceed your expectations and leave a lasting impression."
  },
  {
    title1: "Strategic Expertise",
    title2: "Subtitle 3",
    description: "Elevate your brand with smart, data-driven strategies that enhance both aesthetics and performance."
  },
  {
    title1: "Data-Driven Design",
    title2: "Subtitle 4",
    description: "Harness the power of data-driven design that drive engagement and deliver measurable results."
  },
  {
    title1: "Transparent Pricing",
    title2: "Subtitle 5",
    description: "No hidden fees, just clear, honest estimates so you can plan with confidence."
  },
  {
    title1: "Seamless Partnership",
    title2: "Subtitle 6",
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
        xPercent: -100 * (container.children.length - 1), // Scroll based on the number of cards
        ease: 'none',
        scrollTrigger: {
          trigger: wrapper, // Pinning the wrapper for scroll trigger
          pin: true, // Pin the section until scrolling is complete
          scrub: 1, // Smooth scrubbing
          start: 'top top', // Pin starts when top of the section hits the top of the viewport
          end: () => `+=${container.offsetWidth}`, // Scroll distance based on the content width
          pinSpacing: false, // Avoid extra space when the pinning ends
          markers: false, // Set to true if you want to see markers
        },
      });
    });

    return () => ctx.revert(); // Clean up when unmounted
  }, []);

  return (
    <div ref={wrapperRef} className="w-screen h-screen flex justify-center items-center overflow-hidden">
      <div ref={containerRef} className="flex">
        {valueCardData.map((card, index) => (
          <div key={index} className="px-12 py-6">
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