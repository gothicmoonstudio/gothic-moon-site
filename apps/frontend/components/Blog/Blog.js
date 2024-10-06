import React from 'react';
import BlogCardWide from '../Blog/ui/BlogCardWide';
import TextOverContent from '../templates/TextOverContent';

const Blog = () => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-9 mb-7 md:mb-9 lg:mb-12">
      {/* TextOverContent Layout for Title and Blog Content */}
      <TextOverContent
        title="Stay"
        specialText="inspired."
      >
        {/* Main Content Section with Responsive Layout */}
        <div className="flex flex-col justify-start items-start gap-9 w-full">
          {/* Row 1 - BlogCardWide and BlogCardNarrow Placeholder */}
          <div className="w-full flex flex-wrap md:flex-nowrap justify-center md:justify-between items-start gap-9">
            {/* BlogCardWide */}
            <BlogCardWide
              title="Lorem ipsum dolor sit amet."
              description="Consectetur adipiscing elit. Morbi eget molestie augue. Consectetur adipiscing elit. Morbi eget molestie augue. Consectetur adipiscing elit. Morbi eget molestie augue."
              buttonText="Read More"
            />
            {/* Placeholder for BlogCardNarrow */}
            <div className="w-full md:w-2/3 lg:w-2/3 h-[37rem] bg-[#dad5ff] rounded-2xl flex justify-center items-center">
              <span className="text-[#141221] text-lg font-semibold">BlogCardNarrow Placeholder</span>
            </div>
          </div>

          {/* Row 2 - BlogCardNarrow Placeholder and BlogCardWide */}
          <div className="w-full flex flex-wrap md:flex-nowrap justify-center md:justify-between items-start gap-9">
            {/* Placeholder for BlogCardNarrow */}
            <div className="w-full md:w-2/3 lg:w-2/3 h-[597px] bg-[#dad5ff] rounded-2xl flex justify-center items-center">
              <span className="text-[#141221] text-lg font-semibold">BlogCardNarrow Placeholder</span>
            </div>
            {/* BlogCardWide */}
            <BlogCardWide
              title="Lorem ipsum dolor sit amet."
              description="Consectetur adipiscing elit. Morbi eget molestie augue. Consectetur adipiscing elit. Morbi eget molestie augue. Consectetur adipiscing elit. Morbi eget molestie augue."
              buttonText="Read More"
            />
          </div>
        </div>
      </TextOverContent>
    </div>
  );
};

export default Blog;