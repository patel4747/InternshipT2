import React from 'react';
import HomeSection from './Homesection';
import Browse from './Browse';
import Products from './Products';
import FeatureCarousel from './FeatureCarousel';
import ShareSetupSection from './ShareSetupSection';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <HomeSection />
      <Browse />
      <Products />
      <FeatureCarousel/>
      <ShareSetupSection/>
      <Footer />
    </div>
  );
};

export default Home;
