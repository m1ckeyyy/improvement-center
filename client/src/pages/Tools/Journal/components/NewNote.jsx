import styles from './../Journal.module.scss';

export const NewNote = ({ setNotes }) => {
  return (
    <form className={`${styles.note} ${styles.newNote}`}>
      <button className={styles.submitNote} type="submit">
        ADD +
      </button>
    </form>
  );
};
