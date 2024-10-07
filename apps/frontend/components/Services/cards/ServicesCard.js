import React from 'react';
import PropTypes from 'prop-types';

const ServicesCard = ({ title, description, services, imageSrc }) => {
  return (
    <div className="w-full h-auto p-12 bg-[#e9cdff] justify-center items-center gap-9 flex flex-col md:flex-row lg:flex-row">
      <div className="grow shrink basis-0 flex flex-col justify-start items-start gap-9">
        <div className="self-stretch text-[#141221] text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-medium font-header text-left">
          {title}
        </div>

        <div className="self-stretch justify-start items-start gap-9 flex flex-col md:flex-row">
          <div className="grow shrink basis-0 text-[#141221] text-[1rem] md:text-[1.25rem] lg:text-[1.5rem] font-normal font-body leading-[150%] text-left">
            {description}
          </div>

          <div className="flex-col justify-start items-start gap-2 flex">
            {services.map((service, index) => (
              <div
                key={index}
                className="self-stretch text-[#141221] text-[1rem] md:text-[1.05rem] lg:text-[1.15rem] uppercase font-medium font-header leading-7 md:leading-9 text-left"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full md:w-[25rem] self-stretch rounded-2xl overflow-hidden">
        <img src={imageSrc} alt="Service" className="w-full h-full object-cover rounded-2xl" />
      </div>
    </div>
  );
};

export default ServicesCard;