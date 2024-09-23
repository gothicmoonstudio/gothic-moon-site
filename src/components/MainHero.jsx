import React, { useEffect, useState } from 'react';
import { Instagram, Dribbble } from 'react-feather';

// Debounce function to limit how often a function is called
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

function MainHero() {
  const [circleData, setCircleData] = useState([]);

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

  useEffect(() => {
    const setBlobsBasedOnViewport = () => {
      const width = window.innerWidth;
      let blobCount = 5; // Default to small screens

      // Adjust number of blobs based on screen width
      if (width >= 1200) {
        blobCount = 10; // Large screens
      } else if (width >= 768) {
        blobCount = 7; // Medium screens
      }

      setCircleData(generateBlobs(blobCount));
    };

    // Debounced version of the resize handler
    const handleResize = debounce(() => {
      setBlobsBasedOnViewport();
    }, 200);

    // Set initial blobs based on current viewport size
    setBlobsBasedOnViewport();

    // Update blobs when window is resized
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const updatePosition = (circle, bounds) => {
      // Update blob position and handle screen bounds
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

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [circleData]);

  return (
    <section
      id="main-hero"
      className="relative w-full min-h-screen bg-secondary flex flex-col items-center justify-center overflow-hidden"
    >
      {/* SVG Metaballs */}
      <svg className="absolute w-full h-full overflow-hidden">
        <defs>
          {/* Gooey Filter */}
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
          {/* Gradient */}
          <linearGradient id="lavaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B1AE5" />
            <stop offset="100%" stopColor="#E1303B" />
          </linearGradient>
        </defs>

        <g filter="url(#gooify)">
          {circleData.map((circle) => (
            <circle
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
      <div className="w-full h-62 px-28 flex flex-col items-center gap-9 relative z-10">
        <div className="text-center">
          <span className="text-light text-[5.5rem] font-medium font-display leading-tight">
          Brewing spellbinding user experiences that enchant your users & elevates your {' '}
          </span>
          <span className="text-light text-[5.5rem] font-normal font-serif leading-tight">
            digital presence
          </span>
          <span className="text-light text-[5.5rem] font-normal font-display leading-tight">
            .
          </span>
        </div>
        <div className="flex justify-center items-center gap-9">
          <div className="custom-cursor-area w-9 h-9 flex justify-center items-center relative">
            <a 
              href="https://www.instagram.com/gothicmoonstudio" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              <Instagram className="hover:text-[#E1306C]" />
            </a>
          </div>
          <div className="custom-cursor-area w-9 h-9 flex justify-center items-center relative">
            <a 
              href="https://dribbble.com/gothicmoonstudio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              <Dribbble className="hover:text-[#E1306C]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainHero;
