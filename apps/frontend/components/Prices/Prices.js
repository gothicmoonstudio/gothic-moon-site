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
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10 pt-4">
            {/* PricesCard 1 - Left */}
            <ScaleInCenter style={{ animationDelay: '0s' }}>
              <div className="relative flex flex-col items-center">
                <PricesCard
                  animationData={PotionsAnimation}
                  title="Single Project"
                  priceRange="$1k-$10k"
                  priceSuffix="/ project"
                  description="Ideal for clients seeking to address particular challenges or enhance key areas of their user experience."
                  buttonLabel="Book a Discovery Call"
                  buttonLink="https://calendly.com/mary-gothicmoon/30min"
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
                  buttonLabel="Book a Discovery Call"
                  buttonLink="https://calendly.com/mary-gothicmoon/30min"
                  monthlyPrice="$3,080-$6,080"
                  hourlyPrice="$100-$190"
                  monthlyDescription="Ideal for clients that need continuous design support with predictable monthly costs."
                  hourlyDescription="Perfect for short-term or flexible projects requiring dedicated design expertise on demand."
                  monthlyDetails={[
                    'Regular design updates and iterations.',
                    'Website and design system maintenance and support.',
                    'Performance reviews and optimizations.',
                    'Cross-team collaboration and feedback.',
                  ]}
                  hourlyDetails={[
                    'On-demand design consultations.',
                    'Hourly support for specific tasks.',
                    'No long-term commitment required.',
                    'Quick response times to meet deadlines.',
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
                  priceRange="$190"
                  priceSuffix="/ session"
                  description="Access expert insights and innovative solutions that are designed to offer both guidance and results."
                  buttonLabel="Book a Discovery Call"
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