import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function LogoAnimation() {
  const outerRef = useRef(null);

  useEffect(() => {
    // Create the rotation animation
    const rotationAnimation = gsap.to(outerRef.current, {
      rotation: 360,
      repeat: -1,
      duration: 10,
      ease: "linear",
      transformOrigin: "50% 50%",
    });

    // Cleanup function to kill the animation when unmounting
    return () => {
      rotationAnimation.kill(); // Stops the animation
    };
  }, []);

  return (
    <div className="w-[54px] h-[54px] relative">
      <div 
        id="outer-group"
        ref={outerRef}
        className="absolute left-0 top-0 w-full h-full flex justify-center items-center"
      >
        <img
          src="/images/outer-logo.svg"
          alt="Outer Logo"
          className="w-full h-full object-contain"
        />
      </div>

      <div 
        id="inner-group"
        className="absolute left-[20.50px] top-[20.84px] w-[12.92px] h-[12.56px] flex justify-center items-center"
      >
        <img
          src="/images/inner-logo.svg"
          alt="Inner Logo"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

export default LogoAnimation;