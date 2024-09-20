import React, { useEffect } from 'react';
import gsap from 'gsap';
import MorphSVGPlugin from '../plugins/MorphSVGPlugin';
import ScrollTrigger from '../plugins/ScrollTrigger';

// Register the GSAP plugins
gsap.registerPlugin(MorphSVGPlugin, ScrollTrigger);

function Blob() {
  useEffect(() => {
    // Morph animation
    gsap.to("#blob1", {
      duration: 5,  // Slower animation
      morphSVG: "#blob2", 
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    });

    // Scroll-based gradient color change
    gsap.to("#blob1", {
      scrollTrigger: {
        trigger: ".about-section",  // The section that should trigger the color change
        start: "top center",  // Start when the top of the section hits the center
        end: "bottom center",  // End when the bottom of the section hits the center
        scrub: true,  // Smooth animation with scroll
      },
      fill: "url(#gradient2)"  // Change the fill to the second gradient on scroll
    });

  }, []);

  return (
    <div className="blob-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 581 612"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* First path with the initial gradient */}
        <path
          id="blob1"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M287.837 2.2674C388.308 12.1501 446.49 110.194 502.246 194.357C549.804 266.147 600.718 349.121 571.212 430.021C543.817 505.132 447.687 513.148 374.356 545.002C307.125 574.207 240.084 633.419 173.489 602.789C106.35 571.908 109.098 481.452 84.6027 411.73C52.6416 320.756 -29.7759 232.613 13.0936 146.242C61.4564 48.8042 179.579 -8.38128 287.837 2.2674Z"
          fill="url(#gradient1)"  // Initial fill with the first gradient
        />
        <path
          id="blob2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M267.901 0.479324C325.981 1.75432 386.108 8.51982 432.331 43.7097C478.016 78.4887 505.059 133.045 516.057 189.399C526.208 241.413 496.79 289.76 490.621 342.396C482.218 414.086 524.996 502.415 473.446 552.939C423.251 602.135 335.036 581.481 267.901 560.682C211.954 543.348 183.997 485.093 137.888 448.977C94.2816 414.821 25.6127 406.907 5.62748 355.247C-14.4598 303.324 24.5013 249.453 40.0136 195.985C56.1861 140.241 54.0872 74.1662 98.1395 36.3735C143.138 -2.23103 208.626 -0.821885 267.901 0.479324Z"
          fill="url(#gradient1)"
          fillOpacity="0"
        />
        <defs>
          {/* First Gradient */}
          <linearGradient id="gradient1" x1="517.344" y1="409.5" x2="-216.737" y2="142.127" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFE9E9" />
            <stop offset="1" stopColor="#A06AF8" />
          </linearGradient>

          {/* Second Gradient (scroll transition to this) */}
          <linearGradient id="gradient2" x1="517.344" y1="409.5" x2="-216.737" y2="142.127" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFE9E9" />
            <stop offset="1" stopColor="#F6FFBC" />
          </linearGradient>

          {/* Third Gradient (Illustration Gradient) */}
          <linearGradient id="gradient3" x1="517.344" y1="409.5" x2="-216.737" y2="142.127" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3B1AE5" />
            <stop offset="1" stopColor="#F6FFBC" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default Blob;
