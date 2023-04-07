import React, { useRef, useEffect } from "react";
import Navbar from "./../Navbar/Navbar.jsx";
import LandingPage from "./../../components/LandingSection/LandingSection";
import styles from "./home.module.scss";

const Home = () => {


  return (
    <div className={styles.container}>
      <Navbar />
      <LandingPage />
    </div>
  );
};

export default Home;
