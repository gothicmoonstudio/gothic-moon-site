import React from 'react';
import ProcessSection from './ProcessSection';
import SlideHeader from './SlideHeader';
import ValueCardScroll from './ValueCardScroll';
import Accordion from './Accordion';

const About = () => {
  return (
    <section id="about">
      {/* Greeting Section */}
      <div className="sticky-section w-screen h-screen px-[118px] py-24 bg-[#9747ff] flex justify-center items-center gap-2.5 text-center">
        <SlideHeader 
          text1="Gothic Moon is Your Trusted Guide" 
          text3="For All Things Design." 
          textSize="6rem" 
          textColor="#f4f3ff"
        />
      </div>

      {/* Introduction Section */}
      <div className="overlay-section w-screen h-screen px-8 md:px-16 lg:px-24 py-12 bg-[#141221] flex justify-between items-center gap-12 z-10">
        <div className="w-1/2 flex flex-col justify-start items-start gap-6">
          <div className="w-full text-[#f4f3ff] text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-normal font-display leading-[2.5rem]">
            Navigating the intricate world of user experience design can be a daunting task. That's where Gothic Moon comes in. As your trusted UX compass, we'll guide you through the complex terrain, ensuring your digital presence shines bright.
          </div>
          <div className="w-full text-[#f4f3ff] text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-normal font-display leading-[2.5rem]">
            I'm Mary Sargent, a seasoned UX designer with over six years of experience crafting engaging and intuitive digital products. My expertise lies in designing enterprise tools for the media and entertainment industries, where attention to detail and user-centricity are paramount.
          <div/>
          </div>
          <div className="w-full text-[#f4f3ff] text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-normal font-display leading-[2.5rem]">
            Let's embark on a journey together to create exceptional user experiences. Welcome to Gothic Moon.          
          </div>
        </div>

        <div className="w-1/2 text-left">
          <SlideHeader
            text1="Welcome to"
            text3="Gothic Moon."
            textSize="8rem"
            textColor="#f4f3ff"
          />
        </div>
      </div>

      {/* Other Sections */}
      <div className="overlay-section w-screen h-screen px-[118px] py-24 bg-[#141221] flex justify-center items-center text-center gap-12">
        <div className="w-full flex flex-col justify-center items-center gap-6">
          <div className="text-[#f4f3ff] font-medium"></div>
          <div>
            <SlideHeader 
              text1="Illuminating your path to" 
              text3="ux & web design." 
              textSize="7rem" 
              textColor="#f4f3ff"
            />
          </div>
        </div>
      </div>

        <div className="sticky-section w-screen px-[118px] py-24 bg-[#f6ffbc] flex justify-center items-center gap-12">
          <div className="flex-grow flex flex-col justify-start items-start gap-9">
            <div className="self-stretch text-[#141221] text-[1.75rem] font-bold font-display leading-[42px]">
            Tired of cookie-cutter designs that leave your brand feeling invisible?
            </div>
            <div className="self-stretch text-[#141221] text-[1.5rem] font-medium font-display leading-[42px]">
            At Gothic Moon, we do more than just design. We're strategic partners dedicated to crafting digital experiences that not only look stunning but also resonate deeply with your brand's essence. Let's break free from the ordinary and create something truly extraordinary together.
            </div>
          </div>
          <div className="w-[820px] h-[686px] rounded-2xl flex items-center justify-center">
            <div className="text-2xl">
              <ValueCardScroll />
            </div>
          </div>
        </div>

      <div className="overlay-section w-screen h-screen px-[118px] py-[333px] bg-[#e9cdff] flex justify-between items-center">
        <div className="w-1/2">
          <SlideHeader 
            text1="Guiding your next project to" 
            text3="unmatched UX success." 
            textSize="6rem" 
            textColor="#141221"
          />
        </div>
        
        {/* Accordion Section */}
      <div className="w-[629px] flex flex-col justify-start items-center gap-9 mt-9 ">
        {/* Paragraphs */}
        <div className="self-stretch text-[#141221] text-2xl font-medium font-display leading-[48px]">
          We believe in a meticulous and collaborative approach to design. We map out every step of the journey, ensuring no detail is overlooked.
        </div>
        <Accordion />
      </div>
    </div>
  </section>
  );
};

export default About;
