import React from 'react';
import PropTypes from 'prop-types';

// Correct placement of propTypes after component declaration
const ServicesCard = ({ title, description, services, imageSrc }) => {
  return (
    <div className="w-full md:w-[1512px] h-auto md:h-[434px] p-12 bg-[#e9cdff] justify-center items-center gap-9 flex flex-col md:flex-row">
      {/* Left Section - Title and Description */}
      <div className="grow shrink basis-0 flex flex-col justify-start items-start gap-9">
        {/* Title */}
        <div className="self-stretch text-[#141221] text-4xl md:text-6xl font-medium font-header text-left">
          {title}
        </div>

        {/* Description and Services Container */}
        <div className="self-stretch justify-start items-start gap-9 flex flex-col md:flex-row">
          {/* Description Text */}
          <div className="grow shrink basis-0 text-[#141221] text-lg md:text-2xl font-normal font-header leading-7 md:leading-9 text-left">
            {description}
          </div>

          {/* Services List */}
          <div className="flex-col justify-start items-start gap-2 flex">
            {services.map((service, index) => (
              <div
                key={index}
                className="self-stretch text-[#141221] text-lg md:text-2xl font-medium font-header leading-7 md:leading-9 text-left"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="w-full md:w-[399px] self-stretch rounded-2xl overflow-hidden">
        <img src={imageSrc} alt="Service" className="w-full h-full object-cover rounded-2xl" />
      </div>
    </div>
  );
};

// Add propTypes after component definition
ServicesCard.propTypes = {
  title: PropTypes.string.isRequired, // Title of the card
  description: PropTypes.string.isRequired, // Description text
  services: PropTypes.arrayOf(PropTypes.string).isRequired, // Array of service names
  imageSrc: PropTypes.string.isRequired, // Image source URL
};

export default ServicesCard;