import React from 'react';

const TwoColumn = ({ leftContent, rightContent }) => {
  return (
    <div className="w-screen min-h-screen px-8 md:px-16 lg:px-24 py-12 flex flex-col md:flex-row justify-center items-start md:items-center gap-6 md:gap-12">
      <div className="w-full md:w-1/2 p-4">
        {leftContent}
      </div>
      <div className="w-full md:w-1/2 p-4">
        {rightContent}
      </div>
    </div>
  );
};

export default TwoColumn;