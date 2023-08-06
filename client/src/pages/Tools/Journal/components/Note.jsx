import styles from './../Journal.module.scss';
import { useScrollable } from './useScrollable';
import { useRef, useEffect, useState } from 'react';

export const Note = ({ id, content, title, date }) => {
  const checkIfScrollable = useRef(null);
  const { isScrollable } = useScrollable({ checkIfScrollable });

  return (
    <div className={isScrollable ? `${styles.note} ${styles.scrollable}` : styles.note} ref={checkIfScrollable}>
      {/* {isScrollable ? ' HAHA' : 'NENE'} */}
      <big>{title}</big>
      <div>{content}</div>
      <div className={styles.noteFooter}>
        <small>{date}</small>
      </div>
    </div>
  );
};
