import styles from './../Journal.module.scss';

export const Note = ({ id, text, title, date }) => {
  return (
    <div className={styles.note}>
      <big>{title}</big>
      {text}
      <div className={styles.noteFooter}>
        <small>{date}</small>
      </div>
    </div>
  );
};
