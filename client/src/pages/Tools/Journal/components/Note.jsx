import styles from './../Journal.module.scss';
import { useScrollable } from './../hooks/useScrollable';
import { useRef } from 'react';
import { EditWindow } from './EditWindow';

export const Note = ({ id, content, title, date, editMode, onDelete }) => {
  const checkIfScrollable = useRef(null);
  const { isScrollable } = useScrollable({ checkIfScrollable });

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className={`${styles.note} ${isScrollable ? styles.scrollable : ''} ${editMode ? styles.activeEditMode : ''}`} ref={checkIfScrollable}>
      {editMode && <EditWindow handleDelete={handleDelete} />} <big>{title}</big>
      <div>{content}</div>
      <div className={styles.noteFooter}>
        <small>{date}</small>
      </div>
    </div>
  );
};
