import styles from './../Journal.module.scss';
import { useScrollable } from './../hooks/useScrollable';
import { useRef } from 'react';
import { EditWindow } from './EditWindow';

export const Note = ({ id, content, title, date, editMode }) => {
  const checkIfScrollable = useRef(null);
  const { isScrollable } = useScrollable({ checkIfScrollable });

  return (
    <div className={`${styles.note} ${isScrollable ? styles.scrollable : ''} ${editMode ? styles.editNoteView : ''}`} ref={checkIfScrollable}>
      <div className={styles.editView}>
        <EditWindow />
      </div>
      <big>{title}</big>
      <div>{content}</div>
      <div className={styles.noteFooter}>
        <small>{date}</small>
      </div>
    </div>
  );
};
