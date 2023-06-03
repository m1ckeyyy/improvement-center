import styles from "./PomodoroTimer.module.scss";
import { useState, useEffect } from "react";

// const getState = () => {
//   const timePassed = JSON.parse(localStorage.getItem('timePassed')) || 0;
//   const workMode = JSON.parse(localStorage.getItem('workMode')) || true;
//   const userSettings = JSON.parse(localStorage.getItem('userSettings')) || ['workTime', 'breakTime','theme','music'];
//   return { timePassed, workMode, userSettings };
// };

function PomodoroTimer() {
	// const [timerState, setTimerState] = useState(getState());
	const [timePassed, setTimePassed] = useState(
		JSON.parse(localStorage.getItem("timePassed")) || 0
	);
	const [workMode, setWorkMode] = useState(
		JSON.parse(localStorage.getItem("workMode")) || true
	);
	const [workTime, setWorkTime] = useState(
		JSON.parse(localStorage.getItem("workTime")) || 25
	);
	const [breakTime, setBreakTime] = useState(
		JSON.parse(localStorage.getItem("breakTime")) || 5
	);
	const [theme, setTheme] = useState(
		JSON.parse(localStorage.getItem("theme")) || "default"
	);
	const [music, setMusic] = useState(
		JSON.parse(localStorage.getItem("music")) || "on"
	);

	// console.log(timerState)
	console.log(timePassed, workMode, workTime, breakTime, theme, music);
	const saveTimerState = (state) => {
		localStorage.setItem("timerState", JSON.stringify(state));
	};

	const clearTimerState = () => {
		localStorage.removeItem("timerState");
	};

	const handlePageRefresh = () => {
		saveTimerState(timePassed, workMode, workTime, breakTime, theme, music); //zapisz wszystkie settingsy
	};

	useEffect(() => {
		window.addEventListener("beforeunload", handlePageRefresh);

		return () => {
			window.removeEventListener("beforeunload", handlePageRefresh);
		};
	}, [timePassed, workMode, workTime, breakTime, theme, music]); //dependecies = wszystkie settingsy

	return (
		<div className={styles.container}>
			<div className={styles.app}>
				<img
					src="images/pomodoro2icon.png"
					alt="pomodoro"
					className={styles.pomodoroImg}
				/>
				<div className={styles.timer}>
					<span className={styles.workTimer}>00 : 00</span>
					{/* <span className={styles.breakTimer}>05 : 00</span> */}
				</div>
			</div>
		</div>
	);
}
export default PomodoroTimer;
