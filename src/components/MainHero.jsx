import React, { useEffect } from 'react';
import { Instagram, Dribbble } from 'react-feather';

function MainHero() {
  useEffect(() => {
    const blobs = document.querySelectorAll('.blob');

    blobs.forEach(blob => {
      let isDragging = false;
      let startX, startY, initialX, initialY;

      blob.addEventListener('pointerdown', (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        initialX = parseFloat(getComputedStyle(blob).left);
        initialY = parseFloat(getComputedStyle(blob).top);

        // Ensure the blob can be dragged even outside the blob's bounding box
        blob.setPointerCapture(e.pointerId);
      });

      blob.addEventListener('pointermove', (e) => {
        if (!isDragging) return;

        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        blob.style.left = `${initialX + dx}px`;
        blob.style.top = `${initialY + dy}px`;
      });

      blob.addEventListener('pointerup', (e) => {
        isDragging = false;
        blob.releasePointerCapture(e.pointerId);
      });
    });
  }, []);

  return (
    <section
      id="main-hero"
      className="relative w-full min-h-screen bg-secondary flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Gooey filter for smooth merging */}
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="gooey-effect">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Blobs with movement */}
      <div className="blobs-container" style={{ filter: 'url("#gooey-effect")' }}>
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        <div className="blob blob-4"></div>
        <div className="blob blob-5"></div>
      </div>

      {/* Main Content */}
      <div className="w-full h-62 px-28 flex flex-col items-center gap-9 relative z-10">
        <div className="text-center">
          <span className="text-light text-[5.5rem] font-medium font-display leading-tight">
            Crafting spellbinding user experiences that enchant your users & elevate your {' '}
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
