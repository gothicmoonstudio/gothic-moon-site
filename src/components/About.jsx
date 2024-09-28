import React from 'react';
import ProcessSection from './ProcessSection';
import SlideHeader from './SlideHeader';
import ValueCardScroll from './ValueCardScroll';
import Accordion from './Accordion';

const About = () => {
  return (
    <section id="about">

      {/* Greeting Section */}
      <div className="sticky-section w-screen h-screen px-[118px] py-24 bg-[#8A2595] flex justify-center items-center gap-2.5 text-center">
        <SlideHeader 
          text1="Gothic Moon is your trusted guide" 
          text3="for all things design." 
          textSize="6rem" 
          textColor="#f4f3ff"
        />
      </div>

      {/* Introduction Section */}
      <div className="overlay-section w-screen h-screen px-8 md:px-16 lg:px-24 py-12 bg-[#141221] flex justify-between items-center gap-12 z-10">
      <div className="w-1/2 text-left">
          <SlideHeader
            text1="Welcome to "
            text3="gothic moon."
            textSize="7rem"
            textColor="#f4f3ff"
          />
        </div>
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

          {/* Value Prop */}  
        <div className="sticky-section w-screen px-[118px] py-24 bg-[#f6ffbc] flex justify-center items-center gap-12">
          <div className="flex-grow flex flex-col justify-start items-start gap-9">
            <div className="self-stretch text-[#141221] text-[3rem] font-medium font-display leading-[4rem]">
            Tired of cookie-cutter designs that leave your brand feeling 
            <span className="font-serif text-[3rem] pl-2">invisible?</span>
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

      {/* Product Design */}
      <div className="overlay-section w-screen h-screen px-[118px] py-24 text-[#141221] bg-[#e9cdff] flex-col justify-start items-start gap-9 inline-flex">
        {/* Subheader */}
        <div className="w-full text-[#141221] text-xl font-medium font-display uppercase">Product Design Services</div>
        
        {/* Header Section */}
        <div className="w-full">
          <SlideHeader 
            text1="Guiding your website to" 
            text3="unmatched success." 
            textSize="4rem" 
            textColor="#141221"
          />
        </div>

         {/* Main Content Section */}
        <div className="w-screen flex justify-between items-start gap-12">
          {/* Description and Accordion Section (2/3 width) */}
          <div className="w-2/3 flex flex-col gap-6">
            <div className="text-[#141221] text-2xl font-normal font-display leading-9">
              At Gothic Moon, we offer comprehensive product design services that elevate your digital products to new heights. By partnering with Gothic Moon for product design, you'll benefit from our expertise in creating intuitive, user-centered products that drive engagement and satisfaction.
            </div>
            
            {/* Accordion */}
            {/* Accordion */}
              <div className="flex flex-col justify-start items-start gap-2">
                <Accordion
                  textColor="#141221" 
                  accordionData={[
                    { title: 'User Research', content: 'We chart the landscape of your brand, understanding your goals and challenges.' },
                    { title: 'Wireframing & prototyping', content: 'We create interactive prototypes to visualize and test your products functionality.' },
                    { title: 'Usability Testing', content: 'We conduct thorough user testing to ensure your product meets user expectations and business goals.' },
                    { title: 'Iterative Design', content: 'We refine and improve your product based on user feedback and data-driven insights.' }
                  ]} 
                />
              </div>

          </div>

           {/* Service Details (1/3 width) */}
          <div className="w-1/3 flex flex-col justify-start items-start gap-2">
            <div className="text-[#141221] text-xl font-medium font-display leading-9">UX Design</div>
            <div className="text-[#141221] text-xl font-medium font-display leading-9">Visual Design</div>
            <div className="text-[#141221] text-xl font-medium font-display leading-9">User Research & Testing</div>
            <div className="text-[#141221] text-xl font-medium font-display leading-9">Web & Mobile App Design</div>
            <div className="text-[#141221] text-xl font-medium font-display leading-9">Interaction Design</div>
          </div>
        </div>
      </div>

      {/* Web Design */}
    <div className="sticky-section w-screen h-screen px-[118px] py-24 bg-[#141221] flex-col justify-start items-start gap-9 inline-flex">
      {/* Subheader */}
      <div className="w-full text-[#f4f3ff] text-xl font-medium font-display uppercase">Web Design Services</div>
      
      {/* Title */}
      <div className="w-full">
            <SlideHeader 
              text1="Guiding your product to" 
              text3="unmatched success." 
              textSize="4rem" 
              textColor="#f4f3ff"
            />
      </div>
      {/* Main Content Section */}
    <div className="w-screen flex justify-between items-start gap-12">
        {/* Description and Accordion Section (2/3 width) */}
        <div className="w-2/3 flex flex-col gap-6">
          <div className="text-[#f4f3ff] text-2xl font-normal font-display leading-9">
            Gothic Moon's web design services are tailored to create captivating online experiences that resonate with your audience. By choosing Gothic Moon for your web design needs, you'll receive a beautifully crafted, high-performing website that not only looks great but also delivers results for your business.
          </div>

          {/* Accordion */}
          <div className="flex flex-col justify-start items-start gap-2">
          <Accordion 
            textColor="#f4f3ff" 
            accordionData={[
              { title: 'Information Architecture', content: 'We structure your website for optimal user flow and content organization.' },
              { title: 'Visual Design', content: 'We craft stunning, on-brand visuals that capture your unique identity.' },
              { title: 'Responsive Design', content: 'We ensure your website looks and functions flawlessly across all devices.' },
              { title: 'Performance Optimization', content: 'We optimize your site for speed and efficiency, enhancing user experience and SEO.' },
            ]} 
          />
          </div>
        </div>
        
        {/* Service Details (1/3 width) */}
        <div className="w-1/3 flex flex-col justify-start items-start gap-2">
          <div className="text-[#f4f3ff] text-xl font-medium font-display leading-9">UX Design</div>
          <div className="text-[#f4f3ff] text-xl font-medium font-display leading-9">Visual Design</div>
          <div className="text-[#f4f3ff] text-xl font-medium font-display leading-9">User Research & Testing</div>
          <div className="text-[#f4f3ff] text-xl font-medium font-display leading-9">Web & Mobile App Design</div>
          <div className="text-[#f4f3ff] text-xl font-medium font-display leading-9">Interaction Design</div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default About;
