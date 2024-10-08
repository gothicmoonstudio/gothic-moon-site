import React from 'react';

const ModalContainer = ({ children }) => {
  return (
    <div
      className="container mx-auto p-8 md:p-10 lg:p-12 xl:p-12 bg-[#f4f3ff] rounded-2xl shadow-xl flex flex-col justify-start items-start gap-6 max-w-screen-md"
      style={{
        width: '90vw',
        maxWidth: '90vh',
        height: '80vh',
        maxHeight: '80vh',
        overflowY: 'auto',
      }}
    >
      {children}
    </div>
  );
};

export default ModalContainer;