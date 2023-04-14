import styles from "./ToolsSection.module.scss";
import { VscTools } from "react-icons/vsc";
const ToolsSection = () => {
	return (
		<>
			<div className={styles.container} id="tools">
				<section className={styles.toolsSection}>
					<div className={styles.toolsHeader}>
						<h1>Featured Tools</h1>
						<VscTools color="white" size="53px" />
					</div>
					<div className={styles.toolsContainer}>
						<div className={styles.tool}>
							<h2>Pomodoro Timer</h2>
							<p>
								Boost productivity and focus with the power of the pomodoro
								technique
							</p>
							<a href="#">Go To Pomodoro</a>
						</div>
						<div className={styles.tool}>
							<h2>Habit Tracker</h2>
							<p>
								Form good habits and break bad ones with our powerful habit
								tracker test test test test test test test testtest test test
								testtest test test test test test
							</p>
							<a href="#">Go To Habit Tracker</a>
						</div>
						<div className={styles.tool}>
							<h2>Daily Journal</h2>
							<p>
								Reflect on your day and discover new insights with our daily
								journaling
							</p>
							<a href="#">Go To Daily Journal</a>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default ToolsSection;
