import React from 'react';
import { Navbar } from './../Navbar/Navbar.jsx';
import { LandingPage } from './../../components/LandingSection/LandingSection';
import { ToolsSection } from './../../components/ToolsSection/ToolsSection';
import { AboutSection } from '../../components/AboutSection/AboutSection.jsx';
import { Footer } from '../../components/Footer/Footer.jsx';

const Home = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <ToolsSection />
      <AboutSection />
      <Footer />
    </>
  );
};

export default Home;
