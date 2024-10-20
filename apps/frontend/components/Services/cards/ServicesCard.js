import React from 'react';

const ServicesCard = ({ title, description, services, imageSrc, bgColor, textColor }) => {
  return (
    <div
      className="w-screen h-[100%] p-6 md:p-6 lg:p-8 flex flex-col lg:flex-row justify-between items-center gap-9 rounded-xl shadow-lg"
      style={{
        background: bgColor, // Updated to support gradient backgrounds
        color: textColor,
      }}
    >
      <div className="flex flex-col justify-start items-start gap-6 w-full">
        <h2 className="text-[2rem] md:text-[2rem] lg:text-[2.5rem] font-medium font-header text-left leading-snug">
          {title}
        </h2>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full">
          <p className="text-[1.25rem] md:text-[1.25rem] lg:text-[1.5rem] font-normal font-body leading-[1.6]">
            {description}
          </p>
          <div className="flex flex-col gap-2 w-1/3">
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
      <div className="w-[24rem] md:w-[16rem] lg:w-[16rem] flex-shrink-0 justify-center items-center overflow-hidden">
        <img src={imageSrc} alt="Service" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
};

export default ServicesCard;