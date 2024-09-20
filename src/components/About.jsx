import React from 'react';
import Blob from './Blob';  // Import the Blob component

function About() {
  return (
    <section 
    id="about"
    className="about-section w-full h-screen px-[113px] py-[83px] bg-[#141221] flex justify-between items-center mt-24 gap-4 overflow-visible">
      {/* Blob Animation */}
      <div className="relative w-[500px] h-[530px] flex-shrink-0 overflow-visible">
        <Blob />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-start items-start gap-9 h-auto">
        {/* First Heading */}
        <div className="w-[643px]">
          <span className="text-[#f4f3ff] text-[40px] pr-2 font-medium font-display">
            Your trusted
          </span>
          <span className="text-[#f4f3ff] text-[40px] font-normal font-serif">
            design guide.
          </span>
        </div>

        {/* Paragraphs */}
        <div className="w-[643px] text-[#f4f3ff] text-2xl font-normal font-display leading-[33.67px]">
        My name is Mary Sargent, and I’m a user experience designer with over 6 years of experience in product, UX, and web design. Throughout my career, I’ve specialized in designing enterprise tools for the media and entertainment industries. Now, I’m embarking on a new journey as the founder of my own solo design studio. While Gothic Moon is currently a team of one, I’m always seeking opportunities to collaborate and look forward to growing the studio in the near future.
        </div>
        <div className="w-[643px] text-[#f4f3ff] text-2xl font-normal font-display leading-[33.67px]">
        Welcome to Gothic Moon, your trusted partner for all things design.
        </div>

        {/* Second Heading */}
        <div className="w-[643px]">
          <span className="text-[#f4f3ff] text-[40px] pr-2 font-medium font-display">
            Illuminating the path to
          </span>
          <span className="text-[#f4f3ff] text-[40px] font-normal font-serif">
            exceptional UX design.
          </span>
        </div>

        {/* Additional Paragraphs */}
        <div className="w-[643px] text-[#f4f3ff] text-2xl font-normal font-display leading-[33.67px]">
        Are you tired of generic, cookie-cutter designs that fail to capture your brand’s unique essence? You're not alone. Many businesses face the challenge of finding designers who truly understand their business and product needs, often feeling frustrated by the gap between vision and execution. The struggle to connect with a design studio that doesn’t just deliver something “pretty,” but actually aligns with your goals, values, and long-term growth strategy is all too common.
        </div>
      </div>

      
    </section>
  );
}

export default About
