import styles from "./PomodoroTimer.module.scss";
import { useState, useEffect } from "react";
import { usePomodoroTimer } from "./PomodoroFunctions";
import { ProgressBar } from "./ProgressBar.jsx";

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

  const [progressValue, setProgressValue] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgressValue((prev) => prev + 1);
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
          <span className={styles.workTimer}>20:00</span>
          <div className={styles.items}>
            <ProgressBar progress={progressValue} />
            {/* <div class="canvas-wrap">
              <canvas id="canvas" width="300" height="300"></canvas>
              <span id="procent"></span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default PomodoroTimer;
