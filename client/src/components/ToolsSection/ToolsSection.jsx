import styles from "./ToolsSection.module.scss";

const ToolsSection = () => {
  return (
    <>
      <div className={styles.container} id="tools">
        <section className={styles.toolsSection}>
          <div className={styles.toolsHeader}>
            <h1>Tools</h1>
          </div>
          <div className={styles.toolsContainer}>
            <div className={styles.tool}>
              <h2>Pomodoro Timer</h2>
              <p>
                Boost productivity and focus with the power of the pomodoro
                technique
              </p>
              <a href="#">Learn More</a>
            </div>
            <div className={styles.tool}>
              <h2>Habit Tracker</h2>
              <p>
                Form good habits and break bad ones with our powerful habit
                tracker
              </p>
              <a href="#">Learn More</a>
            </div>
            <div className={styles.tool}>
              <h2>Daily Journaling</h2>
              <p>
                Reflect on your day and discover new insights with our daily
                journaling
              </p>
              <a href="#">Learn More</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ToolsSection;
