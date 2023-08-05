import styles from './../Journal.module.scss';

export const NewNote = () => {
  return <div className={`${styles.note} ${styles.newNote}`}>New Note +</div>;
};
