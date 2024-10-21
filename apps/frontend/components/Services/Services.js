import React from 'react';
import UVPIntro from './UVPIntro';
import UVPDetails from './UVPDetails';
import ServicesIntro from './ServicesIntro';
import ServicesOverview from './ServicesOverview';

const Services = () => {
  return (
      <section id="services" className="relative h-full mb-[36rem]">
        <UVPIntro />
        <UVPDetails />
        <ServicesIntro />
        <ServicesOverview />
      </section>
  );
};

export default Services;