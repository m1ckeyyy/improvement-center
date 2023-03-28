import React, { useRef, useEffect } from "react";
import Navbar from "./../Navbar/Navbar";
import styles from "./home.module.scss";
import { Link } from "react-router-dom";
import { useHeaderEffect } from "./../effects/hackerEffect";

const Home = () => {
	const ultimate = useRef(null);
	useEffect(() => {
		// useHeaderEffect(ultimate.current);
	}, []);

	return (
		<div className={styles.container}>
			<Navbar />
			<section className={styles.mainSection}>
				<div className={styles.mainContent}>
					<h1 className={styles.mainHeading}>
						The{" "}
						<span ref={ultimate} data-value="ULTIMATE">
							Ultimate
						</span>{" "}
						Productivity Hub
					</h1>
					<p className={styles.mainDescription}>
						All your productivity tools in one place with Improvement Center
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
