import React, { useEffect, useState, useRef } from 'react';
import { Instagram, Dribbble } from 'react-feather';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
  useEffect(() => {
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

  // Update blob positions on interval
  useEffect(() => {
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

    const intervalId = setInterval(() => {
      circleData.forEach((circle) => {
        updatePosition(circle, bounds);
        const blobElement = document.getElementById(`blob-${circle.r}`);
        if (blobElement) {
          blobElement.setAttribute('cx', circle.x);
          blobElement.setAttribute('cy', circle.y);
        }
      });
    }, 10);

    return () => clearInterval(intervalId);
  }, [circleData]);

  // Initial Animation Setup
  useEffect(() => {
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
              gsap.to(navbarRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
              });
            },
          });
        },
      }
    );

    // Blobs Entrance Animation
    blobsRef.current.forEach((blob, index) => {
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
    });

    return () => {
      gsap.killTweensOf(headerTextRef.current.children);
      gsap.killTweensOf(socialIconsRef.current);
      gsap.killTweensOf(navbarRef.current);
      blobsRef.current.forEach((blob) => gsap.killTweensOf(blob));
    };
  }, []);

  return (
    <section id="main-hero" className="relative w-full min-h-screen bg-secondary flex flex-col items-center justify-center overflow-visible">
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
      <div ref={contentRef} className="w-full h-screen px-28 pt-28 flex flex-col justify-center items-center gap-16 relative z-10">
        <div className="text-left" ref={headerTextRef}>
          <span className="block text-[#f4f3ff] text-[5rem] font-normal font-display leading-[6rem]">
            Crafting spellbinding user experiences that enchant your users & elevate
          </span>
          <span className="block text-[#f4f3ff] text-[5rem] font-normal font-serif leading-[6rem] pl-4">
            your digital presence.
          </span>
        </div>

        <div className="justify-between items-center w-full">
          {/* Studio Description */}
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <div className="text-[#f4f3ff] text-2xl font-medium font-serif">
              gothic moon
              <span className="font-medium font-display pl-2">
                is a digital design studio specializing in product & web design.
              </span>
            </div>
            <div className="justify-center items-center inline-flex">
              <div>
                <HoverImagePreview items={items} />
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="pt-12 flex items-start gap-4">
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
                  {platform === 'Instagram' ? <Instagram className="hover:text-[#F6FFBC]" /> : <Dribbble className="hover:text-[#F6FFBC]" />}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav ref={navbarRef} className="fixed top-0 w-full opacity-0 translate-y-4 flex justify-center items-center z-50">
        {/* Navbar content here */}
      </nav>
    </section>
  );
};

export default MainHero;
