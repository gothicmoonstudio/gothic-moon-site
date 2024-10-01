import React from 'react';

const AlconLighting = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-6 py-8 bg-[#141221] flex flex-col items-center gap-12">
      {/* Header */}
      <div className="w-full flex justify-between items-center">
        <div className="w-14 h-14 relative">
          {/* Logo or Icon */}
          {/* Add your logo or icon here */}
        </div>
        <div className="p-4 bg-[#211e38] rounded-full flex items-center gap-2.5">
          {/* Add any header actions or icons here */}
        </div>
      </div>

      {/* Tags and Title */}
      <div className="flex flex-col items-start gap-6">
        {/* Tags */}
        <div className="flex gap-6">
          <div className="px-6 py-2 bg-[#f6ffbc] rounded-full flex items-center">
            <div className="text-[#141221] text-base font-medium uppercase">UX Design</div>
          </div>
          <div className="px-6 py-2 bg-[#f6ffbc] rounded-full flex items-center">
            <div className="text-[#141221] text-base font-medium uppercase">Web Design</div>
          </div>
          {/* Add more tags as needed */}
        </div>
        {/* Title */}
        <div className="text-[#f4f3ff] text-4xl md:text-6xl leading-tight md:leading-[90px] font-medium">
          Gothic Moon is your trusted guide{' '}
          <span className="font-normal font-['Bely Display']">for all things design.</span>
        </div>
      </div>

      {/* Main Image */}
      <img
        className="w-full h-auto"
        src="https://via.placeholder.com/1512x791"
        alt="Main Visual"
      />

      {/* Introduction */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Description */}
        <div className="md:w-2/3 text-[#f4f3ff] text-2xl md:text-4xl leading-relaxed md:leading-[54px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget molestie augue. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
          Aliquam aliquam id libero faucibus vulputate. Donec ut ligula a leo iaculis pulvinar et eu
          ligula.
        </div>
        {/* Details */}
        <div className="md:w-1/3 flex flex-col items-start gap-4">
          <div>
            <div className="text-[#f4f3ff]/80 text-sm md:text-base font-medium uppercase">Year</div>
            <div className="text-[#f4f3ff] text-xl md:text-2xl font-medium">2024</div>
          </div>
          <div>
            <div className="text-[#f4f3ff]/80 text-sm md:text-base font-medium uppercase">
              Strategy
            </div>
            <div className="text-[#f4f3ff] text-xl md:text-2xl font-medium">
              Market Research, UX Audit
            </div>
          </div>
          <div>
            <div className="text-[#f4f3ff]/80 text-sm md:text-base font-medium uppercase">
              Website
            </div>
            <div className="text-[#f4f3ff] text-xl md:text-2xl font-medium">
              Visual Design, Motion Design
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[#f4f3ff]" />

      {/* Section with Title and Text */}
      <div className="w-full flex flex-col md:flex-row justify-start items-start gap-6 md:gap-12">
        {/* Section Title */}
        <div className="text-[#f4f3ff] text-4xl md:text-5xl leading-tight md:leading-[72px]">
          Lorem ipsum dolor{' '}
          <span className="font-normal font-['Bely Display']">sit amet</span>
        </div>
        {/* Section Text */}
        <div className="md:flex-1 text-[#f4f3ff] text-xl md:text-2xl leading-relaxed md:leading-9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tortor neque, convallis
          ac mattis vitae, laoreet et ipsum. Curabitur consequat semper libero sit amet ornare. Duis
          finibus, nulla a posuere accumsan, felis dui vestibulum justo, nec consectetur orci massa
          nec metus.
        </div>
      </div>

      {/* Image */}
      <img
        className="w-full h-auto rounded-lg"
        src="https://via.placeholder.com/1276x711"
        alt="Section Image"
      />

      {/* Additional Sections */}
      {/* Repeat the following blocks as needed for more sections */}

      {/* Section Title */}
      <div className="w-full text-[#f4f3ff] text-4xl md:text-5xl leading-tight md:leading-[72px]">
        Lorem ipsum dolor{' '}
        <span className="font-normal font-['Bely Display']">sit amet</span>
      </div>

      {/* Section Text */}
      <div className="w-full text-[#f4f3ff] text-xl md:text-2xl leading-relaxed md:leading-9">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tortor neque, convallis
        ac mattis vitae, laoreet et ipsum. Curabitur consequat semper libero sit amet ornare. Duis
        finibus, nulla a posuere accumsan, felis dui vestibulum justo, nec consectetur orci massa
        nec metus. Donec quis massa purus. Nam vehicula sem at interdum dignissim.
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-[#f4f3ff]" />

      {/* Two-Column Section */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Image */}
        <img
          className="w-full md:w-1/2 h-auto rounded-lg"
          src="https://via.placeholder.com/556x310"
          alt="Section Image"
        />
        {/* Text Content */}
        <div className="md:w-1/2 flex flex-col items-start gap-6">
          {/* Section Title */}
          <div className="text-[#f4f3ff] text-4xl md:text-5xl leading-tight md:leading-[72px]">
            Lorem ipsum dolor{' '}
            <span className="font-normal font-['Bely Display']">sit amet</span>
          </div>
          {/* Section Text */}
          <div className="text-[#f4f3ff] text-xl md:text-2xl leading-relaxed md:leading-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tortor neque,
            convallis ac mattis vitae, laoreet et ipsum. Curabitur consequat semper libero sit amet
            ornare.
          </div>
        </div>
      </div>

      {/* Image */}
      <img
        className="w-full h-auto rounded-lg"
        src="https://via.placeholder.com/1276x711"
        alt="Section Image"
      />

      {/* Divider */}
      <div className="w-full h-px bg-[#f4f3ff]" />

      {/* Final Sections */}
      <div className="w-full flex flex-col md:flex-row justify-start items-start gap-6 md:gap-12">
        {/* Section Title */}
        <div className="text-[#f4f3ff] text-4xl md:text-5xl leading-tight md:leading-[72px]">
          Lorem ipsum dolor{' '}
          <span className="font-normal font-['Bely Display']">sit amet</span>
        </div>
        {/* Section Text */}
        <div className="md:flex-1 text-[#f4f3ff] text-xl md:text-2xl leading-relaxed md:leading-9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tortor neque, convallis
          ac mattis vitae, laoreet et ipsum. Curabitur consequat semper libero sit amet ornare.
        </div>
      </div>

      {/* Image */}
      <img
        className="w-full h-auto rounded-lg"
        src="https://via.placeholder.com/1276x711"
        alt="Section Image"
      />

      {/* Cards Section */}
      <div className="w-full pt-28 flex flex-col md:flex-row justify-start items-start gap-9">
        {/* Card 1 */}
        <div className="flex-1 px-9 py-12 bg-[#1f1c32] rounded-lg flex flex-col items-start gap-6">
          {/* Card Title */}
          <div className="text-[#f4f3ff] text-4xl md:text-5xl leading-tight md:leading-[72px]">
            Lorem ipsum dolor{' '}
            <span className="font-normal font-['Bely Display']">sit amet</span>
          </div>
          {/* Card Text */}
          <div className="text-[#f4f3ff] text-xl md:text-2xl leading-relaxed md:leading-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tortor neque,
            convallis ac mattis vitae, laoreet et.
          </div>
          {/* Button */}
          <button className="p-4 bg-[#f4f3ff]/10 rounded-full border border-[#ffe9e9] flex items-center gap-2.5">
            <div className="text-[#f4f3ff] text-lg">Read More</div>
            {/* Add an icon if needed */}
          </button>
        </div>
        {/* Card 2 */}
        <div className="flex-1 px-9 py-12 bg-[#1f1c32] rounded-lg flex flex-col items-start gap-6">
          {/* Card Title */}
          <div className="text-[#f4f3ff] text-4xl md:text-5xl leading-tight md:leading-[72px]">
            Lorem ipsum dolor{' '}
            <span className="font-normal font-['Bely Display']">sit amet</span>
          </div>
          {/* Card Text */}
          <div className="text-[#f4f3ff] text-xl md:text-2xl leading-relaxed md:leading-9">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tortor neque,
            convallis ac mattis vitae, laoreet et.
          </div>
          {/* Button */}
          <button className="p-4 bg-[#f4f3ff]/10 rounded-full border border-[#ffe9e9] flex items-center gap-2.5">
            <div className="text-[#f4f3ff] text-lg">Read More</div>
            {/* Add an icon if needed */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlconLighting;
