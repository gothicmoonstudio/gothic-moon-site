import React from 'react';

const ServicesCard = ({ title, description, services, imageSrc, bgColor, textColor }) => {
  return (
    <div
      className="w-screen p-6 md:p-6 lg:p-8 flex flex-col lg:flex-row items-center gap-8 rounded-xl shadow-lg"
      style={{
        background: bgColor,
        color: textColor,
      }}
    >
      {/* Left Content */}
      <div className="flex flex-col justify-start items-start gap-6 w-full lg:w-2/3">
        <h2 className="text-[2rem] md:text-[2rem] lg:text-[2.5rem] font-medium font-header text-left leading-snug">
          {title}
        </h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full">
          {/* Description */}
          <p className="text-[1.25rem] md:text-[1.25rem] lg:text-[1.5rem] font-normal font-body leading-[1.6] w-full">
            {description}
          </p>

          {/* Services List */}
          <div className="flex flex-col gap-2 w-full md:w-1/3">
            {services.map((service, index) => (
              <div
                key={index}
                className="text-[1rem] md:text-[1.05rem] lg:text-[1.15rem] uppercase font-medium font-header whitespace-nowrap"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>

        {/* Right Image (Hidden on Mobile) */}
          <div className="hidden md:flex w-[8rem] md:w-[16rem] lg:w-[16rem] flex-shrink-0 justify-center items-center overflow-hidden">
        <img src={imageSrc} alt="Service" className="w-full h-full object-cover rounded-lg" />
      </div>
    </div>
  );
};

export default ServicesCard;