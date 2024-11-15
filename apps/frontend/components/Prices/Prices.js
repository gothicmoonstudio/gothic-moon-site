import React from 'react';
import TextOverContent from '../templates/TextOverContent';
import PricesCard from './PricesCard';
import PricesCardwithTab from './PricesCardwithTab';
import PotionsAnimation from '../../public/assets/animations/icons8-mana.json';
import SparklesAnimation from '../../public/assets/animations/icons8-sparkles.json';
import MagicAnimation from '../../public/assets/animations/icons8-magic.json';
import ScaleInCenter from '../Animations/ScaleInCenter/ScaleInCenter';

const Prices = () => {
  return (
    <section id="prices">
      <div>
        <TextOverContent title="Let Gothic be" specialText="your design guide.">
          {/* Card Container */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10">
            {/* PricesCard 1 - Left */}
            <ScaleInCenter style={{ animationDelay: '0s' }}>
              <div className="relative flex flex-col items-center">
                <PricesCard
                  animationData={PotionsAnimation}
                  title="Single Project"
                  priceRange="$1,999+"
                  priceSuffix="/ project"
                  description="Ideal for clients seeking to address particular challenges or enhance key areas of their user experience."
                  buttonLabel="Schedule a Discovery Call"
                  buttonLink="https://calendly.com/mary-gothicmoon/ux-web-design-intro-call-clone-1"
                  details={[
                    'UI/UX design for a specific feature or product.',
                    'User flow and wireframe development.',
                    'High-fidelity prototypes.',
                    'Usability testing and analysis.',
                  ]}
                />
              </div>
            </ScaleInCenter>

           {/* PricesCard 2 - Center */}
            <ScaleInCenter style={{ animationDelay: '0.3s' }}>
              <div className="h-full relative flex flex-col items-center">
                <PricesCardwithTab
                  animationData={SparklesAnimation}
                  title="Ongoing Support"
                  buttonLabel="Schedule a Discovery Call"
                  buttonLink="https://calendly.com/mary-gothicmoon/ux-web-design-intro-call-clone"
                  hourlyPrice="$125 - $190"
                  monthlyPrice="$2,999+"
                  hourlyDescription="Perfect for short-term or flexible projects requiring design expertise on demand."
                  monthlyDescription="Ideal for clients that need continuous design support with predictable monthly costs."
                  hourlyDetails={[
                    'On-demand design consultations.',
                    'Hourly support for specific tasks.',
                    'No long-term commitment required.',
                    'Quick response times to meet deadlines.',
                  ]}
                  monthlyDetails={[
                    'Regular design updates and iterations.',
                    'Design system maintenance and support.',
                    'Performance reviews and optimizations.',
                    'Cross-team collaboration and feedback.',
                  ]}
                />
              </div>
            </ScaleInCenter>

            {/* PricesCard 3 - Right */}
            <ScaleInCenter style={{ animationDelay: '0.6s' }}>
              <div className="relative flex flex-col items-center">
                <PricesCard
                  animationData={MagicAnimation}
                  title="Design Consultations"
                  priceRange="$99"
                  priceSuffix="/ session"
                  description="Access expert insights and innovative solutions that are designed to offer both guidance and results."
                  buttonLabel="Schedule a Discovery Call"
                  buttonLink="https://calendly.com/mary-gothicmoon/30min"
                  details={[
                    'Design audits and expert feedback.',
                    'UX strategy and improvement plans.',
                    'Problem-solving for specific design challenges.',
                    'Concept ideation and brainstorming.',
                  ]}
                />
              </div>
            </ScaleInCenter>
          </div>
        </TextOverContent>
      </div>
    </section>
  );
};

export default Prices;