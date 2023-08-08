import styles from './../Journal.module.scss';
import { Note } from './Note.jsx';
import { NewNote } from './NewNote';

export const NotesList = ({ notes, setNotes, editMode }) => {
  
  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes); 
  };

  return (
    <div className={styles.app}>
      <NewNote setNotes={setNotes} />
      {notes.map((note) => (
        <Note onDelete={handleDeleteNote} editMode={editMode} id={note.id} content={note.content} date={note.date} title={note.title} key={note.id} />
      ))}
    </div>
  );
};
