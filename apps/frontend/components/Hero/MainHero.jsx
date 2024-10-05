import React, { useLayoutEffect, useState, useRef } from 'react';
import { Instagram, Dribbble } from 'react-feather';
import { gsap } from 'gsap';
import { ScrollTrigger } from '../../plugins/ScrollTrigger';
import HoverImagePreview from './HoverImagePreview';

gsap.registerPlugin(ScrollTrigger);

const MainHero = () => {
  const [circleData, setCircleData] = useState([]);
  const contentRef = useRef(null);
  const socialIconsRef = useRef([]);
  const headerTextRef = useRef(null);
  const blobsRef = useRef([]);
  const navbarRef = useRef(null);

  const items = [{ title: 'Project 1', imageUrl: 'https://via.placeholder.com/300x200?text=Project+1' }];

  // Debounce function for resize events
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  // Function to generate blob positions and speeds
  const generateBlobs = (count) => {
    const blobs = [];
    for (let i = 0; i < count; i++) {
      blobs.push({
        r: Math.random() * 100 + 60, // Random radius between 60 and 160
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        xSpeed: Math.random() * 1 - 0.5, // Speed between -0.5 and 0.5
        ySpeed: Math.random() * 1 - 0.5,
      });
    }
    return blobs;
  };

  // Update blobs based on screen size
  useLayoutEffect(() => {
    const setBlobsBasedOnViewport = () => {
      const width = window.innerWidth;
      let blobCount = 5; // Default to small screens

      if (width >= 1200) {
        blobCount = 10; // Large screens
      } else if (width >= 768) {
        blobCount = 7; // Medium screens
      }

      setCircleData(generateBlobs(blobCount));
    };

    const handleResize = debounce(() => setBlobsBasedOnViewport(), 200);
    setBlobsBasedOnViewport();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update blob positions using requestAnimationFrame
  useLayoutEffect(() => {
    const updatePosition = (circle, bounds) => {
      circle.x += circle.xSpeed;
      circle.y += circle.ySpeed;

      if (circle.x < bounds.minX || circle.x > bounds.maxX) circle.xSpeed *= -1;
      if (circle.y < bounds.minY || circle.y > bounds.maxY) circle.ySpeed *= -1;
    };

    const bounds = {
      minX: -150,
      minY: -150,
      maxX: window.innerWidth + 100,
      maxY: window.innerHeight + 100,
    };

    const updateBlobs = () => {
      circleData.forEach((circle) => {
        updatePosition(circle, bounds);
        const blobElement = document.getElementById(`blob-${circle.r}`);
        if (blobElement) {
          blobElement.setAttribute('cx', circle.x);
          blobElement.setAttribute('cy', circle.y);
        }
      });
      requestAnimationFrame(updateBlobs); // Request the next animation frame
    };

    updateBlobs(); // Start the animation loop

    return () => cancelAnimationFrame(updateBlobs); // Cleanup on unmount
  }, [circleData]);

  // Initial Animation Setup
  useLayoutEffect(() => {
    // Check if the headerTextRef and socialIconsRef are populated
    if (headerTextRef.current && socialIconsRef.current.every((ref) => ref !== null)) {
      // Text Animation for Main Content
      gsap.fromTo(
        headerTextRef.current.children,
        { y: '100%', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 0.5,
          onComplete: () => {
            gsap.to(socialIconsRef.current, {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.3,
              ease: 'power3.out',
              onComplete: () => {
                if (navbarRef.current) {
                  gsap.to(navbarRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power3.out',
                  });
                }
              },
            });
          },
        }
      );
    }

    // Blobs Entrance Animation
    blobsRef.current.forEach((blob, index) => {
      if (blob) {
        gsap.fromTo(
          blob,
          { scale: 0 },
          {
            scale: 1,
            duration: 1,
            delay: 0.5 + index * 0.2,
            ease: 'power3.out',
          }
        );
      }
    });

    return () => {
      if (headerTextRef.current) gsap.killTweensOf(headerTextRef.current.children);
      if (socialIconsRef.current) gsap.killTweensOf(socialIconsRef.current);
      if (navbarRef.current) gsap.killTweensOf(navbarRef.current);
      blobsRef.current.forEach((blob) => gsap.killTweensOf(blob));
    };
  }, []);

  return (
    <section id="main-hero" className="relative w-screen h-screen bg-secondary flex flex-col items-center justify-center overflow-visible">
      {/* SVG Metaballs */}
      <svg className="absolute w-full h-full overflow-hidden">
        <defs>
          <filter id="gooify" width="400%" x="-10%" height="400%" y="-150%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0
                     0 1 0 0 0
                     0 0 1 0 0
                     0 0 0 25 -10"
            />
          </filter>
          <linearGradient id="lavaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B1AE5" />
            <stop offset="100%" stopColor="#E1303B" />
          </linearGradient>
        </defs>

        <g filter="url(#gooify)">
          {circleData.map((circle, index) => (
            <circle
              ref={(el) => (blobsRef.current[index] = el)}
              key={circle.r}
              id={`blob-${circle.r}`}
              cx={circle.x}
              cy={circle.y}
              r={circle.r}
              fill="url(#lavaGradient)"
            />
          ))}
        </g>
      </svg>

     {/* Main Content */}
      <div
        ref={contentRef}
        className="w-full h-full px-8 md:px-16 lg:px-24 py-12 flex flex-col justify-center items-center gap-8 md:gap-12 lg:gap-16 relative z-10"
      >
        {/* Header Text */}
        <div className="w-full text-left md:text-left" ref={headerTextRef}>
          {/* Text Block 1 */}
          <span className="w-full text-[#f4f3ff] text-[2rem] leading-[2.5rem] md:text-[3.5rem] md:leading-[4rem] lg:text-[5rem] lg:leading-[6rem] font-display font-normal">
            Crafting spellbinding user experiences that enchant your users & elevate 
          </span>
          {/* Text Block 2 */}
          <span className="font-serif w-full text-[#f4f3ff] text-[2rem] leading-[2.5rem] md:text-[3.5rem] md:leading-[4rem] lg:text-[5rem] lg:leading-[6rem] font-normal pl-2 lg:pl-4">
            your digital presence.
          </span>
        </div>

        {/* Main Content Below Text */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          {/* Studio Description */}
          <div className="w-full flex flex-col justify-start items-start gap-4">
            {/* Description Text */}
            <div className="text-[#f4f3ff] text-lg leading-6 md:text-2xl md:leading-8 lg:text-2xl lg:leading-9 font-medium font-serif">
              gothic moon
              <span className="font-medium font-display pl-2">
                is a digital design studio specializing in product & web design.
              </span>
              <HoverImagePreview 
              className="cursor-pointer"
              items={items} 
              />
            </div>
          </div>

          {/* Social Icons - Left Aligned and Stacked on Smaller Screens */}
          <div className="flex items-start gap-4">
            {['Instagram', 'Dribbble'].map((platform, index) => (
              <div
                key={platform}
                ref={(el) => (socialIconsRef.current[index] = el)}
                className="custom-cursor-area w-9 h-9 flex justify-center items-center relative opacity-0 translate-y-4"
              >
                <a
                  href={platform === 'Instagram' ? 'https://www.instagram.com/gothicmoonstudio' : 'https://dribbble.com/gothicmoonstudio'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300 ease-in-out"
                >
                  {platform === 'Instagram' ? <Instagram className="stroke-1 hover:text-[#F6FFBC]" /> : <Dribbble className="stroke-1 hover:text-[#F6FFBC]" />}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHero;