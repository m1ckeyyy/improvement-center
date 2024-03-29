import styles from './ToolsSection.module.scss';
import { VscTools } from 'react-icons/vsc';
import { ToolCard } from './components/ToolCard';

export const ToolsSection = () => {
  return (
    <div className={styles.container} id="tools">
      <section className={styles.toolsSection}>
        <div className={styles.toolsHeader}>
          <h1>Featured Tools</h1>
          <VscTools color="white" size="53px" />
        </div>

        <div className={styles.toolsContainer}>
          <ToolCard
            title="Pomodoro Timer"
            description="Boost productivity and focus with the power of the pomodoro technique"
            link="/pomodoro"
            imageSrc="images/pomodoro2.png"
            imageClassName={styles.pomodoroImg}
          />
          <ToolCard
            title="Daily Journal"
            description="Capture your daily moments, thoughts and ideas via digital journal."
            link="/journal"
            imageSrc="images/journal.png"
            imageClassName={styles.journalImg}
          />
          <ToolCard
            title="Habit Tracker"
            description="Form good habits and break bad ones with our powerful habit tracker"
            link="/habit-tracker"
            imageSrc="images/habittracker.png"
            imageClassName={styles.habitTrackerImg}
          />
        </div>
      </section>
    </div>
  );
};
