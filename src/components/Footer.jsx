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

const Footer = () => {
  const [circleData, setCircleData] = useState([]);

  const generateBlobs = (count) => {
    const blobs = [];
    for (let i = 0; i < count; i++) {
      blobs.push({
        r: Math.random() * 60 + 30, // Slightly smaller blobs for the footer
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        xSpeed: Math.random() * 1 - 0.5,
        ySpeed: Math.random() * 1 - 0.5,
      });
    }
    return blobs;
  };

  useEffect(() => {
    const setBlobsBasedOnViewport = () => {
      const width = window.innerWidth;
      let blobCount = 5; // Default number of blobs

      if (width >= 1200) {
        blobCount = 7; // More blobs for larger screens
      } else if (width >= 768) {
        blobCount = 6; // Medium screen size
      }

      setCircleData(generateBlobs(blobCount));
    };

    const handleResize = debounce(() => {
      setBlobsBasedOnViewport();
    }, 200);

    setBlobsBasedOnViewport();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
        const blobElement = document.getElementById(`footer-blob-${circle.r}`);
        if (blobElement) {
          blobElement.setAttribute('cx', circle.x);
          blobElement.setAttribute('cy', circle.y);
        }
      });
    }, 10);

    return () => clearInterval(intervalId);
  }, [circleData]);

  return (
    <footer className="footer-container relative">
      {/* Metaballs */}
      <svg className="absolute w-full h-full overflow-visible">
        <g filter="url(#blob)">
          {circleData.map((circle) => (
            <circle
              key={circle.r}
              id={`footer-blob-${circle.r}`}
              cx={circle.x}
              cy={circle.y}
              r={circle.r}
              fill="url(#lavaGradient)"
            />
          ))}
        </g>
      </svg>

      {/* Wrapper for footer content */}
      <div className="footer-content-wrapper relative z-10">
        <div className="footer-content">
          <div className="logo-section">
            <img src="/images/full_logo.svg" alt="Gothic Moon logo" className="footer-logo" />
          </div>

          <div className="footer-text-container">
            <div className="footer-text">
              <span className="footer-main-text">We’re brewing something</span>
              <span className="footer-highlight">extraordinary.</span>
            </div>
          </div>
        </div>

        <div className="social-icons gap-6 pb-6">
          <div className="custom-cursor-area flex justify-center items-center relative">
            <a 
              href="https://www.instagram.com/gothicmoonstudio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              <Instagram className="hover:text-[#F6FFBC]" />
            </a>
          </div>
          <div className="custom-cursor-area flex justify-center items-center relative">
            <a 
              href="https://dribbble.com/gothicmoonstudio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300 ease-in-out"
            >
              <Dribbble className="hover:text-[#F6FFBC]" />
            </a>
          </div>
        </div>

        <div className="custom-cursor-area w-full flex justify-between items-start">
          <div>
            <p className="font-display">
              Designed and developed by yours truly —with a little 💻, ☕, and 🪄.
            </p>
          </div>
          <div>
            <p className="font-display">© 2024 Gothic Moon Creative Studio LLC</p>
          </div>
        </div>
      </div>

      {/* SVG filter for gooey effect */}
      <svg style={{ display: 'none' }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            />
          </filter>
          <linearGradient id="lavaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B1AE5" />
            <stop offset="100%" stopColor="#E1303B" />
          </linearGradient>
        </defs>
      </svg>
    </footer>
  );
};

export default Footer;
