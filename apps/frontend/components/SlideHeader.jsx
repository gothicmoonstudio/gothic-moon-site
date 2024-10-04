import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from '../plugins/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SlideHeader = ({ text1 = "", text2 = "", text3 = "", textColor = '#f4f3ff', whiteSpace = 'normal', className = "" }) => {
  const textRef = useRef([]);

  useEffect(() => {
    // Create a staggered animation for each line of text
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
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play pause play pause',
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className={`w-full h-full ${className}`}>
      {/* Text Block 1 */}
      {text1 && (
        <div className="overflow-hidden">
          <p
            className="font-normal font-display text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[7rem]"
            ref={(el) => (textRef.current[0] = el)}
            style={{ color: textColor, whiteSpace }}
          >
            {text1}
          </p>
        </div>
      )}

      {/* Text Block 2 */}
      {text2 && (
        <div className="overflow-hidden">
          <p
            className="font-normal font-display text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[7rem]"
            ref={(el) => (textRef.current[1] = el)}
            style={{ color: textColor, whiteSpace }}
          >
            {text2}
          </p>
        </div>
      )}

      {/* Text Block 3 */}
      {text3 && (
        <div className="overflow-hidden">
          <p
            className="font-normal font-serif text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[7rem]"
            ref={(el) => (textRef.current[2] = el)}
            style={{ color: textColor, whiteSpace }}
          >
            {text3}
          </p>
        </div>
      )}
    </div>
  );
};

export default SlideHeader;
