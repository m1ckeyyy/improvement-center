import styles from './../Journal.module.scss';
import { Note } from './Note.jsx';
import { NewNote } from './NewNote';

export const NotesList = ({ notes, setNotes }) => {
  notes.map((note) => console.log(note.id));

  return (
    <div className={styles.app}>
      <NewNote setNotes={setNotes} />
      {notes.map((note) => (
        <Note id={note.id} content={note.content} date={note.date} title={note.title} key={note.id} />
      ))}
    </div>
  );
};
