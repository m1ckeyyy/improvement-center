import styles from './Journal.module.scss';
import { NotesList } from './components/NotesList';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer } from 'react-toastify';
import { IconButtons } from './components/IconButtons';
import { SortMenu } from './components/SortMenu';
import { useFilterNotes } from './components/useFilterNotes';
import { useSorting } from './components/useSorting';

const Journal = () => {
  //fetching
  const [searchInput, setSearchInput] = useState('');
  const [editMode, setEditMode] = useState(false);

  const [sortingMode, setSortingMode] = useState('date'); //Length, Alphabetically
  const [notes, setNotes] = useState([
    { id: nanoid(), title: 'best note', content: 'This is note', date: '5/08/2023' },
    { id: nanoid(), title: 'Big man story', content: 'Is it note zwei?', date: '1/08/2023' },
    { id: nanoid(), title: 'The title', content: 'This is note drei', date: '7/08/2023' },
  ]);
  const filteredNotes = useFilterNotes({notes, searchInput});
  const sortedNotes = useSorting({ filteredNotes, sortingMode });
  //use filteredNotes in Sorting

  return (
    <div className={styles.wrapContainer}>
      <div className={styles.overlayContainer}>
        <div className={styles.appHeader}>
          <input type="text" id="searchInput" className={styles.searchInput} placeholder="🔎 Search notes" onChange={(e) => setSearchInput(e.target.value)} />
          <SortMenu setSortingMode={setSortingMode}/>
          <IconButtons />
        </div>

        <NotesList notes={sortedNotes} setNotes={setNotes} />
        <ToastContainer />
      </div>
    </div>
  );
};
export default Journal;
