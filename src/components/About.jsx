import React from 'react';
import { motion } from 'framer-motion';
import SlideImage from '/images/1.svg';
import ValueCardScroll from './ValueCardScroll';
import AnimatedHeader from './AnimatedHeader';

const About = () => {
  return (
    <div id="about">
      <div className="w-screen h-screen px-[118px] py-24 bg-[#9747ff] flex justify-center items-center gap-2.5 text-center">
        <AnimatedHeader 
          text1="Lorem ipsum dolor" 
          text3="sit amet" 
          textSize="7.5rem" 
          textColor="#f4f3ff"
        />
      </div>

      <motion.div
        className="w-screen h-screen px-8 md:px-16 lg:px-24 py-12 bg-[#141221] flex justify-center items-center gap-12 z-10"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <div className="w-1/2 max-w-xl flex flex-col justify-start items-start gap-6">
          <div className="w-full text-[#f4f3ff] text-lg md:text-xl lg:text-2xl font-normal font-display leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget molestie augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam aliquam id libero faucibus vulputate.
          </div>
          <div className="w-full text-[#f4f3ff] text-lg md:text-xl lg:text-2xl font-normal font-display leading-relaxed">
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </div>
        </div>

        <div className="w-1/2 text-left">
          <AnimatedHeader
            text1="Lorem ipsum dolor"
            text3="sit amet"
            textSize="7.5rem"
            textColor="#f4f3ff"
          />
        </div>
      </motion.div>

      <div className="w-screen h-screen px-[118px] py-24 bg-[#141221] flex justify-center items-center gap-12">
        <div className="w-1/2 flex flex-col justify-center items-start gap-6">
          <div className="text-[#f4f3ff] text-3xl font-medium">Lorem ipsum dolor.</div>
          <div>
            <AnimatedHeader 
              text1="Lorem ipsum dolor" 
              text3="sit amet" 
              textSize="7.5rem" 
              textColor="#f4f3ff"
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-start items-start gap-9">
          <div className="text-[#f4f3ff] text-2xl font-normal leading-[33.67px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="text-[#f4f3ff] text-2xl font-normal leading-[33.67px]">
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </div>
        </div>
      </div>

      <div className="w-screen h-screen px-8 md:px-16 lg:px-24 py-12 bg-gradient-to-tl from-[#3b1ae5] to-[#A06AF8] flex justify-center items-center gap-12">
        <div className="relative">
          <ValueCardScroll />
        </div>
      </div>

      <div className="w-screen h-screen px-[118px] py-[333px] bg-[#e9cdff] flex justify-between items-center">
        <div className="w-1/2">
          <AnimatedHeader 
            text1="Lorem ipsum dolor" 
            text3="sit amet" 
            textSize="8rem" 
            textColor="#141221"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-start items-start gap-9">
          <div className="text-[#141221] text-2xl font-normal leading-[33.67px]">
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </div>
          <div className="text-[#141221] text-2xl font-normal leading-[33.67px]">
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </div>
        </div>
      </div>

      <div className="w-screen h-screen px-8 md:px-16 lg:px-24 py-12 bg-[#141221] flex flex-col justify-between items-center">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 pt-48 lg:gap-12">
          <div className="w-[637px] h-[444px] flex justify-center items-center">
            <img src={SlideImage} alt="Process Slide" className="w-full h-full object-contain" />
          </div>

          <div className="w-[629px] flex flex-col justify-center items-center lg:items-start gap-9">
            <div className="w-full text-center lg:text-left">
              <span className="text-[#f4f3ff] text-4xl font-medium font-display">Lorem ipsum dolor</span>
              <span className="text-[#f4f3ff] text-4xl font-normal font-serif"> sit amet</span>
            </div>
            <div className="w-full text-[#f4f3ff] text-2xl font-normal font-display leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="w-full text-[#f4f3ff] text-2xl font-normal font-display leading-relaxed">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </div>
          </div>
        </div>

        <div className="w-[393px] flex justify-center items-center gap-6">
          <div className="w-6 h-6 bg-[#7a6fc0] rounded-full"></div>
          <div className="w-6 h-6 bg-[#7a6fc0] rounded-full"></div>
          <div className="w-6 h-6 bg-[#7a6fc0] rounded-full"></div>
          <div className="w-6 h-6 bg-[#7a6fc0] rounded-full"></div>
          <div className="w-6 h-6 bg-[#7a6fc0] rounded-full"></div>
        </div>
      </div>

      <div className="w-screen h-screen relative bg-gradient-to-l from-[#ffe9e9] to-[#a06af8]">
        <div className="w-[2045.34px] h-[1395px] absolute -left-[330px] -top-[106px] z-0">
          <div className="circle-1 w-[693px] h-[693px] absolute left-[669.39px] top-[535px] origin-top-left rotate-[75deg] bg-[#dac4e7] rounded-full" />
          <div className="circle-2 w-[285.24px] h-[285.24px] absolute left-[1971.52px] top-[396px] origin-top-left rotate-[75deg] bg-[#dac4e7] rounded-full" />
          <div className="circle-3 w-[412px] h-[412px] absolute left-[463px] top-0 bg-[#f6ffbc] rounded-full" />
          <div className="circle-4 w-[444.99px] h-[444.99px] absolute left-[1515.82px] top-[850px] origin-top-left rotate-[75deg] bg-[#f6ffbc] rounded-full" />
        </div>

        <div className="absolute left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%] flex flex-col justify-center items-center gap-9 z-10">
          <div className="w-[643px] text-center">
            <span className="text-[#141221] text-[40px] font-medium font-display">Lorem ipsum dolor</span>
            <span className="text-[#141221] text-[40px] font-normal font-display"> </span>
            <span className="text-[#141221] text-[40px] font-normal font-serif">sit amet</span>
          </div>
          <div className="w-[643px] text-center text-[#141221] text-2xl font-normal leading-[33.67px] font-display">
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
