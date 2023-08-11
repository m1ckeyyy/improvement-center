import styles from './../Journal.module.scss';
import { Note } from './Note.jsx';
import { NewNote } from './NewNote';
import { useJournalContext } from './../Journal';
import { handleDelete, handlePin } from '../hooks/useEditWindowHooks';

export const NotesList = () => {
  const { sortedNotes, setNotes, editMode, pinnedNotesFirst, isEditTextMode, setIsEditTextMode } = useJournalContext();

  const handleDeleteNote = (id) => handleDelete({ id, sortedNotes, setNotes });
  const handlePinNote = (id) => handlePin({ id, sortedNotes, setNotes });

  const prioritizedAndSortedNotes = pinnedNotesFirst(sortedNotes);

  return (
    <div className={styles.app}>
      <NewNote />
      {prioritizedAndSortedNotes.map((note) =>
        //prettier-ignore
        <Note 
        onDelete={handleDeleteNote}
        onPin={handlePinNote}
        editMode={editMode}
        id={note.id}
        content={note.content}
        date={note.date}
        title={note.title}
        pinned={note.pinned}
        key={note.id}
        isEditTextMode={isEditTextMode} 
        setIsEditTextMode={setIsEditTextMode}/>
      )}
    </div>
  );
};
