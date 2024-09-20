import React from 'react';

const About = () => {
  return (
    <div id="about">
      {/* Greeting Section */}
      <div className="w-screen h-screen px-[118px] py-24 bg-[#9747ff] flex justify-center items-center gap-2.5">
        <div className="text-center">
          <span className="text-[#f4f3ff] text-[7.5rem] font-medium font-display">Lorem ipsum dolor</span>
          <span className="text-[#f4f3ff] text-[7.5rem] font-normal font-display"> </span>
          <span className="text-[#f4f3ff] text-[7.5rem] font-normal font-serif">sit amet</span>
        </div>
      </div>

        {/* Greeting Section */}
      <div className="w-screen h-screen px-8 md:px-16 lg:px-24 py-12 bg-[#141221] flex justify-center items-center gap-12">
        {/* Left Text Section */}
        <div className="w-1/2 max-w-xl flex flex-col justify-start items-start gap-6">
          <div className="w-full text-[#f4f3ff] text-lg md:text-xl lg:text-2xl font-normal font-display leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget molestie augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam aliquam id libero faucibus vulputate. Donec ut ligula a leo iaculis pulvinar et eu ligula.
          </div>
          <div className="w-full text-[#f4f3ff] text-lg md:text-xl lg:text-2xl font-normal font-display leading-relaxed">
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse fringilla arcu ligula, a cursus ex vestibulum quis. Integer eu sollicitudin libero.
          </div>
        </div>

        {/* Right Text Section */}
        <div className="w-1/2 text-left">
          <span className="text-[#f4f3ff] text-6xl md:text-7xl lg:text-[9rem] font-normal font-display">Lorem ipsum dolor</span>
          <span className="text-[#f4f3ff] text-6xl md:text-7xl lg:text-[9rem] font-normal font-display"> </span>
          <span className="text-[#f4f3ff] text-6xl md:text-7xl lg:text-[9rem] font-normal font-serif">sit amet</span>
        </div>
      </div>

      {/* Unique Value Proposition (UVP) Section */}
      <div className="w-screen h-screen px-[118px] py-24 bg-[#141221] flex justify-center items-center gap-12">
        <div className="w-[660px] flex flex-col justify-center items-start gap-6">
          <div className="text-[#f4f3ff] text-3xl font-medium">Lorem ipsum dolor.</div>
          <div>
            <span className="text-[#f4f3ff] text-[120px] font-medium font-display">Lorem ipsum dolor</span>
            <span className="text-[#f4f3ff] text-[120px] font-normal font-display"> </span>
            <span className="text-[#f4f3ff] text-[120px] font-normal font-serif">sit amet</span>
          </div>
        </div>
        <div className="flex-grow flex flex-col justify-start items-start gap-9">
          <div className="text-[#f4f3ff] text-2xl font-normal leading-[33.67px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget molestie augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </div>
          <div className="text-[#f4f3ff] text-2xl font-normal leading-[33.67px]">
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse fringilla arcu ligula, a cursus ex vestibulum quis. Integer eu sollicitudin libero.
          </div>
        </div>
      </div>

      {/* Value Proposition Details Section */}
      <div className="w-screen h-screen px-[417px] bg-gradient-to-tl from-[#3b1ae5] to-[#f6ffbc] flex justify-center items-center gap-12">
        <div className="relative w-[677px]">
          <div className="h-[677px] px-[108px] py-9 absolute top-0 left-[677px] origin-top-left rotate-90 bg-[#f4f3ff]/20 border-l border-[#dfdafd] backdrop-blur-xl flex justify-center items-center gap-6">
            <div className="w-[506px] origin-top-left -rotate-90 text-center">
              <span className="text-[#f4f3ff] text-[40px] font-medium font-display]">Lorem ipsum dolor</span>
              <span className="text-[#f4f3ff] text-[40px] font-normal font-display"> </span>
              <span className="text-[#f4f3ff] text-[40px] font-normal font-serif">sit amet</span>
            </div>
            <div className="w-[540px] origin-top-left -rotate-90 text-center text-[#f4f3ff] text-2xl font-normal leading-[33.67px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget molestie augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </div>
          </div>
        </div>
      </div>

      {/* What to Expect Section */}
      <div className="w-screen h-screen px-[118px] py-[333px] bg-[#e9cdff] flex justify-between items-center">
        <div className="w-[583px]">
          <span className="text-[#141221] text-[140px] font-medium font-display">Lorem ipsum dolor</span>
          <span className="text-[#141221] text-[140px] font-normal font-display"> </span>
          <span className="text-[#141221] text-[140px] font-normal font-serif">sit amet</span>
        </div>
        <div className="w-[629px] flex flex-col justify-start items-start gap-9">
          <div className="text-[#141221] text-2xl font-normal leading-[33.67px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget molestie augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          </div>
          <div className="text-[#141221] text-2xl font-normal leading-[33.67px]">
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse fringilla arcu ligula, a cursus ex vestibulum quis. Integer eu sollicitudin libero.
          </div>
        </div>
      </div>

      {/* Our Process Section */}
      <div className="w-screen h-screen px-[118px] pt-[216px] pb-24 bg-[#141221] flex flex-col justify-between items-center">
        <div className="flex justify-start items-center gap-2.5">
          <div className="w-[637px] h-[444px] flex flex-col justify-center items-center gap-12" />
          <div className="w-[629px] flex flex-col justify-center items-center gap-9">
            <div>
              <span className="text-[#f4f3ff] text-[40px] font-medium font-display">Lorem ipsum dolor</span>
              <span className="text-[#f4f3ff] text-[40px] font-normal font-display"> </span>
              <span className="text-[#f4f3ff] text-[40px] font-normal font-serif">sit amet</span>
            </div>
            <div className="text-[#f4f3ff] text-2xl font-normal leading-[33.67px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget molestie augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </div>
            <div className="text-[#f4f3ff] text-2xl font-normal leading-[33.67px]">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse fringilla arcu ligula, a cursus ex vestibulum quis. Integer eu sollicitudin libero.
            </div>
          </div>
        </div>
        <div className="w-[393px] origin-top-left -rotate-180 flex justify-center items-center gap-6">
          <div className="w-6 h-6 origin-top-left rotate-90 bg-[#7a6fc0] rounded-full" />
          <div className="w-6 h-6 origin-top-left rotate-90 bg-[#7a6fc0] rounded-full" />
          <div className="w-6 h-6 origin-top-left rotate-90 bg-[#7a6fc0] rounded-full" />
          <div className="w-6 h-6 origin-top-left rotate-90 bg-[#7a6fc0] rounded-full" />
          <div className="w-6 h-6 origin-top-left rotate-90 bg-[#7a6fc0] rounded-full" />
        </div>
      </div>

      <div className="w-screen h-screen relative bg-gradient-to-l from-[#ffe9e9] to-[#a06af8]">
        {/* Circle objects with lower z-index */}
        <div className="w-[2045.34px] h-[1395px] absolute -left-[330px] -top-[106px] z-0">
          <div className="w-[693px] h-[693px] absolute left-[669.39px] top-[535px] origin-top-left rotate-[75deg] bg-[#dac4e7] rounded-full" />
          <div className="w-[285.24px] h-[285.24px] absolute left-[1971.52px] top-[396px] origin-top-left rotate-[75deg] bg-[#dac4e7] rounded-full" />
          <div className="w-[412px] h-[412px] absolute left-[463px] top-0 bg-[#f6ffbc] rounded-full" />
          <div className="w-[444.99px] h-[444.99px] absolute left-[1515.82px] top-[850px] origin-top-left rotate-[75deg] bg-[#f6ffbc] rounded-full" />
        </div>

        {/* Content section */}
        <div className="absolute left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%] flex flex-col justify-center items-center gap-9 z-10">
          <div className="w-[643px] text-center">
            <span className="text-[#141221] text-[40px] font-medium font-display">Lorem ipsum dolor</span>
            <span className="text-[#141221] text-[40px] font-normal font-display"> </span>
            <span className="text-[#141221] text-[40px] font-normal font-serif">sit amet</span>
          </div>
          <div className="w-[643px] text-center text-[#141221] text-2xl font-normal leading-[33.67px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget molestie augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam aliquam id libero faucibus vulputate.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
