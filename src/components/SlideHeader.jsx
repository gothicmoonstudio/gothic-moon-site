import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Corrected path

gsap.registerPlugin(ScrollTrigger);

const SlideHeader = ({ text1, text2, text3, textSize, textColor, whiteSpace }) => {
  const textRef = useRef([]);

  useEffect(() => {
    const animation = gsap.fromTo(
      textRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%', // Animation starts when the text is 80% into the viewport
          end: 'bottom 20%',
          toggleActions: 'play pause play pause', 
        },
      }
    );

    // Cleanup the animation on component unmount
    return () => {
      animation.kill(); // Kill only this animation and its ScrollTrigger
    };
  }, []);

  return (
    <div className="w-full h-full">
      <div className="overflow-hidden">
        <p
          className="text-[#f4f3ff] font-normal font-display"
          ref={(el) => (textRef.current[0] = el)}
          style={{ fontSize: textSize, color: textColor, whiteSpace: whiteSpace  }}
        >
          {text1} {/* Ensure this is not left empty */}
        </p>
      </div>
      <div className="overflow-hidden">
        <p
          className="text-[#f4f3ff] font-normal font-display"
          ref={(el) => (textRef.current[1] = el)}
          style={{ fontSize: textSize, color: textColor, whiteSpace: whiteSpace  }}
        >
          {text2}
        </p>
      </div>
      <div className="overflow-hidden">
        <p
          className="text-[#f4f3ff] font-normal font-serif"
          ref={(el) => (textRef.current[2] = el)}
          style={{ fontSize: textSize, color: textColor, whiteSpace: whiteSpace }}
        >
          {text3}
        </p>
      </div>
    </div>
  );
};

export default SlideHeader;
