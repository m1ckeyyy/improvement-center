import styles from './../Journal.module.scss';
import { Note } from './Note.jsx';
import { NewNote } from './NewNote';

export const NotesList = ({ notes, setNotes }) => {
  return (
    <div className={styles.app}>
      <NewNote setNotes={setNotes}/>
      {notes.map((note) => (
        <Note id={note.id} content={note.content} date={note.date} title={note.title} />
      ))}
    </div>
  );
};
