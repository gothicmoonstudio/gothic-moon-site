import React from 'react';

const HorizontalCard = ({ title, description, services, videoSrc, bgColor, textColor }) => {
  return (
    <div
      className="w-screen p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row gap-8 rounded-xl shadow-lg"
      style={{
        background: bgColor,
        color: textColor,
      }}
    >
      {/* Left Column: Title, Description, and Services */}
      <div className="flex flex-col justify-between items-start w-full lg:w-2/3 gap-6">
        {/* Top Section: Title */}
        <div className="w-full">
          <h2 className="text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] font-medium font-header leading-[150%]">
            {title}
          </h2>
        </div>

        {/* Bottom Section: Description and Services */}
        <div className="w-full flex flex-col md:flex-row gap-6 md:gap-12">
          {/* Description */}
          <p className="text-[1.25rem] md:text-[1.25rem] lg:text-[1.5rem] font-normal font-body leading-[150%] w-full">
            {description}
          </p>

          {/* Services List */}
          <div className="flex flex-col gap-2 w-full md:w-1/3">
            {services.map((service, index) => (
              <div
                key={index}
                className="text-[.8rem] md:text-[.9rem] lg:text-[.9rem] uppercase font-medium font-header whitespace-nowrap"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Video */}
      <div
        className={`relative w-full md:w-full lg:w-[30.5rem] h-[15.25rem] rounded-2xl 
        flex justify-center items-center overflow-visible shadow-md`}
      >
       <video
        src={videoSrc}
        muted
        loop
        className="w-full h-full object-cover rounded-xl"
        preload="auto"
        autoPlay
        playsInline
        onError={(e) => console.error('Video error:', e)}
        onPlay={() => console.log('Video is playing')}
        onCanPlay={() => console.log('Video can play')}
      ></video>
      </div>
    </div>
  );
};

export default HorizontalCard;