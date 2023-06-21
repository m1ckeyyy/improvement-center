import styles from "./PomodoroTimer.module.scss";
import { useState, useEffect } from "react";
// import { usePomodoroTimer } from "./PomodoroFunctions";
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai";
import { RxReset } from "react-icons/rx";
import { BsSkipForward, BsFillGearFill } from "react-icons/bs";
// import { ProgressBar } from "./ProgressBar.jsx";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Button from "./PomodoroComponents/Button";
import Settings from "./PomodoroComponents/Settings";
function PomodoroTimer() {
	const [settingsVisible, setSettingsVisible] = useState(false);
	const [workTime, setWorkTimePreference] = useState(25); // 25 minutes in seconds
	const [breakTime, setBreakTimePreference] = useState(5); // 5 minutes in seconds
	const [isRunning, setIsRunning] = useState(false);
	const [secondsLeft, setSecondsLeft] = useState(workTime * 60);
	const [currentSection, setCurrentSection] = useState("work");

	useEffect(() => {
		const timer = setInterval(() => {
			if (isRunning & (secondsLeft > 0)) {
				setSecondsLeft((prev) => prev - 1);
			} else if (secondsLeft === 0) {
				if (currentSection === "work") {
					// post request to server about finished session (dateStarted, timeTaken)
					setCurrentSection("break");
					setSecondsLeft(breakTime * 60);
				} else {
					setCurrentSection("work");
					setSecondsLeft(workTime * 60);
				}
			}
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, [isRunning, secondsLeft, currentSection]); //workTime, breakTime

	const handleStartStop = () => {
		setIsRunning((prev) => !prev);
	};
	const handleReset = () => {
		setIsRunning(false);
		if (currentSection === "work") {
			setSecondsLeft(workTime * 60);
		} else if (currentSection === "break") setSecondsLeft(breakTime * 60);
	};
	const handleSkipSection = () => {
		setIsRunning(true);
		if (currentSection === "work") {
			setCurrentSection("break");
			setSecondsLeft(breakTime * 60);
		} else if (currentSection === "break") {
			setCurrentSection("work");
			setSecondsLeft(workTime * 60);
		}
	};
	const formatTime = (timeInSeconds) => {
		const minutes = Math.floor(timeInSeconds / 60);
		const seconds = timeInSeconds % 60;
		return `${minutes.toString().padStart(2, "0")}:${seconds
			.toString()
			.padStart(2, "0")}`;
	};
	const toggleVisibility = (event) => {
		setSettingsVisible((prev) => !prev);
	};

	return (
		<div className={styles.overlayContainer}>
			<div className={styles.app}>
				<div className={styles.timer}>
					<h1>{currentSection === "work" ? "Work Time" : "Break Time"}</h1>
					<div onClick={handleStartStop} className={styles.seconds}>
						{formatTime(secondsLeft)}
					</div>
				</div>
				<div className={styles.buttons}>
					<button onClick={handleStartStop}>
						{isRunning ? "Stop" : "Start"}
					</button>
					<button onClick={handleReset}>Reset</button>
					<button onClick={handleSkipSection}>Skip Section</button>
					{!settingsVisible && (
						<button className={styles.gearButton} onClick={toggleVisibility}>
							<BsFillGearFill size="30" color="#0a789b" />
						</button>
					)}
				</div>

				{settingsVisible && (
					<Settings
						workTime={workTime}
						breakTime={breakTime}
						setWorkTimePreference={setWorkTimePreference}
						setBreakTimePreference={setBreakTimePreference}
						toggleVisibility={toggleVisibility}
					/>
				)}
				{/* <div>
				<BsFillGearFill
					size="30"
					color="lightblue"
					className={styles.gearIcon}
				/>
			</div> */}
			</div>
		</div>
	);
	return (
		<div className={styles.container}>
			<div className={styles.app}>
				<img
					src="images/pomodoro2icon.png"
					alt="pomodoro"
					className={styles.pomodoroImg}
				/>
				<div className={styles.controls}>
					<AiOutlinePlayCircle color="black" size="3em" cursor="pointer" />
					<AiOutlinePauseCircle color="black" size="3em" cursor="pointer" />
					<RxReset color="black" size="3em" cursor="pointer" />
					<BsSkipForward color="black" size="3em" cursor="pointer" />
				</div>
				<div className={styles.timer}>
					<CircularProgressbar
						value={"percentage"}
						// text={timeInMinutes ? `${timePassed}` : `${percentage}%`}
						strokeWidth={6}
						circleRatio={0.75}
						className={styles.progress}
						// background
						// backgroundPadding={6}
						styles={buildStyles({
							pathTransitionDuration: 0.5,
							strokeLinecap: "butt",
							rotation: 1 / 2 + 1 / 8,
							//   pathColor: `rgba(${(63 / percentage) * 100}, ${
							//     percentage < 15 ? 160 : 199
							//   }, 44)`,
							//   textColor: `rgba(${(63 / percentage) * 100}, ${
							//     percentage < 15 ? 160 : 199
							//   }, 44)`,
							trailColor: "lightgray",
							fontSize: "10px",
							//   backgroundColor: "#061A94",
						})}
					/>
				</div>
			</div>
		</div>
	);
}

export default PomodoroTimer;
