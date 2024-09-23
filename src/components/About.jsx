import React from 'react';
import ProcessSection from './ProcessSection';
import AnimatedHeader from './AnimatedHeader';
import ValueCardScroll from './ValueCardScroll';

const About = () => {
  return (
    <section id="about">
      {/* Greeting Section */}
      <div className="sticky-section w-screen h-screen px-[118px] py-24 bg-[#9747ff] flex justify-center items-center gap-2.5 text-center">
        <AnimatedHeader 
          text1="Gothic Moon is Your Trusted Guide" 
          text3="For All Things Design." 
          textSize="4.5rem" 
          textColor="#f4f3ff"
        />
      </div>

      {/* Introduction Section */}
      <div className="overlay-section w-screen h-screen px-8 md:px-16 lg:px-24 py-12 bg-[#141221] flex justify-between items-center gap-12 z-10">
        <div className="w-1/2 flex flex-col justify-start items-start gap-6">
          <div className="w-full text-[#f4f3ff] text-lg md:text-xl lg:text-2xl font-normal font-display leading-[33.67px]">
            My name is Mary Sargent, and I’m a product designer with over 6 years of experience in product, UX, and web design. Throughout my career, I’ve specialized in designing enterprise tools for the media and entertainment industries. Now, I’m embarking on a new journey as the founder of my own solo design studio. While Gothic Moon is currently a team of one, I’m always seeking opportunities to collaborate and look forward to growing the studio in the near future.
          </div>
          <div className="w-full text-[#f4f3ff] text-lg md:text-xl lg:text-2xl font-normal font-display leading-[33.67px]">
            Welcome to Gothic Moon, your trusted partner for all things design.
          </div>
        </div>

        <div className="w-1/2 text-left">
          <AnimatedHeader
            text1="Welcome to"
            text3="Gothic Moon."
            textSize="9rem"
            textColor="#f4f3ff"
          />
        </div>
      </div>

      {/* Other Sections */}
      <div className="overlay-section w-screen h-screen px-[118px] py-24 bg-[#141221] flex justify-center items-center gap-12">
        <div className="w-1/2 flex flex-col justify-center items-start gap-6">
          <div className="text-[#f4f3ff] text-3xl font-medium"></div>
          <div>
            <AnimatedHeader 
              text1="Illuminating your path to" 
              text3="ux & web design." 
              textSize="7rem" 
              textColor="#f4f3ff"
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-start items-start gap-9">
          <div className="text-[#f4f3ff] font-display text-2xl font-normal leading-[33.67px]">
            Are you tired of generic, cookie-cutter designs that fail to capture your brand’s unique essence? You're not alone. Many businesses face the challenge of finding designers who truly understand their business and product needs, often feeling frustrated by the gap between vision and execution. The struggle to connect with a design studio that doesn’t just deliver something “pretty,” but actually aligns with your goals, values, and long-term growth strategy is all too common.
          </div>
          <div className="text-[#f4f3ff] font-display text-2xl font-normal leading-[33.67px]">
          At Gothic Moon, we understand these pain points. We’re not just here to create designs that look good—we’re here to be your strategic partner in crafting a digital experience that feels authentic to your brand and delivers results.
          </div>
          <div className="text-[#f4f3ff] font-display text-2xl font-normal leading-[33.67px]">
            At Gothic Moon Studio, we offer personalized service, quality craftmanship, strategic expertise, customer-centric approach, seamless experience.
          </div>
          </div>  
        </div>

        <div className="sticky-section bg-[#F6FFBC] w-screen snap-x h-screen flex justify-center items-center gap-12 px-[118px]">
          <div className="w-1/2">
            <h1 className="text-[#141221] text-[6rem] font-normal font-display">
              Lorem ipsum dolor
              <span className="font-normal font-serif"> sit amet</span>
            </h1>
          </div>
          <div className="w-[820px] h-[686px] rounded-2xl flex items-center justify-center">
            <div className="text-2xl">
              <ValueCardScroll />
            </div>
          </div>
        </div>

      <div className="sticky-section w-screen h-screen px-[118px] py-[333px] bg-[#e9cdff] flex justify-between items-center">
        <div className="w-1/2">
          <AnimatedHeader 
            text1="Guiding your next project to" 
            text3="unmatched UX success." 
            textSize="6rem" 
            textColor="#141221"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-start items-start gap-9">
          <div className="text-[#141221] text-2xl font-normal leading-[33.67px]">
            We believe in a meticulous and collaborative approach to design. Our process is designed to ensure that every project we undertake not only meets but exceeds your expectations.
          </div>
          <div className="text-[#141221] text-2xl font-normal leading-[33.67px]">
            Our design process is like crafting a detailed blueprint for your digital success. We map out every step of the journey, ensuring no detail is overlooked:
          </div>
        </div>
      </div>

      <div className="overlay-section">
        <ProcessSection />
      </div>

      <div className="overlay-section w-screen h-screen relative bg-gradient-to-l from-[#ffe9e9] to-[#a06af8]">
        {/* Static Content */}
        <div className="absolute left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%] flex flex-col justify-center items-center gap-9 z-10">
          <div className="w-[643px] text-center">
            <span className="text-[#141221] text-[3rem] font-medium font-display">I'm committed to manifesting</span>
            <span className="text-[#141221] text-[3rem] font-normal font-display"> </span>
            <span className="text-[#141221] text-[3rem] font-normal font-serif">your vision & success.</span>
          </div>
          <div className="w-[643px] text-center text-[#141221] text-2xl font-normal leading-[33.67px] font-display">
            With Gothic Moon as your guide, you'll have a clear map to navigate the complex terrain of user experience design, ensuring your digital presence stands out in the vast online landscape.
          </div>
        </div>
      </div>
  </section>
  );
};

export default About;
