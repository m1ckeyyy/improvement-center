    import React, { useRef, useEffect } from "react";
import styles from "./landingPage.module.scss";
import { BsMouse } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useHeaderEffect } from './../../pages/effects/hackerEffect'


const LandingPage = () => {
	const ultimate = useRef(null);
	useEffect(() => {
		// useHeaderEffect(ultimate.current);
	}, []);

	return (
			<section className={styles.mainSection}>
				<div className={styles.mainContent}>
					<div className={styles.leftContent}>
						<h1 className={styles.mainHeading}>
							The{" "}
							<span ref={ultimate} data-value="ULTIMATE">
								Ultimate
							</span>{" "}
							<br />
							Productivity Hub
						</h1>
						<p className={styles.mainDescription}>
							"The secret of getting ahead is getting started." <br />- Mark
							Twain
						</p>
						<div className={styles.btnContainer}>
							<Link to="/tools" className={styles.btnGetStarted}>
								So Get Started
							</Link>
						</div>
					</div>
					<div className={styles.rightContent}>
						<img
							src="images/wmn3.png"
							alt="woman"
							className={styles.womanImg}
						/>
					</div>

					{/* change this to scroll to tools seciton👇 */}
				</div>
			</section>
	);
};

export default LandingPage;
