import styles from "./PomodoroTimer.module.scss";
import { useState, useEffect } from "react";
import { usePomodoroTimer } from "./PomodoroFunctions";
// import { ProgressBar } from "./ProgressBar.jsx";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function PomodoroTimer() {
  const [percentage, setPercentage] = useState(1);
  const timeInMinutes = false;
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

  //   const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className={styles.container}>
      <div className={styles.app}>
        <img
          src="images/pomodoro2icon.png"
          alt="pomodoro"
          className={styles.pomodoroImg}
        />
        <div className={styles.timer}>
          <CircularProgressbar
            value={percentage}
            text={timeInMinutes ? `${timePassed}` : `${percentage}%`}
            strokeWidth={6}
            circleRatio={0.75}
            className={styles.progress}
            // background
            // backgroundPadding={6}
            styles={buildStyles({
              pathTransitionDuration: 0.5,
              strokeLinecap: "butt",
              rotation: 1 / 2 + 1 / 8,
              pathColor: `rgba(${(63 / percentage) * 100}, ${
                percentage < 15 ? 160 : 199
              }, 44)`,
              textColor: `rgba(${(63 / percentage) * 100}, ${
                percentage < 15 ? 160 : 199
              }, 44)`,
              trailColor: "lightgray",
              fontSize: "10px",
              //   backgroundColor: "#061A94",
            })}
          />
          {/* <span className={styles.workTimer}>20:00</span> */}
        </div>
      </div>
    </div>
  );
}
export default PomodoroTimer;
