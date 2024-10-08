import React from 'react';
import Link from 'next/link'; // Assuming you're using Next.js for routing

const TextBlock = ({
  title = 'Default Title',
  articleLink = '#', // Link to the article
  onReadMoreClick = () => {}, // Handler function for link clicks
}) => {
  const renderLine = (line, lineIndex) => (
    <div
      key={lineIndex}
      style={{
        display: 'inline-block',
        background: lineIndex % 2 === 0 ? '#a06af8' : '#C4B5FD',
        padding: '0.5rem 1rem',
        borderRadius: '16px',
        margin: '0.25rem 0',
        whiteSpace: 'pre-line',
        cursor: 'pointer',
        transition: 'transform 0.3s ease-in-out',
      }}
      className="hover:scale-105" // Scale on hover for a visual effect
    >
      {line.split(' ').map((word, index) => (
        <span
          key={index}
          style={{
            display: 'inline-block',
            margin: '0 0.2rem',
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col items-start justify-start space-y-4">
      {/* Wrap the entire title block with a Link component to make it clickable */}
      <Link href={articleLink} legacyBehavior>
        <a
          className="text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem] font-bold font-header text-left no-underline hover:underline"
          onClick={onReadMoreClick} // Trigger the onReadMoreClick handler
        >
          {title.split('\n').map((line, index) => renderLine(line, index))}
        </a>
      </Link>
    </div>
  );
};

export default TextBlock;