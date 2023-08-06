import styles from './Journal.module.scss';
import { NotesList } from './components/NotesList';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer } from 'react-toastify';
import { IconButtons } from './components/IconButtons';

const Journal = () => {
  //fetching
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: 'best note',
      content:
        'This is noteThis is noteThis is noteThis is noteThis inoteThis is noteThis noteThis is noteThis noteThis is noteThis noteThis is noteThis noteThis is noteThis noteThis is noteThis noteThis is noteThis noteThis is noteThis s noteThis is noteThis is noteThis is noteThis is noteThis is noteThis is noteThis is noteThis is note',
      date: '5/08/2023',
    },
    { id: nanoid(), title: 'Big man story', content: 'Is it note zwei?', date: '1/08/2023' },
    { id: nanoid(), title: 'The title', content: 'This is note drei', date: '7/08/2023' },
  ]);

  return (
    <div className={styles.wrapContainer}>
      <div className={styles.overlayContainer}>
        <div className={styles.appHeader}>
          <input type="text" id="searchInput" className={styles.searchInput} placeholder="🔎 Search notes" />
          <IconButtons />
        </div>

        <NotesList notes={notes} setNotes={setNotes} />
        <ToastContainer />
      </div>
    </div>
  );
};
export default Journal;

/*
1 wielki textarea w ktorym bedzie input bez scrolla !!! 
*/
