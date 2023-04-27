import React from "react";
import Navbar from "./../Navbar/Navbar.jsx";
import LandingPage from "./../../components/LandingSection/LandingSection";
import ToolsSection from "./../../components/ToolsSection/ToolsSection";
import AboutSection from "../../components/AboutSection/AboutSection.jsx";
import Footer from "../../components/Footer/Footer.jsx";

import styles from "./home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <LandingPage />
      <ToolsSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Home;
