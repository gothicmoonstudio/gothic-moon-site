import React from 'react';
import TextOverContent from '../templates/TextOverContent';
import ServicesCard from './ServicesCard';

const ServicesOverview = () => {
  return (
    <div>
      <TextOverContent title="">
        {/* Replace the placeholder image with the ServicesCard component */}
        <ServicesCard
          title="Our UX Services"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget molestie augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam aliquam id libero faucibus vulputate. Donec ut ligula a leo iaculis pulvinar et eu ligula."
          services={[
            'User Interviews',
            'Analytics',
            'A/B Testing',
            'User Flows',
            'Journey Mapping',
          ]}
          imageSrc="https://via.placeholder.com/399x338" // Replace with actual image URL
        />
      </TextOverContent>
    </div>
  );
};

export default ServicesOverview;