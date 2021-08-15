import React from 'react';

import { Hero } from '../components/sections/Hero';
import { Main } from '../components/sections/Main';
import { Footer } from '../components/sections/Footer';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Main />
      <Footer />
    </>
  );
};
