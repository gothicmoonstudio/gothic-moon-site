import React, { useEffect, useState } from 'react';
import { Instagram, Dribbble } from 'react-feather';

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
        r: Math.random() * 60 + 30,
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
      let blobCount = 5;

      if (width >= 1200) {
        blobCount = 7;
      } else if (width >= 768) {
        blobCount = 6;
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
    <footer className="footer-container w-screen h-1/3 px-24 py-16 relative text-gray-800 bg-[#141221]">
      {/* Metaballs */}
      <svg className="absolute overflow-visible">
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

      {/* Footer Content Wrapper */}
      <div className="footer-content-wrapper w-full h-full  max-w-8xl flex flex-col md:flex-row justify-between items-start md:items-center relative z-10 gap-8 md:gap-0">
        {/* Column 1 - Left Section */}
        <div className="left-section flex flex-col items-start w-full md:w-1/2 gap-9 md:gap-12">
          {/* Logo Section */}
          <div className="logo-section mb-6 md:mb-0">
            <img
              src="/images/full_logo.svg"
              alt="Gothic Moon logo"
              className="footer-logo w-36"
            />
          </div>

          {/* Social Icons */}
          <div className="social-icons flex space-x-6 mb-6 md:mb-0">
            <div className="social-icon">
              <a
                href="https://www.instagram.com/gothicmoonstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300 ease-in-out text-[#f4f3ff] hover:text-[#F6FFBC]"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <div className="social-icon">
              <a
                href="https://dribbble.com/gothicmoonstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300 ease-in-out text-[#f4f3ff] hover:text-[#F6FFBC]"
              >
                <Dribbble className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Signature Text */}
          <div className="signature-text text-base text-[#f4f3ff] font-normal font-display">
            Designed and developed by me — with a little 💻, ☕, and AI magic 🪄
          </div>
        </div>

        {/* Column 2 - Right Section */}
        <div className="right-section flex flex-col items-start md:items-end w-full md:w-1/2 text-left md:text-right">
          <div className="flex flex-col justify-between gap-12 md:gap-24">
            {/* Tagline */}
            <div className="tagline text-[#f4f3ff] text-lg">
              <span className="font-semibold font-display">We’re brewing something</span>
              <span className="font-normal font-serif"> extraordinary.</span>
            </div>

            {/* Legal Text */}
            <div className="flex flex-wrap items-center justify-start md:justify-end gap-4">
              <div className="legal-text text-base text-[#f4f3ff] font-normal font-display">
                Privacy Policy
              </div>
              <div className="legal-text text-base text-[#f4f3ff] font-normal font-display">
                Terms & Conditions
              </div>
              <div className="legal-text text-base text-[#f4f3ff] font-normal font-display">
                © 2024 Gothic Moon Creative Studio LLC
              </div>
            </div>
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
