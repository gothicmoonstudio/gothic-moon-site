import React from 'react';
import TextOverContent from '../templates/TextOverContent';
import PricesCard from './PricesCard';

import PotionsAnimation from '../../assets/animations/icons8-mana.json';
import SparklesAnimation from '../../assets/animations/icons8-sparkles.json';
import MagicAnimation from '../../assets/animations/icons8-magic.json';

const Prices = () => {
  return (
    <section id="prices" className="">
      <div className="">
        <TextOverContent
          title="Let Gothic be"
          specialText="your design guide."
        >
          <div className="flex flex-wrap justify-center gap-12 pt-12">
          <PricesCard
            animationData={PotionsAnimation} // Pass animationData prop instead of lottieOptions
            title="Single Project"
            priceRange="$1k-$10k"
            description="Ideal for clients seeking to address particular challenges or enhance key areas of their user experience."
            buttonLabel="Schedule a Call"
            details={[
              'UI/UX design for a specific feature or product.',
              'User flow and wireframe development.',
              'High-fidelity prototypes.',
              'Usability testing and analysis.'
            ]}
          />
          <PricesCard
            animationData={SparklesAnimation} // Pass animationData prop instead of lottieOptions
            title="Ongoing Support"
            priceRange="$100-$190/hour"
            description="Perfect for projects needing consistent and adaptable design expertise."
            buttonLabel="Schedule a Call"
            details={[
              'Regular design updates and iterations.',
              'Design system maintenance and support.',
              'Performance reviews and optimizations.',
              'Cross-team collaboration and feedback.'
            ]}
          />
          <PricesCard
            animationData={MagicAnimation} // Pass animationData prop instead of lottieOptions
            title="Design Consultations"
            priceRange="$190/session"
            description="Access expert insights and innovative solutions that are designed to offer both guidance and results."
            buttonLabel="Schedule a Call"
            details={[
              'Design audits and expert feedback.',
              'UX strategy and improvement plans.',
              'Problem-solving for specific design challenges.',
              'Concept ideation and brainstorming.'
            ]}
          />
        </div>
        </TextOverContent>
      </div>
    </section>
  );
};

export default Prices;