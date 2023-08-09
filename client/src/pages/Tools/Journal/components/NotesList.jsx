import styles from './../Journal.module.scss';
import { Note } from './Note.jsx';
import { NewNote } from './NewNote';
import { useJournalContext } from './../Journal';

export const NotesList = () => {
  const { sortedNotes, setNotes, editMode } = useJournalContext();
  const handleDeleteNote = (id) => {
    const updatedNotes = sortedNotes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className={styles.app}>
      <NewNote />
      {sortedNotes.map((note) => (
        <Note onDelete={handleDeleteNote} editMode={editMode} id={note.id} content={note.content} date={note.date} title={note.title} key={note.id} />
      ))}
    </div>
  );
};
