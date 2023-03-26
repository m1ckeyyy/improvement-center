import React from "react";
import Navbar from "./../Navbar/Navbar";
import styles from "./home.module.scss";

const Home = () => {
	return (
		<div className={styles.container}>
			<Navbar />
		</div>
	);
};

export default Home;
