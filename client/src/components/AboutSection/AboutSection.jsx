import styles from "./AboutSection.module.scss";
import { useEffect, useRef, useState } from "react";

const AboutSection = () => {
	const aboutRef = useRef(null);
	const [showContent, setShowContent] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			console.log("handleScroll called", aboutRef.current, showContent);
			if (
				aboutRef.current &&
				window.scrollY + window.innerHeight > aboutRef.current.offsetTop + 100
			) {
				setShowContent(true);
				window.removeEventListener("scroll", handleScroll);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className={styles.container} id="about" ref={aboutRef}>
			<section className={styles.aboutSection}>
				<div
					className={`${styles.aboutHeader} ${
						showContent ? styles.runAboutHeaderEffect : ""
					}`}
				>
					About Me
				</div>
			</section>
		</div>
	);
};

export default AboutSection;
