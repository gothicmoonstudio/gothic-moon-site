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
          bgColor="#E9CDFF"
          textColor="#141221" 
          imageSrc="https://via.placeholder.com/399x338"
        />
         <ServicesCard
          title="Visual Design"
          description="Create stunning, on-brand visuals that captivate your audience. We craft aesthetically pleasing interfaces that not only look beautiful but also enhance usability and reinforce your brand identity."
          services={[
            'User Interface', 'Design Libraries', 'Style Guides', 'Templates'
          ]}
          bgColor="#F9FFCF"
          textColor="#141221" 
          imageSrc="https://via.placeholder.com/399x338"
        />
         <ServicesCard
          title="Interaction Design"
          description="Develop intuitive and engaging user interactions that guide users seamlessly through your product. Our interaction design focuses on creating smooth, meaningful experiences that delight users and keep them coming back."
          services={[
           'Animations', 'Motion Graphics', 'Front-End Development'
          ]}
          bgColor="#F4F3FF"
          textColor="#141221" 
          imageSrc="https://via.placeholder.com/399x338"
        />
         <ServicesCard
          title="Web & Product Design"
          description="Bring your product vision to life with our end-to-end product design services. We combine user research, visual design, and interaction design to create cohesive, user-centered products that solve real problems and drive business growth."
          services={[
            'Information Architecture', 'Design Strategy', 'Business Analysis', 'Design Systems', 'SEO'
          ]}
          bgColor="#A06AF8" 
          textColor="#F4F3FF"
          imageSrc="https://via.placeholder.com/399x338"
        />
    </div>
  );
};

export default ServicesOverview;