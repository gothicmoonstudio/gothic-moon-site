import React, { useEffect, useState } from 'react';
import axios from 'axios';
import xml2js from 'xml2js';
import BlogCardWide from './ui/BlogCardWide';
import BlogCardNarrow from './ui/BlogCardNarrow';
import TextOverContent from '../templates/TextOverContent';

// Using CORS proxy to fetch Medium RSS feed
const mediumRSSFeed = 'https://api.allorigins.win/raw?url=https://medium.com/feed/@gothicmoonstudio';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  // Function to fetch Medium RSS feed and parse it
  const fetchMediumPosts = async () => {
    try {
      const response = await axios.get(mediumRSSFeed);

      // Log the raw RSS feed data to verify structure
      console.log('Raw RSS Feed Data:', response.data);

      // Parse the XML data into a JavaScript object
      const parsedData = await xml2js.parseStringPromise(response.data, {
        trim: true,
        mergeAttrs: true,
        explicitArray: false,
      });

      // Log parsed data to verify structure
      console.log('Parsed RSS Data:', parsedData);

      // Extract items (posts) from the RSS feed
      const items = parsedData?.rss?.channel?.item || [];

      // Check if items are found
      if (!items.length) {
        console.error('No items found in the RSS feed.');
        return;
      }

      // Format posts with necessary fields for rendering
      const formattedPosts = items.map((item) => {
        let thumbnail = '';

        // Check if the image URL can be extracted from <content:encoded> tag
        if (item['content:encoded'] && item['content:encoded'].includes('<img')) {
          const imgMatch = item['content:encoded'].match(/<img.*?src="(.*?)"/);
          if (imgMatch && imgMatch[1]) {
            thumbnail = imgMatch[1]; // Extract the image URL from src attribute
          }
        }

        return {
          title: item.title,
          link: item.link,
          thumbnail: thumbnail || 'https://via.placeholder.com/600x400', // Use placeholder if no image is found
          description: item.description,
          pubDate: item.pubDate,
        };
      });

      // Limit the posts to the top 4 items
      const topPosts = formattedPosts.slice(0, 4);

      // Update state with top posts
      setPosts(topPosts);
    } catch (error) {
      console.error('Error fetching Medium RSS feed:', error);
    }
  };

  // Fetch posts when the component mounts
  useEffect(() => {
    fetchMediumPosts();
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <TextOverContent title="Stay" specialText="inspired.">
        <div className="flex flex-col md:flex-row lg:flex-row justify-start items-start gap-6 md:gap-8 lg:gap-10 w-full">
          {/* Render blog cards dynamically based on fetched posts */}
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <div
                className="w-full flex flex-wrap md:flex-nowrap justify-center md:justify-between items-start"
                key={index} // Unique key prop
              >
                {/* Alternate between BlogCardWide and BlogCardNarrow */}
                {index % 2 === 0 ? (
                  <BlogCardWide
                    title={post.title}
                    image={post.thumbnail}
                    buttonText="Read More"
                    onButtonClick={() => window.open(post.link, '_blank')}
                  />
                ) : (
                  <BlogCardNarrow
                    title={post.title}
                    buttonText="Read More"
                    image={post.thumbnail}
                    onButtonClick={() => window.open(post.link, '_blank')}
                  />
                )}
              </div>
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