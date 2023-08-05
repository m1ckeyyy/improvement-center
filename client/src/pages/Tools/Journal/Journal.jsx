import styles from './Journal.module.scss';
import { Note } from './components/Note';
import { NewNote } from './components/NewNote';
import { NotesList } from './components/NotesList';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const Journal = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: 'best note',
      text: 'This is noteThis is noteThis is noteThis is noteThis is noteThis is noteThis is noteThis is noteThis is noteThis is noteThis is noteThis is noteThis is note',
      date: '5/08/2023',
    },
    { id: nanoid(), title: 'Big man story', text: 'Is it note zwei?', date: '1/08/2023' },
    { id: nanoid(), title: 'The title', text: 'This is note drei', date: '7/08/2023' },
  ]);

  return (
    <div className={styles.wrapContainer}>
      <div className={styles.overlayContainer}>
        <input type="text" id="searchInput" className={styles.searchInput} placeholder="🔎 Search notes" />
        {/* <div className={styles.app}> */}
        {/* <NewNote /> */}
        <NotesList notes={notes} setNotes={setNotes} />
        {/* </div> */}
      </div>
    </div>
  );
};
export default Journal;
