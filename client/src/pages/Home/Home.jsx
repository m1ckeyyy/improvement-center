import React from "react";
import Navbar from "./../Navbar/Navbar";
import styles from "./home.module.scss";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className={styles.container}>
			<Navbar />
			<section className={styles.mainSection}>
				<div className={styles.mainContent}>
					<h1 className={styles.mainHeading}>The Ultimate Productivity Hub</h1>
					<p className={styles.mainDescription}>
						Tired of having all your productivity-related apps in 10 different
						places? All your productivity tools in one place with Improvement
						Center
					</p>
					<div className={styles.quoteContainer}>
						<p className={styles.quote}>
							"The secret of getting ahead is getting started." - Mark Twain
						</p>
					</div>
					<Link to="/tools" className={styles.btnGetStarted}>
						So Get Started
					</Link>
				</div>
			</section>
		</div>
	);
};

export default Home;
