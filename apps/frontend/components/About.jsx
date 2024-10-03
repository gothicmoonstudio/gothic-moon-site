import React from 'react';
import SlideHeader from './SlideHeader';
import ValueCardScroll from './ValueCardScroll';
import AnimatedText from './AnimatedText';
import ServiceOverview from './ServiceOverview';

const About = () => {
  return (
    <section id="about">

      {/* Greeting Section */}
      <div className="sticky-section w-screen h-screen px-8 md:px-16 lg:px-24 py-12 bg-[#8A2595] flex justify-center items-center text-center">
      <div className="w-full">
        <SlideHeader
          text1="Gothic Moon is your trusted guide"
          text3="for all things design."
          textColor="#f4f3ff"
        />
      </div>
      </div>

      {/* Introduction Section */}
        <div className="overlay-section w-screen h-screen px-8 md:px-16 lg:px-24 py-12 bg-[#141221] flex justify-center items-center z-10">
        {/* Responsive Grid Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column for the SlideHeader */}
          <div className="md:h-full flex justify-start items-start">
            <SlideHeader
              text1="Welcome to "
              text3="gothic moon."
              textSize="7rem"
              textColor="#f4f3ff"
            />
          </div>
          
          {/* Right Column for the Animated Text */}
          <div className="flex flex-col justify-start items-start gap-6">
            <AnimatedText
              text="Navigating the intricate world of user experience design can be a daunting task. That's where Gothic Moon comes in. As your trusted UX compass, we'll guide you through the complex terrain, ensuring your digital presence shines bright."
              className="w-full text-[#f4f3ff] text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-normal font-display leading-[2.5rem]"
              stagger={0.3} // Set the stagger value for line animation
            />
            <AnimatedText
              text="I'm Mary Sargent, a seasoned UX designer with over six years of experience crafting engaging and intuitive digital products. My expertise lies in designing enterprise tools for the media and entertainment industries, where attention to detail and user-centricity are paramount."
              className="w-full text-[#f4f3ff] text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-normal font-display leading-[2.5rem]"
              delay={0.2}
              stagger={0.3}
            />
            <AnimatedText
              text="Let's embark on a journey together to create exceptional user experiences. Welcome to Gothic Moon."
              className="w-full text-[#f4f3ff] text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-normal font-display leading-[2.5rem]"
              delay={0.4}
              stagger={0.3}
            />
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <div className="overlay-section w-screen h-screen px-8 md:px-16 lg:px-24 py-12 bg-[#141221] flex justify-center items-center text-center">
          <div className="w-full">
            <SlideHeader 
              text1="Illuminating your path to" 
              text3="ux & web design." 
              textSize="7rem" 
              textColor="#f4f3ff"
            />
        </div>
      </div>

      {/* Value Prop */}  
      <div className="overlay-section w-screen min-h-screen px-8 md:px-16 lg:px-24 py-12 bg-[#f6ffbc] flex justify-center items-center z-10">
      {/* Responsive Grid Layout */}
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column for Text */}
        <div className="w-full h-full flex flex-col justify-center items-center gap-4">
          <div>
            <AnimatedText
              text="Tired of cookie-cutter designs that leave your brand feeling invisible."
              className="w-full text-[#141221] text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-medium font-display leading-[4.5rem]"
              stagger={0.3} // Set the stagger value for line animation
            />
          </div>
          <div>
            <AnimatedText
              text="At Gothic Moon, we do more than just design. We're strategic partners dedicated to crafting digital experiences that not only look stunning but also resonate deeply with your brand's essence. Let's break free from the ordinary and create something truly extraordinary together."
              className="w-full text-[#141221] text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-medium font-display leading-[2.5rem]"
              delay={0.2}
              stagger={0.3}
            />
          </div>
        </div>

        {/* Right Column for the ValueCardScroll */}
        <div className="flex justify-center items-center">
          <div className="flex items-center justify-center">
            <div className="">
              <ValueCardScroll />
            </div>
          </div>
        </div>
      </div>
    </div>

       {/* Other Sections */}
       <div className="overlay-section w-screen h-screen px-8 md:px-16 lg:px-24 py-12 bg-[#141221] flex justify-center items-center text-center">
          <div className="w-full">
            <SlideHeader 
              text1="Guiding your path to" 
              text3="design excellence." 
              textSize="7rem" 
              textColor="#f4f3ff"
            />
        </div>
      </div>

      {/* Service Overview */}
      <div className="sticky-section w-screen h-full">
       <ServiceOverview />
       </div>
  </section>
  );
};

export default About;
