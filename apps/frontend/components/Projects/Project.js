import React from 'react';
import TextOverContent from '../templates/TextOverContent';
import ProjectCard from '../Projects/ProjectCard';

const Project = () => {
  return (
    <section id="projects">
      <TextOverContent 
      title="Designs that" 
      specialText="captivate & enchant."
      >
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

export default Project;