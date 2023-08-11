import styles from './../Journal.module.scss';
import { useScrollable } from './../hooks/useScrollable';
import { useRef } from 'react';
import { EditWindow } from './EditWindow';
import { BsFillPinFill } from 'react-icons/bs';
import { useJournalContext } from '../Journal';
import { handleDelete, handlePin, handleChangeColor } from '../hooks/useEditWindowHooks';

export const Note = ({ id, content, title, date, pinned, color }) => {
  const { setNotes, editMode, pinnedNotesFirst } = useJournalContext();

  const checkIfScrollable = useRef(null);
  const { isScrollable } = useScrollable({ checkIfScrollable });

  const saveUpdatedNote = (e) => {
    e.stopPropagation();
    const newData = e.target.innerText;
    const noteIndex = pinnedNotesFirst.findIndex((note) => note.id === id);
    const updatedNotes = [...pinnedNotesFirst];

    if (e.target.id === 'title') {
      updatedNotes[noteIndex] = {
        ...updatedNotes[noteIndex],
        title: newData,
      };
    }
    if (e.target.id === 'content') {
      updatedNotes[noteIndex] = {
        ...updatedNotes[noteIndex],
        content: newData,
      };
    }
    setNotes(updatedNotes);
  };

  return (
    <div
      className={`
      ${styles.note}
      ${isScrollable ? styles.scrollable : ''}
      ${editMode ? styles.activeEditMode : ''}`}
      ref={checkIfScrollable}
      style={{ backgroundColor: color[0], color: color[1] }}
    >
      {editMode && (
        <EditWindow
          handleDelete={() => handleDelete({ id, pinnedNotesFirst, setNotes })}
          handlePin={() => handlePin({ id, pinnedNotesFirst, setNotes })}
          handleChangeColor={() => handleChangeColor({ color, id, pinnedNotesFirst, setNotes })}
          pinned={pinned}
        />
      )}
      <big contentEditable suppressContentEditableWarning spellCheck={false} id="title" onBlur={saveUpdatedNote}>
        {title}
      </big>
      <div contentEditable suppressContentEditableWarning spellCheck={false} id="content" onBlur={saveUpdatedNote}>
        {content}
      </div>
      <div className={styles.noteFooter}>
        <small>{date}</small>
      </div>
      {pinned ? (
        <div className={styles.pinIcon}>
          <BsFillPinFill size="16" />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
