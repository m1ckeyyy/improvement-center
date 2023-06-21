import React from "react";
import styles from "./Settings.module.scss";
import { BiExit } from "react-icons/bi";
const Settings = ({
	workTime,
	breakTime,
	setWorkTimePreference,
	setBreakTimePreference,
	toggleVisibility,
}) => {
	const applySettings = (e) => {
		e.preventDefault();
	};

	return (
		<div className={styles.container}>
			<div className={styles.settingsContainer}>
				<h2>SETTINGS</h2>
				<form onSubmit={applySettings}>
					<h4>Set Time Preferences (Minutes)</h4>
					<div className={styles.workTimePreference}>
						<span>Work time: </span>
						<input type="number" defaultValue={workTime} min="5" max="90" />
					</div>
					<div className={styles.breakTimePreference}>
						<span>Break time: </span>
						<input type="number" defaultValue={breakTime} min="5" max="90" />
					</div>
					<button type="submit" className={styles.submitBtn}>
						Apply
					</button>
				</form>
				<button onClick={toggleVisibility} className={styles.closeBtn}>
					<BiExit />
				</button>
			</div>
		</div>
	);
};

export default Settings;
