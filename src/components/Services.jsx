// Services.jsx
import React, { useEffect, useRef } from 'react';
import ServiceCard from './ServiceCard';
import Magic from "../assets/animations/icons8-magic.json";
import Sparkles from "../assets/animations/icons8-sparkles.json";
import Potions from "../assets/animations/icons8-mana.json";

function Services() {
  const gradientRef = useRef(null);

  useEffect(() => {
    // Set up gradient animation on mouse move
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const gradient = gradientRef.current;
      if (gradient) {
        const x = (clientX / window.innerWidth) * 100;
        const y = (clientY / window.innerHeight) * 100;
        gradient.style.background = `radial-gradient(at ${x}% ${y}%, #3b1ae5, #8A2595)`;
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
      className="services gradient w-screen min-h-screen flex flex-col justify-center items-center px-4 md:px-12 lg:px-24 py-16"
    >
      {/* Main Container */}
      <div className="flex flex-col justify-between items-center gap-4 md:gap-4 lg:gap-4 mt-16 md:mt-16 lg:mt-24 w-full">
        
        {/* Header Section */}
        <div className="w-full md:w-auto flex justify-center items-center text-center">
          <div className="text-center">
            <span className="text-[#f4f3ff] text-[1.75rem] md:text-[2.25rem] lg:text-[2.5rem] font-medium font-display">
              Let Gothic be your
            </span>
            <span className="text-[#f4f3ff] text-[1.75rem] md:text-[2.25rem] lg:text-[2.5rem] font-normal font-serif"> design guide.</span>
          </div>
        </div>

        {/* Service Cards Section */}
        <div className="md:mt-16 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 justify-items-center items-center gap-4 md:gap-6 lg:gap-8" >
          {/* Service Card 1 */}
          <ServiceCard
            animationData={Magic}
            title="Monthly Subscription"
            description="Our monthly subscription is perfect for projects needing consistent and adaptable design expertise."
            buttonLabel="Subscribe"
          />

          {/* Service Card 2 */}
          <ServiceCard
            animationData={Sparkles}
            title="Design Consultations"
            description="Unlock expert insights and innovative solutions that are designed to offer both guidance and results."
            buttonLabel="Book a Call"
            buttonLink="https://calendly.com/mary-gothicmoon/30min"
          />

          {/* Service Card 3 */}
          <ServiceCard
            animationData={Potions}
            title="Single Project"
            description="Ideal for clients seeking to address particular challenges or enhance key areas of their user experience."
            buttonLabel="Get a Quote"
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
