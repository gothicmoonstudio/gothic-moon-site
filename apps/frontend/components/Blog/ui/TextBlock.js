import React from 'react';

const TextBlock = ({
  title = 'Default Title',
  children,
  creator = 'Gothic Moon Studio',
}) => {
  return (
    <div className="w-full h-[597px] px-2 py-4 rounded-2xl flex-col justify-end items-center inline-flex relative overflow-hidden">
      {/* Content Block */}
      <div className="w-full p-4 bg-gradient-to-tl from-[#3b1ae5] to-[#a06af8] rounded-2xl flex flex-col gap-3">
        {/* Render children (for categories or other content passed in) */}
        <div className="flex gap-2.5">{children}</div>

        {/* Title */}
        <div className="text-[#f4f3ff] text-[1.5rem] md:text-[1.75rem] lg:text-[1.75rem] text-left font-medium font-header leading-[150%]">
          {title}
        </div>

        {/* Creator */}
        <div className="flex items-center gap-2.5">
          <div className="opacity-80 text-[#f4f3ff] text-left text-base font-normal font-header leading-normal">
            by {creator}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextBlock;