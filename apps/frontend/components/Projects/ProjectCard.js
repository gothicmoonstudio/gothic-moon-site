import React from 'react';
import PropTypes from 'prop-types';
import SolidButton from '../ui/SolidButton'; // Ensure the path is correct based on your project structure

const ProjectCard = ({
  title,
  subtitle = '',
  description,
  status = 'Coming Soon',
}) => {
  return (
    <div className="w-full h-[34rem] p-6 md:p-8 lg:p-12 mt-4 bg-[#F4F3FF] rounded-2xl shadow-lg flex flex-col justify-between gap-6 transition-all duration-300">
      {/* Top Section: Title, Subtitle, and Button */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 w-full">
        {/* Title and Subtitle */}
        <div className="flex flex-col gap-2">
          <div className="text-[#141221] text-2xl md:text-3xl font-bold leading-9 font-header text-left">
            {title} <span className="font-normal font-serif">{subtitle}</span>
          </div>

          {/* Description */}
          <div className="text-[#3f3a5b] text-base font-normal leading-7 font-body text-left">
            {description}
          </div>
        </div>

        {/* Button at the Top Right */}
        <div className="flex justify-end items-center">
          <SolidButton label={status} />
        </div>
      </div>

      {/* Optional Bottom Section for Additional Content (if needed) */}
      <div className="mt-auto"></div>
    </div>
  );
};

export default ProjectCard;