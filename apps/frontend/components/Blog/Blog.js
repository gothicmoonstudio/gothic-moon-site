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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        throw new Error('No items found in the RSS feed.');
      }

      const formattedPosts = items.map((item) => {
        let thumbnail = '';
        if (item['content:encoded']?.includes('<img')) {
          const imgMatch = item['content:encoded'].match(/<img.*?src="(.*?)"/);
          thumbnail = imgMatch ? imgMatch[1] : '';
        }

        const categories = Array.isArray(item.category)
          ? item.category
          : [item.category].filter(Boolean);

        const toTitleCase = (str) =>
          str
            .toLowerCase()
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        return {
          title: item.title,
          link: item.link,
          thumbnail: thumbnail || 'https://via.placeholder.com/600x400',
          categories: categories.map(toTitleCase),
          creator: item['dc:creator'] || 'Gothic Moon Studio',
        };
      });

      setPosts(formattedPosts.slice(0, 4));
      setLoading(false);
    } catch (err) {
      console.error('Error fetching Medium RSS feed:', err);
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMediumPosts();
  }, []);

  if (loading) {
    return <p>Loading blog posts...</p>; // Replace with spinner if desired.
  }

  if (error) {
    return <p>Error loading blog posts: {error}</p>;
  }

  return (
    <div className="w-full h-full flex flex-col justify-start items-center mt-24">
      <TextOverContent title="Stay" specialText="inspired.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
          {posts.map((post, index) => (
            <ScaleInCenter
              key={post.link}
              style={{ animationDelay: `${(index + 1) * 0.3}s` }}
            >
              <div className="flex flex-col md:flex-row items-start justify-between">
                {index % 2 === 0 ? (
                  <BlogCardWide
                    title={post.title}
                    image={post.thumbnail}
                    buttonText="Read Blog"
                    articleLink={post.link}
                    categories={post.categories}
                    creator={post.creator}
                  />
                ) : (
                  <BlogCardNarrow
                    title={post.title}
                    image={post.thumbnail}
                    buttonText="Read Blog"
                    articleLink={post.link}
                    categories={post.categories}
                    creator={post.creator}
                  />
                )}
              </div>
            </ScaleInCenter>
          ))}
        </div>
      </TextOverContent>
    </div>
  );
};

export default Blog;