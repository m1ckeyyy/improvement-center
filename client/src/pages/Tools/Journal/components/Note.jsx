import styles from './../Journal.module.scss';
import { useScrollable } from './../hooks/useScrollable';
import { useRef } from 'react';
import { EditWindow } from './EditWindow';
import { BsFillPinFill } from 'react-icons/bs';
export const Note = ({ id, content, title, date, pinned, editMode, onDelete, onPin }) => {
  const checkIfScrollable = useRef(null);
  const { isScrollable } = useScrollable({ checkIfScrollable });

  const handleDelete = () => onDelete(id);
  const handlePin = () => onPin(id);

  return (
    <div className={`${styles.note} ${isScrollable ? styles.scrollable : ''} ${editMode ? styles.activeEditMode : ''}`} ref={checkIfScrollable}>
      {editMode && <EditWindow handleDelete={handleDelete} handlePin={handlePin} pinned={pinned} />} <big>{title}</big>
      <div>{content}</div>
      <div className={styles.noteFooter}>
        <small>{date}</small>
      </div>
      {pinned ? (
        <div className={styles.pinIcon}>
          <BsFillPinFill size="16" />{' '}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
