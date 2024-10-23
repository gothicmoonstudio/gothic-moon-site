import React, { useState } from 'react';
import TextBlock from '../ui/TextBlock';
import { ArrowUpRight } from 'react-feather';
import styles from '../Blog.module.css'; // Import CSS module

const BlogCardNarrow = ({
  title = 'Default Title',
  buttonText = 'Read More',
  onButtonClick = () => {},
  image = 'https://via.placeholder.com/800x600',
  categories = [],
  creator = 'Gothic Moon Studio',
  articleLink = '#',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Ensure only the first 2 categories are shown
  const displayedCategories = categories.slice(0, 2);

  return (
    <div
      className="h-full p-2 md:p-4 lg:p-4 bg-cover bg-center rounded-2xl shadow-lg flex flex-col justify-end cursor-pointer
      gap-6 md:gap-2.5 transition-all duration-300 relative overflow-hidden hover:scale-[1.02] hover:shadow-xl"
      style={{ backgroundImage: `url(${image})` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.open(articleLink, '_blank', 'noopener,noreferrer')}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>

      {/* Hover Arrow + Text */}
      <div
        className={`absolute top-4 right-4 px-3 py-2 rounded-full bg-gradient-to-tl from-[#3b1ae5] to-[#a06af8] 
        transition-all duration-300 transform 
        ${isHovered ? 'scale-100 visible opacity-100' : 'scale-0 invisible opacity-0'}`}
      >
        <div className="flex items-center gap-2 pl-1">
          <span className="text-[#f4f3ff] text-base font-medium font-header leading-normal">
            {buttonText}
          </span>
          <ArrowUpRight size={24} strokeWidth="1.5px" color="#f4f3ff" className="transform" />
        </div>
      </div>

      {/* Content Block */}
      <div className="relative z-10 w-full">
        <TextBlock title={title} showCreator={false}>
          {/* Render up to 2 categories */}
          <div className="flex flex-wrap gap-2 mt-2">
            {displayedCategories.length > 0 ? (
              displayedCategories.map((category, index) => (
                <span
                  key={index}
                  className={`${styles.categoryTab} px-3 py-1 border-[.5px] border-[#f4f3ff] text-[1rem] font-header rounded-full`}
                >
                  {category}
                </span>
              ))
            ) : (
              <span className={`${styles.categoryTab} font-header rounded-full`}>
                Inspiration
              </span>
            )}
          </div>
        </TextBlock>
      </div>
    </div>
  );
};

export default BlogCardNarrow;