import React from 'react';

const ModalContainer = ({ children }) => {
  return (
    <div
    className="container mx-auto p-6 md:p-6 lg:p-8 xl:p-10 bg-[#f4f3ff] rounded-2xl shadow-xl flex flex-col justify-start items-start gap-6 max-w-screen-md"
    style={{
      backgroundImage: `repeating-linear-gradient(299deg, rgb(244,243,255) 0px, rgb(244,243,255) 20px, transparent 20px, transparent 22px),
      repeating-linear-gradient(0deg, rgb(244,243,255) 0px, rgb(244,243,255) 20px, transparent 20px, transparent 22px),
      repeating-linear-gradient(266deg, rgb(244,243,255) 0px, rgb(244,243,255) 20px, transparent 20px, transparent 22px),
      linear-gradient(90deg, rgb(229, 161, 5), rgb(72, 215, 30))`,
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