import styles from './../Journal.module.scss';
import { Note } from './Note.jsx';
import { NewNote } from './NewNote';
import { useJournalContext } from './../Journal';

export const NotesList = () => {
  const { pinnedNotesFirst } = useJournalContext();

  return (
    <div className={styles.app}>
      <NewNote />
      {pinnedNotesFirst.map((note) => (
        <Note id={note.id} title={note.title} content={note.content} date={note.date} pinned={note.pinned} key={note.id} color={note.color} />
      ))}
    </div>
  );
};
