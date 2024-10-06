import React from 'react';
import TextOverContent from '../templates/TextOverContent';
import ProjectCard from '../Projects/ProjectCard';

const Prices = () => {
  return (
    <section id="projects">
      <TextOverContent title="">
        {/* Replace the placeholder image with the ProjectCard component */}
        <ProjectCard
          title="Lorem ipsum dolor"
          subtitle="sit amet"
          description="Web Design, E-Commerce, Interaction Design"
          status="Coming Soon"
        />
      </TextOverContent>
    </section>
  );
};

export default Prices;