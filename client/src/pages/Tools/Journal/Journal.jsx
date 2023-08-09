import styles from './Journal.module.scss';
import { createContext, useContext, useState } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer } from 'react-toastify';
import { NotesList } from './components/NotesList';
import { AppHeader } from './components/AppHeader';
import { useFilterNotes } from './hooks/useFilterNotes';
import { useSorting } from './hooks/useSorting';

const JournalContext = createContext();
export const useJournalContext = () => useContext(JournalContext);

const Journal = () => {
  //fetching
  const [searchInput, setSearchInput] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [sortingData, setSortingData] = useState({ mode: 'date', sortOrderRising: true });
  const [notes, setNotes] = useState([
    { id: nanoid(), title: 'best note', content: 'This is note', date: '5/08/2023' },
    { id: nanoid(), title: 'Big man story', content: 'Is it note zwei?', date: '1/08/2023' },
    { id: nanoid(), title: 'The title', content: 'This is note drei', date: '7/08/2023' },
  ]);
  const filteredNotes = useFilterNotes({ notes, searchInput });
  const sortedNotes = useSorting({ filteredNotes, sortingData });

  const journalContextValue = { setSearchInput, sortingData, setSortingData, editMode, setEditMode, sortedNotes, setNotes, notes };

  return (
    <JournalContext.Provider value={journalContextValue}>
      <div className={styles.wrapContainer}>
        <div className={`${styles.overlayContainer} ${editMode ? styles.editMode : ''}`}>
          <AppHeader />
          <NotesList />
          <ToastContainer />
        </div>
      </div>
    </JournalContext.Provider>
  );
};
export default Journal;
