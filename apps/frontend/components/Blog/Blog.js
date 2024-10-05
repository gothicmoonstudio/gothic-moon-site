import React from 'react';
import TextOverContent from '../templates/TextOverContent';

const Blog = () => {
  return (
    <section id="blog">
      <TextOverContent
        title=""
      >
        <img
          src="https://via.placeholder.com/800x400"
          alt="Placeholder"
          className="w-full h-full rounded-md"
        />
      </TextOverContent>
    </section>
  );
};

export default Blog;