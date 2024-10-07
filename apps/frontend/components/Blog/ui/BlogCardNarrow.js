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
      className="w-full md:w-2/3 lg:w-2/3 h-[37rem] p-6 md:p-9 bg-cover bg-center rounded-2xl shadow-lg flex flex-col justify-end gap-6 md:gap-2.5 transition-all duration-300 relative overflow-hidden"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>

      {/* TextBlock Component at the Bottom */}
      <div className="relative z-10 w-full mt-auto">
        <TextBlock
          title={title}
          buttonText={buttonText}
          onReadMoreClick={onButtonClick} // Updated prop name to match the callback in TextBlock
        />
      </div>
    </div>
  );
};

export default BlogCardNarrow;