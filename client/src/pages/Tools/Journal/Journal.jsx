import styles from './Journal.module.scss';
import { Note } from './components/Note';
import { NewNote } from './components/NewNote';
import { NotesList } from './components/NotesList';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const Journal = () => {
  const [notes, setNotes] = useState([
    { id: nanoid(), text: 'This is note', date: '5/08/2023' },
    { id: nanoid(), text: 'Is it note zwei?', date: '1/08/2023' },
    { id: nanoid(), text: 'This is note drei', date: '7/08/2023' },
  ]);

  return (
    <div className={styles.wrapContainer}>
      <div className={styles.overlayContainer}>
        <input type="text" id="searchInput" className={styles.searchInput} placeholder="🔎 Search notes" />
        <div className={styles.app}>
          {/* <NewNote />
          <Note />
          <Note />
          <Note />
          <Note /> */}
          <NotesList notes={notes} />
        </div>
      </div>
    </div>
  );
};
export default Journal;
