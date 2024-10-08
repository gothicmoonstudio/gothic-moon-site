import React from 'react';
import UVPIntro from './UVPIntro';
import UVPDetails from './UVPDetails';
import ServicesIntro from './ServicesIntro';
import ServicesOverview from './ServicesOverview';

const Services = () => {
  return (
      <section id="services" className="">
        <UVPIntro />
        <UVPDetails />
        <ServicesIntro />
        <ServicesOverview />
      </section>
  );
};

export default Services;