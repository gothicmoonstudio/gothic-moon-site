import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Module from './Module';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const ServiceOverview = () => {
  const moduleWrapperRef = useRef(null); // Ref for the entire module wrapper
  const modulesRef = useRef([]); // Ref for each individual module

  useEffect(() => {
    // Create a timeline for staggered animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: moduleWrapperRef.current,
        start: 'top 40%', // Animation starts when the wrapper is 80% in view
        end: 'bottom 20%',
        toggleActions: 'play none none none', // Plays once when it enters
      },
    });

    // Add each module to the timeline
    modulesRef.current.forEach((module, index) => {
      tl.fromTo(
        module,
        { opacity: 0, x: -50 }, // Initial state (slightly to the left and transparent)
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          delay: index * 0.3, // Stagger the animation for each module
        }
      );
    });
  }, []);

  return (
    <div
      ref={moduleWrapperRef}
      id="service-overview"
      className="w-full min-h-screen flex flex-col items-center gap-16 lg:gap-24 pt-12 sm:pt-16 md:pt-24 lg:pt-28 bg-[#141221]"
    >
      {/* Service Modules */}
      <div ref={(el) => (modulesRef.current[0] = el)} className="w-full">
        <Module
          title="User Research & Testing"
          description="Delve into understanding your target audience's needs, behaviors, and pain points. Our comprehensive user research lays the foundation for informed design decisions, ensuring your product resonates with its intended users."
          items={['User Interviews', 'Analytics', 'A/B Testing', 'User Flows', 'Journey Mapping']}
          bgColor="#141221"
        />
      </div>

      <div ref={(el) => (modulesRef.current[1] = el)} className="w-full">
        <Module
          title="Visual Design"
          description="Create stunning, on-brand visuals that captivate your audience. We craft aesthetically pleasing interfaces that not only look beautiful but also enhance usability and reinforce your brand identity."
          items={['User Interface', 'Design Libraries', 'Style Guides', 'Templates']}
          bgColor="#A06AF8"
        />
      </div>

      <div ref={(el) => (modulesRef.current[2] = el)} className="w-full">
        <Module
          title="Interaction Design"
          description="Develop intuitive and engaging user interactions that guide users seamlessly through your product. Our interaction design focuses on creating smooth, meaningful experiences that delight users and keep them coming back."
          items={['Animations', 'Motion Graphics', 'Front-End Development']}
          bgColor="#141221"
        />
      </div>

      <div ref={(el) => (modulesRef.current[3] = el)} className="w-full">
        <Module
          title="UX & Product Design"
          description="Bring your product vision to life with our end-to-end product design services. We combine user research, visual design, and interaction design to create cohesive, user-centered products that solve real problems and drive business growth."
          items={['Information Architecture', 'Design Strategy', 'Business Analysis', 'Design Systems', 'SEO']}
          bgColor="#A06AF8"
        />
      </div>
    </div>
  );
};

export default ServiceOverview;
