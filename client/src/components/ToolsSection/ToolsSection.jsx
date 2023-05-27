import styles from "./ToolsSection.module.scss";
import { VscTools } from "react-icons/vsc";
import { BsArrowUpRightSquare } from "react-icons/bs";
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
              <img
                src="images/pomodoro2.png"
                alt="pomodoro"
                className={styles.pomodoroImg}
              />
              <a href="/pomodoro">
                Go To Pomodoro <BsArrowUpRightSquare size="22" />
              </a>
            </div>
            <div className={styles.tool}>
              <h2>Habit Tracker</h2>
              <p>
                Form good habits and break bad ones with our powerful habit
                tracker
              </p>
              <img
                src="images/habittracker.png"
                alt="habittracker"
                className={styles.habitTrackerImg}
              />
              <a href="#">
                Go To Habit Tracker
                <BsArrowUpRightSquare size="22" />
              </a>
            </div>
            <div className={styles.tool}>
              <h2>Daily Journal</h2>
              <p>
                Reflect on your day and discover new insights with our daily
                journaling
              </p>
              <img
                src="images/journal.png"
                alt="journal"
                className={styles.journalImg}
              />
              <a href="#">
                Go To Daily Journal
                <BsArrowUpRightSquare size="22" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ToolsSection;
