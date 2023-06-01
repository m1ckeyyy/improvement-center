import styles from "./PomodoroTimer.module.scss";

function PomodoroTimer() {
  return (
    <div className={styles.container}>
      <div className={styles.app}>
        <img
          src="images/pomodoro2icon.png"
          alt="pomodoro"
          className={styles.pomodoroImg}
        />
        <div className={styles.timer}>
          <span className={styles.workTimer}>25 : 00</span>
          <span className={styles.breakTimer}>05 : 00</span>
        </div>
      </div>
    </div>
  );
}
export default PomodoroTimer;
