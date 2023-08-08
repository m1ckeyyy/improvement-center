import styles from './../Journal.module.scss';
import { useScrollable } from './../hooks/useScrollable';
import { useRef } from 'react';

export const Note = ({ id, content, title, date }) => {
  const checkIfScrollable = useRef(null);
  const { isScrollable } = useScrollable({ checkIfScrollable });

  return (
    <div className={isScrollable ? `${styles.note} ${styles.scrollable}` : styles.note} ref={checkIfScrollable}>
      <big>{title}</big>
      <div>{content}</div>
      <div className={styles.noteFooter}>
        <small>{date}</small>
      </div>
    </div>
  );
};
