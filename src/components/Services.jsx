// src/components/Services.jsx
import React, { useEffect, useRef } from 'react';

function Services() {
  const gradientRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const gradient = gradientRef.current;
      if (gradient) {
        const x = (clientX / window.innerWidth) * 100;
        const y = (clientY / window.innerHeight) * 100;
        gradient.style.background = `radial-gradient(at ${x}% ${y}%, #3b1ae5, #f6ffbc)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      id="services"
      data-gradient="true"
      ref={gradientRef}
      className="services gradient w-full min-h-screen text-light flex flex-col justify-center items-center"
    >
      {/* Main Container */}
      <div className=" flex flex-col justify-between items-center">
        
        {/* Header Section */}
        <div className="w-[1276px] flex justify-center items-center gap-2.5">
          <div className="w-[643px] text-center">
            <span className="text-[#f4f3ff] text-[40px] font-normal font-display">
              Lorem ipsum dolor
            </span>
            <span className="text-[#f4f3ff] text-[40px] font-normal font-serif"> sit amet </span>
          </div>
        </div>

        {/* Service Cards Section */}
        <div className="flex justify-center items-center gap-9 mt-12">
          {/* Service Card 1 */}
          <div className="h-[587px] px-9 py-[258px] bg-[#f4f3ff]/10 rounded-lg border-t border-[#3f3a5b] backdrop-blur-[114px] flex flex-col justify-center items-center gap-2.5">
            <div className="flex flex-col justify-start items-center gap-9">
              <div className="text-center text-[#f4f3ff] text-3xl font-semibold font-display">
                Monthly Subscription
              </div>
              <div className="w-[306.67px] text-center text-[#cac1fb] text-lg font-normal font-[Bely] leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eget molestie augue. Class aptent taciti sociosqu ad.
              </div>
              <div className="p-4 bg-[#f4f3ff]/30 rounded-full border border-[#ffe9e9] flex justify-center items-center gap-2.5 cursor-pointer hover:bg-[#f4f3ff]/50 transition duration-300">
                <div className="text-[#f4f3ff] text-lg font-normal font-display">
                  Request Services
                </div>
              </div>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="h-[587px] px-9 py-[258px] bg-[#f4f3ff]/10 rounded-lg border-t border-[#3f3a5b] backdrop-blur-[114px] flex flex-col justify-center items-center gap-2.5">
            <div className="flex flex-col justify-start items-center gap-9">
              <div className="text-center text-[#f4f3ff] text-3xl font-semibold font-display">
                Design Consultations
              </div>
              <div className="w-[306.67px] text-center text-[#cac1fb] text-lg font-normal font-[Bely] leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eget molestie augue. Class aptent taciti sociosqu ad.
              </div>
              <div className="p-4 bg-[#f4f3ff]/30 rounded-full border border-[#ffe9e9] flex justify-center items-center gap-2.5 cursor-pointer hover:bg-[#f4f3ff]/50 transition duration-300">
                <div className="text-[#f4f3ff] text-lg font-normal font-display">
                  Request Services
                </div>
              </div>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="h-[587px] px-9 py-[258px] bg-[#f4f3ff]/10 rounded-lg border-t border-[#3f3a5b] backdrop-blur-[114px] flex flex-col justify-center items-center gap-2.5">
            <div className="flex flex-col justify-start items-center gap-9">
              <div className="text-center text-[#f4f3ff] text-3xl font-semibold font-display">
                Single Project
              </div>
              <div className="w-[306.67px] text-center text-[#cac1fb] text-lg font-normal font-[Bely] leading-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eget molestie augue. Class aptent taciti sociosqu ad.
              </div>
              <div className="p-4 bg-[#f4f3ff]/30 rounded-full border border-[#ffe9e9] flex justify-center items-center gap-2.5 cursor-pointer hover:bg-[#f4f3ff]/50 transition duration-300">
                <div className="text-[#f4f3ff] text-lg font-normal font-display">
                  Request Services
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
