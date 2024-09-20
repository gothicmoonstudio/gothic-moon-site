import React, { useState, useEffect } from 'react';

const Preloader = ({ setLoading }) => {
  const [count, setCount] = useState(5); // Starting countdown from 5

  useEffect(() => {
    const countdown = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount > 1) {
          return prevCount - 1; // Decrease the count by 1
        } else {
          setLoading(false); // When count reaches 0, hide preloader
          clearInterval(countdown); // Clear the interval to stop the countdown
          return 0; // Set count to 0
        }
      });
    }, 1000); // Update every 1 second

    // Clean up the interval on component unmount
    return () => clearInterval(countdown);
  }, [setLoading]);

  return (
    <div className="preloader-container">
      {/* Plasma Loader */}
      <div className="plasma fill">
        <svg width="0" height="0">
          <filter id="gooey-fill">
            <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -16"
              result="goo"
            />
          </filter>
        </svg>
        <div className="gooey-container">
          <span className="level">
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
            <span className="bubble"></span>
          </span>
        </div>
      </div>

      {/* Countdown */}
      <div className="preloader-text">
        {count > 0 ? `[${count}]` : 'Welcome to Gothic Moon'}
      </div>
    </div>
  );
};

export default Preloader;
