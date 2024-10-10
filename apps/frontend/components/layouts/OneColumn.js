import React from 'react';

const OneColumn = ({ children }) => {
  return (
    <div className="w-screen min-h-screen px-8 md:px-16 lg:px-24 flex flex-col justify-center items-center">
      {children}
    </div>
  );
};

export default OneColumn;