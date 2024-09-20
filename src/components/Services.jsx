// src/components/Services.jsx
import React, { useEffect, useRef } from 'react';
import SecondaryButton from './ScondaryButton';

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
      <div className=" flex flex-col justify-between mt-24 items-center">
        
        {/* Header Section */}
        <div className="w-[1276px] flex justify-center items-center gap-2.5">
          <div className="w-[643px] text-center">
            <span className="text-[#f4f3ff] text-[40px] font-normal font-display">
              Let us be your
            </span>
            <span className="text-[#f4f3ff] text-[36px] font-normal font-serif"> guiding light </span>
          </div>
        </div>

        {/* Service Cards Section */}
        <div className="flex justify-center items-center gap-9 mt-12">
          {/* Service Card 1 */}
          <div className="h-[587px] px-9 py-[258px] bg-[#f4f3ff]/10 rounded-lg border-t border-[rgba(244,243,255,0.5)] backdrop-blur-[114px] flex flex-col justify-center items-center gap-2.5">
            <div className="flex flex-col justify-start items-center gap-9">
              <div className="text-center text-[#f4f3ff] text-3xl font-semibold font-display">
                Monthly Subscription
              </div>
              <div className="w-[306.67px] text-center text-[#f4f3ff] text-lg font-normal font-[Bely] leading-7">
                Our monthly subscription is perfect for projects needing consistent and adpatable design expertise.
              </div>
              <div>
                <SecondaryButton label="Start Your Subscription" />
              </div>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="h-[587px] px-9 py-[258px] bg-[#f4f3ff]/10 rounded-lg border-t border-[rgba(244,243,255,0.5)] backdrop-blur-[114px] flex flex-col justify-center items-center gap-2.5">
            <div className="flex flex-col justify-start items-center gap-9">
              <div className="text-center text-[#f4f3ff] text-3xl font-semibold font-display">
                Design Consultations
              </div>
              <div className="w-[306.67px] text-center text-[#f4f3ff] text-lg font-normal font-[Bely] leading-7">
                Unlock expert insights and innovative solutions that are designed to offer both guidance and results.
              </div>
              <div>
                <SecondaryButton label="Book a Call" />
              </div>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="h-[587px] px-9 py-[258px] bg-[#f4f3ff]/10 rounded-lg border-t border-[rgba(244,243,255,0.5)] backdrop-blur-[114px] flex flex-col justify-center items-center gap-2.5">
            <div className="flex flex-col justify-start items-center gap-9">
              <div className="text-center text-[#f4f3ff] text-3xl font-semibold font-display">
                Single Project
              </div>
              <div className="w-[306.67px] text-center text-[#f4f3ff] text-lg font-normal font-[Bely] leading-7">
                Ideal for clients seeking to address particular challenges or enhance key areas of their user experience.
              </div>
              <div>
                <SecondaryButton label="Get a Quote" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
