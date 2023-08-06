import styles from './../Journal.module.scss';
import { useRef, useEffect, useState } from 'react';

export const Note = ({ id, content, title, date }) => {
  const checkIfScrollable = useRef(null);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const element = checkIfScrollable.current;

    if (element) {
      setIsScrollable(element.scrollHeight > element.clientHeight);
    }
  }, []);

  return (
    <div className={isScrollable ? `${styles.note} ${styles.scrollable}` : styles.note} ref={checkIfScrollable} key={id}>
      {/* {isScrollable ? ' HAHA' : 'NENE'} */}
      <big>{title}</big>
      <div>{content}</div>
      <div className={styles.noteFooter}>
        <small>{date}</small>
      </div>
    </div>
  );
};
