// headerexit.js
import React, { useRef } from 'react';
import OneColumn from '../layouts/OneColumn'; // Ensure the path to your OneColumn component is correct

const HeaderExit = ({ title }) => {
  const textRef = useRef(null);
  const svgRef = useRef(null);
  const circleRef = useRef(null);

  return (
    <OneColumn>
      <header className="relative text-center font-header font-medium max-w-8xl mb-4">
        {/* Container for text with circle mask behind it */}
        <div className="relative inline-block overflow-hidden whitespace-nowrap" ref={textRef}>
          {/* Centered Header Title */}
          <h1 className="inline-block text-[1.5rem] md:text-[3rem] lg:text-[5rem]">
            {title}
          </h1>

          {/* SVG Mask Positioned Behind Text */}
          <svg
            ref={svgRef}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '24rem',
              height: '24rem',
              zIndex: -1, // Ensure it is behind the text
              pointerEvents: 'none', // Prevent interaction with the SVG
            }}
          >
            <defs>
              <mask id="mask">
                <rect width="100%" height="100%" fill="white" />
                {/* Circle Mask with defined size */}
                <circle ref={circleRef} cx="50%" cy="50%" r="12rem" fill="black" />
              </mask>
            </defs>
            {/* Background Layer */}
            <rect width="100%" height="100%" fill="#121212" />
            {/* Mask with Reveal Color */}
            <rect width="100%" height="100%" fill="#F9FFCF" mask="url(#mask)" />
          </svg>
        </div>
      </header>
    </OneColumn>
  );
};

export default HeaderExit;