import React from 'react';
import TextOverContent from '../templates/TextOverContent';
import ProjectCard from '../Projects/ProjectCard';
import ScaleInCenter from '../Animations/ScaleInCenter/ScaleInCenter'; // Import ScaleInCenter

const Project = () => {
  return (
    <section id="projects">
      <TextOverContent 
        title="Designs that" 
        specialText="captivate & enchant."
      >
        {/* Wrap the ProjectCard in ScaleInCenter */}
        <ScaleInCenter>
          <ProjectCard
            title="Lorem ipsum dolor"
            subtitle="sit amet"
            description="Web Design, E-Commerce, Interaction Design"
            status="Coming Soon"
          />
        </ScaleInCenter>
      </TextOverContent>
    </section>
  );
};

export default Project;