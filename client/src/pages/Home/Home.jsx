import React, { useRef } from "react";
import Navbar from "./../Navbar/Navbar.jsx";
import LandingPage from "./../../components/LandingSection/LandingSection";
import ToolsSection from "./../../components/ToolsSection/ToolsSection";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <LandingPage />
      <ToolsSection />
    </div>
  );
};

export default Home;
