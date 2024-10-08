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
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget molestie augue. Class aptent taciti sociosqu ad."
            buttonLabel="Request Services"
          />
          <PricesCard
            animationData={SparklesAnimation} // Pass animationData prop instead of lottieOptions
            title="Full Design Package"
            description="Get a comprehensive design solution for your brand, including UI/UX, graphics, and more."
            buttonLabel="Request Services"
          />
          <PricesCard
            animationData={MagicAnimation} // Pass animationData prop instead of lottieOptions
            title="Ongoing Support"
            description="We provide ongoing design support to keep your brand fresh and up-to-date."
            buttonLabel="Request Services"
          />
        </div>
        </TextOverContent>
      </div>
    </section>
  );
};

export default Prices;