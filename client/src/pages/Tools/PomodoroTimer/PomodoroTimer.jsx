import styles from "./PomodoroTimer.module.scss";
import { useState, useEffect } from "react";
import { usePomodoroTimer } from "./PomodoroFunctions";

function PomodoroTimer() {
	const {
		timePassed,
		setTimePassed,
		workMode,
		setWorkMode,
		workTime,
		setWorkTime,
		breakTime,
		setBreakTime,
		theme,
		setTheme,
		music,
		setMusic,
	} = usePomodoroTimer();

	return (
		<div className={styles.container}>
			{/* <div>{theme}</div> */}
			<div className={styles.app}>
				<img
					src="images/pomodoro2icon.png"
					alt="pomodoro"
					className={styles.pomodoroImg}
				/>
				<div className={styles.timer}>
					<span className={styles.workTimer}>00 : 00</span>
				</div>
			</div>
		</div>
	);
}
export default PomodoroTimer;
