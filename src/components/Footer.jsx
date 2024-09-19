// src/components/Footer.jsx
import React from 'react';

function Footer() {
  // Generate an array for the bubbles
  const bubbles = Array.from({ length: 50 });

  return (
    <footer className="relative z-10">
      {/* Gooey Effect Filter */}
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="gooey">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 20 -10"
              result="gooey"
            />
            <feComposite
              in="SourceGraphic"
              in2="gooey"
              operator="atop"
            />
          </filter>
        </defs>
      </svg>

      {/* Bubbles Container */}
      <div
        className="absolute inset-0 overflow-hidden bubbles"
        style={{ filter: 'url(#gooey)' }}
      >
        {bubbles.map((_, index) => (
          <div
            key={index}
            className="bubble"
            style={{
              '--size': `${2 + Math.random() * 4}rem`,
              '--distance': `${6 + Math.random() * 4}rem`,
              '--position': `${-5 + Math.random() * 110}%`,
              '--time': `${2 + Math.random() * 2}s`,
              '--delay': `${-1 * (2 + Math.random() * 2)}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Footer Content */}
      <div className="relative z-10 bg-accent text-light p-8">
        <div className="container mx-auto flex flex-col items-center">
          <p className="text-base font-normal font-display">
            ©2024 Gothic Moon Creative Studio LLC
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
