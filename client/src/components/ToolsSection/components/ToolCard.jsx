import styles from './../ToolsSection.module.scss';
import { BsArrowUpRightSquare } from 'react-icons/bs';

export function ToolCard({ title, description, imageSrc, imageClassName, buttonClassName, link }) {
  return (
    <div className={styles.tool}>
      <h2>{title}</h2>
      <p>{description}</p>

      <a href={link}>
        <img src={imageSrc} alt={title} className={imageClassName} />
      </a>

      <a href={link} className={buttonClassName}>
        Go To {title} <BsArrowUpRightSquare size="22" />
      </a>
    </div>
  );
}
// <div className={styles.tool}>
// <h2>Pomodoro Timer</h2>
// <p>Boost productivity and focus with the power of the pomodoro technique</p>

// <a href="/pomodoro">
//   <img src="images/pomodoro2.png" alt="pomodoro" className={styles.pomodoroImg} />
// </a>

// <a href="/pomodoro" className={styles.hyperlink}>
//   Go To Pomodoro <BsArrowUpRightSquare size="22" />
// </a>
// </div>
