import styles from './../Journal.module.scss';

export const Note = ({ id, content, title, date }) => {
  return (
    <div className={styles.note}>
      <big>{title}</big>
      {content}
      <div className={styles.noteFooter}>
        <small>{date}</small>
      </div>
    </div>
  );
};
