import React from 'react';

// TextBlock Component with default parameter values
const TextBlock = ({
  title = 'Default Title',
  buttonText = 'Read More',
  onReadMoreClick = () => {},
}) => {
  // Create line-based wrappers for dynamic styling
  const renderLine = (line, lineIndex) => (
    <div
      key={lineIndex}
      style={{
        display: 'inline-block',
        background: lineIndex % 2 === 0 ? '#E9CDFF' : '#C4B5FD',
        padding: '0.5rem 1rem',
        borderRadius: '8px',
        margin: '0.25rem 0',
        whiteSpace: 'pre-line',
      }}
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
      {/* Title Section with Line Wrappers */}
      <div className="text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] font-medium font-header text-left text-[#141221]">
        {title.split('\n').map((line, index) => renderLine(line, index))}
      </div>

      {/* Button Section */}
      {buttonText && (
        <button
          onClick={onReadMoreClick}
          className="mt-4 px-4 py-2 bg-[#E9CDFF] text-[#141221] text-base font-medium rounded-md hover:bg-[#C4B5FD] transition-all duration-300 font-header"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default TextBlock;