import React from 'react';
import UVPIntro from '../Services/UVPIntro';
import UVPDetails from '../Services/UVPDetails';
import ServicesIntro from '../Services/ServicesIntro';
import ServicesOverview from '../Services/ServicesOverview';

const UVP = () => {
  return (
      <section id="services">
        <UVPIntro />
        <UVPDetails />
        <ServicesIntro />
        <ServicesOverview />
      </section>
  );
};

export default UVP;