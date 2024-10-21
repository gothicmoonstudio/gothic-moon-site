import React, { useEffect, useState } from 'react';
import axios from 'axios';
import xml2js from 'xml2js';
import BlogCardWide from './ui/BlogCardWide';
import BlogCardNarrow from './ui/BlogCardNarrow';
import TextOverContent from '../templates/TextOverContent';
import ScaleInCenter from '../Animations/ScaleInCenter/ScaleInCenter';

const mediumRSSFeed = 'https://api.allorigins.win/raw?url=https://medium.com/feed/@gothicmoonstudio';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  const fetchMediumPosts = async () => {
    try {
      const response = await axios.get(mediumRSSFeed);

      console.log('Raw RSS Feed Data:', response.data);
      const parsedData = await xml2js.parseStringPromise(response.data, {
        trim: true,
        mergeAttrs: true,
        explicitArray: false,
      });

      console.log('Parsed RSS Data:', parsedData);

      const items = parsedData?.rss?.channel?.item || [];
      if (!items.length) {
        console.error('No items found in the RSS feed.');
        return;
      }

      const formattedPosts = items.map((item) => {
        let thumbnail = '';
        if (item['content:encoded'] && item['content:encoded'].includes('<img')) {
          const imgMatch = item['content:encoded'].match(/<img.*?src="(.*?)"/);
          if (imgMatch && imgMatch[1]) {
            thumbnail = imgMatch[1];
          }
        }

        const categories = Array.isArray(item.category)
          ? item.category
          : [item.category].filter(Boolean);

        const toTitleCase = (str) => 
          str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

        return {
          title: item.title,
          link: item.link,
          thumbnail: thumbnail || 'https://via.placeholder.com/600x400',
          categories: categories.map(toTitleCase),
          creator: item['dc:creator'] || 'Gothic Moon Studio',
        };
      });

      setPosts(formattedPosts.slice(0, 4));
    } catch (error) {
      console.error('Error fetching Medium RSS feed:', error);
    }
  };

  useEffect(() => {
    fetchMediumPosts();
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-start items-center mt-24">
      <TextOverContent title="Stay" specialText="inspired.">
        <div className="flex flex-col md:flex-col lg:flex-row justify-start items-start gap-6 md:gap-8 lg:gap-10 w-full">
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <ScaleInCenter
                key={index}
                style={{ animationDelay: `${(index + 1) * 0.3}s` }}
              >
                <div className="w-full flex flex-wrap md:flex-nowrap justify-center md:justify-between items-start">
                  {index % 2 === 0 ? (
                    <BlogCardWide
                      title={post.title}
                      image={post.thumbnail}
                      buttonText="Read More"
                      articleLink={post.link}
                      categories={post.categories}
                      creator={post.creator}
                    />
                  ) : (
                    <BlogCardNarrow
                      title={post.title}
                      image={post.thumbnail}
                      buttonText="Read More"
                      articleLink={post.link}
                      categories={post.categories}
                      creator={post.creator}
                    />
                  )}
                </div>
              </ScaleInCenter>
            ))
          ) : (
            <p>Loading blog posts...</p>
          )}
        </div>
      </TextOverContent>
    </div>
  );
};

export default Blog;