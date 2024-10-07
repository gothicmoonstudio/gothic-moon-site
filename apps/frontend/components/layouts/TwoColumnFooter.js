import React from 'react';

const TwoColumnFooter = ({ leftContent, rightContent, bottomContent, divider, className }) => {
  return (
    <div className={`w-full px-4 md:px-8 lg:px-16 py-5 md:py-9 lg:py-12 flex flex-col justify-between items-center gap-6 md:gap-12 ${className}`}>
      {/* Top Section: Left and Right Content */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-12">
        <div className="w-full md:w-1/2 lg:w-[50%]">
          {leftContent}
        </div>
        <div className="w-full md:w-1/2 lg:w-[50%]">
          {rightContent}
        </div>
      </div>

      {/* Optional Divider Line */}
      {divider && <div className="w-full h-px bg-[#3f3a5b]" />}

      {/* Bottom Section Content */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
        {bottomContent}
      </div>
    </div>
  );
};

export default TwoColumnFooter;