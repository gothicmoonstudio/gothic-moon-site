import React from 'react';
import TextBlock from '../ui/TextBlock';

const BlogCardNarrow = ({
  title = 'Default Title',
  buttonText = 'Read More',
  onButtonClick = () => {},
  image = 'https://via.placeholder.com/800x600',
}) => {
  return (
    <div
      className="w-full md:w-full lg:w-full h-[37rem] p-6 md:p-9 bg-cover bg-center rounded-2xl shadow-lg flex flex-col justify-end gap-6 md:gap-2.5 transition-all duration-300 relative overflow-hidden"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>

      <div className="relative z-10 w-full mt-auto">
        <TextBlock
          title={title}
          buttonText={buttonText}
          onReadMoreClick={onButtonClick}
        />
      </div>
    </div>
  );
};

export default BlogCardNarrow;