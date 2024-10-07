import React from 'react';

const TwoColumnFooter = ({ leftContent, rightContent, className }) => {
  return (
    <div className={`w-full px-4 md:px-8 lg:px-16 py-5 md:py-9 lg:py-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-12 ${className}`}>
      <div className="w-full md:w-1/2 lg:w-[50%]">
        {leftContent}
      </div>
      <div className="w-full md:w-1/2 lg:w-[50%]">
        {rightContent}
      </div>
    </div>
  );
};

export default TwoColumnFooter;