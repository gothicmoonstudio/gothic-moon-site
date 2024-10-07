import React from 'react';
import ServicesCard from './cards/ServicesCard';

const ServicesOverview = () => {
  return (
    <div>
        <ServicesCard
          title="User Research & Testing"
          description="Delve into understanding your target audience's needs, behaviors, and pain points. Our comprehensive user research lays the foundation for informed design decisions, ensuring your product resonates with its intended users."
          services={[
            'User Interviews',
            'Analytics',
            'A/B Testing',
            'User Flows',
            'Journey Mapping',
          ]}
          imageSrc="https://via.placeholder.com/399x338"
        />
    </div>
  );
};

export default ServicesOverview;