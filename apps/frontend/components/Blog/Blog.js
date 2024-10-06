import React from 'react';
import BlogCardWide from './ui/BlogCardWide';
import BlogCardNarrow from './ui/BlogCardNarrow';
import TextOverContent from '../templates/TextOverContent';

const Blog = () => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      {/* TextOverContent Layout for Title and Blog Content */}
      <TextOverContent title="Stay" specialText="inspired.">
        {/* Main Content Section with Responsive Layout */}
        <div className="flex flex-col justify-start items-start gap-9 w-full">
          {/* Row 1 - BlogCardWide and BlogCardNarrow */}
          <div className="w-full flex flex-wrap md:flex-nowrap justify-center md:justify-between items-start gap-9">
            {/* BlogCardWide */}
            <BlogCardWide
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget molestie augue."
              buttonText="Read More"
            />
            {/* BlogCardNarrow */}
            <BlogCardNarrow
              title="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              buttonText="Read More"
              image="https://via.placeholder.com/600x400"
              onButtonClick={() => console.log('Read More clicked')}
            />
          </div>

          {/* Row 2 - BlogCardNarrow and BlogCardWide */}
          <div className="w-full flex flex-wrap md:flex-nowrap justify-center md:justify-between items-start gap-9">
            {/* BlogCardNarrow */}
            <BlogCardNarrow
              title="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
              buttonText="Read More"
              image="https://via.placeholder.com/600x400"
              onButtonClick={() => console.log('Read More clicked')}
            />
            {/* BlogCardWide */}
            <BlogCardWide
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget molestie augue."
              buttonText="Read More"
            />
          </div>
        </div>
      </TextOverContent>
    </div>
  );
};

export default Blog;