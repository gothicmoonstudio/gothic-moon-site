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
    <div className="w-full md:w-2/3 h-auto md:h-[545px] p-12 bg-[#F4F3FF] to-white rounded-2xl shadow-lg flex flex-col justify-start items-start gap-2.5">
      <div className="w-full flex justify-between items-start">
        <div className="flex flex-col justify-start items-start gap-2">
          <div className="text-[#141221] text-2xl md:text-3xl font-bold leading-9 font-header text-left">
            {title} <span className="font-normal font-serif">{subtitle}</span>
          </div>
          <div className="text-[#3f3a5b] text-base font-normal leading-7 font-body text-left">
            {description}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <SolidButton label={status} /> {/* Use SolidButton for status */}
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string, // Optional subtitle
  description: PropTypes.string.isRequired,
  status: PropTypes.string, // Optional status
};

export default ProjectCard;