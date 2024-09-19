// src/components/Services.jsx
import React, { useEffect, useRef } from 'react';

function Services() {
    
    useEffect(() => {
        const handleMouseMove = (e) => {
          const { clientX, clientY } = e;
          const gradient = document.getElementById('gradient');
          const x = (clientX / window.innerWidth) * 100;
          const y = (clientY / window.innerHeight) * 100;
          gradient.style.background = `radial-gradient(at ${x}% ${y}%, #3b1ae5, #f6ffbc)`;
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);

  return (
    <section id="services" className="w-full min-h-screen text-light" id="gradient">
      <div className="container mx-auto py-20">
        <div className="w-[643px] text-center">
          <span className="text-light text-[40px] font-medium font-display">
            Lorem ipsum dolor
          </span>
          <span className="text-light text-[40px] font-normal font-display">
            {' '}
          </span>
          <span className="text-light text-[40px] font-normal font-serif">
            sit amet
          </span>
        </div>
      </div>
      <div className="flex items-center gap-9">
        {/* Service Card 1 */}
        <div className="h-[587px] px-9 py-64 bg-light/10 rounded-lg border-t border-dark backdrop-blur-[114px] flex flex-col items-center gap-2.5">
          <div className="flex flex-col items-center gap-9">
            <div className="text-center text-light text-3xl font-semibold font-display">
              Monthly Subscription
            </div>
            <div className="w-[306.67px] text-center text-[#cac1fb] text-lg font-normal leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              eget molestie augue. Class aptent taciti sociosqu ad.
            </div>
            <div className="p-4 bg-light/30 rounded-full border border-[#ffe9e9] flex items-center">
              <div className="text-light text-lg font-normal font-sans">
                Request Services
              </div>
            </div>
          </div>
        </div>
        <div className="h-[587px] px-9 py-64 bg-light/10 rounded-lg border-t border-dark backdrop-blur-[114px] flex flex-col items-center gap-2.5">
          <div className="flex flex-col items-center gap-9">
            <div className="text-center text-light text-3xl font-semibold font-display">
              Design Consultation
            </div>
            <div className="w-[306.67px] text-center text-[#cac1fb] text-lg font-normal leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              eget molestie augue. Class aptent taciti sociosqu ad.
            </div>
            <div className="p-4 bg-light/30 rounded-full border border-[#ffe9e9] flex items-center">
              <div className="text-light text-lg font-normal font-sans">
                Request Services
              </div>
            </div>
          </div>
        </div>
        <div className="h-[587px] px-9 py-64 bg-light/10 rounded-lg border-t border-dark backdrop-blur-[114px] flex flex-col items-center gap-2.5">
          <div className="flex flex-col items-center gap-9">
            <div className="text-center text-light text-3xl font-semibold font-display">
              Single Pro
            </div>
            <div className="w-[306.67px] text-center text-[#cac1fb] text-lg font-normal leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              eget molestie augue. Class aptent taciti sociosqu ad.
            </div>
            <div className="p-4 bg-light/30 rounded-full border border-[#ffe9e9] flex items-center">
              <div className="text-light text-lg font-normal font-sans">
                Request Services
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Services;
