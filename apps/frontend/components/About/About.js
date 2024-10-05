import React from 'react';
import Greeting from '../About/Greeting';
import Intro from '../About/Intro';

const AboutPage = () => {
  return (
      <section id="about">
        <Greeting />
        <Intro />
      </section>
  );
};

export default AboutPage;