import React from 'react';

const ModalContainer = ({ children }) => {
  return (
    <div
      className="container mx-auto p-6 md:p-8 lg:p-10 xl:p-12 bg-[#f4f3ff] rounded-2xl shadow-xl flex flex-col justify-start items-start gap-6 max-w-screen-md"
      style={{
        width: '90vw',
        maxWidth: '645px',
        height: '80vh',
        maxHeight: '994px',
        overflowY: 'auto',
      }}
    >
      {children}
    </div>
  );
};

export default ModalContainer;