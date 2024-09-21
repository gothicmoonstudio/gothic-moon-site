import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function LogoAnimation() {
  const outerRef = useRef(null);

  useEffect(() => {
    // Rotate the outer SVG continuously
    gsap.to(outerRef.current, {
      rotation: 360,
      repeat: -1,
      duration: 12,
      ease: "linear",
      transformOrigin: "50% 50%" // Ensure the rotation is from the center
    });
  }, []);

  return (
    <div className="w-[54px] h-[54px] relative">
      {/* Outer Group */}
      <div className="w-[54px] h-[54px] left-0 top-0 absolute justify-center items-center inline-flex" ref={outerRef}>
        <img
          src="/images/outer-logo.svg"
          alt="Outer Logo"
          className="w-full h-full"
        />
      </div>

      {/* Inner Group */}
      <div className="w-[12.92px] h-[12.56px] left-[20.50px] top-[20.84px] absolute justify-center items-center inline-flex">
        <img
          src="/images/inner-logo.svg"
          alt="Inner Logo"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

export default LogoAnimation;
