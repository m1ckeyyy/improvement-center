import styles from './../Journal.module.scss';

export const Note = ({ id, text, date }) => {
  return (
    <div className={styles.note}>
      {text}
      <div className={styles.noteFooter}>
        <small>{date}</small>
      </div>
    </div>
  );
};
