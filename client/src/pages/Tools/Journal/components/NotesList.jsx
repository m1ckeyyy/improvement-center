import styles from './../Journal.module.scss';
import { Note } from './Note.jsx';
import { NewNote } from './NewNote';
import { useJournalContext } from './../Journal';

export const NotesList = () => {
  const { sortedNotes, setNotes, editMode, pinnedNotesFirst } = useJournalContext();
  const handleDeleteNote = (id) => {
    const updatedNotes = sortedNotes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };
  const handlePinNote = (id) => {
    console.log(id);
    const updatedNotes = sortedNotes.map((note) => (note.id === id ? { ...note, pinned: !note.pinned } : note));
    setNotes(updatedNotes);
  };
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
        key={note.id} />
      )}
    </div>
  );
};
