import styles from './Journal.module.scss';
import { createContext, useContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { NotesList } from './components/NotesList';
import { AppHeader } from './components/AppHeader';
import { useFilterNotes } from './hooks/useFilterNotes';
import { useSorting } from './hooks/useSorting';
import { usePinSorting } from './hooks/usePinSorting';
import { useNotesFetch } from './hooks/useNotesFetch';

const JournalContext = createContext();
export const useJournalContext = () => useContext(JournalContext);

const Journal = () => {                   
  const [searchInput, setSearchInput] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [sortingData, setSortingData] = useState({ mode: 'date', sortOrderRising: true });
  const { notes, setNotes } = useNotesFetch();
  const searchbarFilteredNotes = useFilterNotes({ notes, searchInput });
  const sortedNotes = useSorting({ searchbarFilteredNotes, sortingData });
  const pinnedNotesFirst = usePinSorting({ sortedNotes });

  const journalContextValue = {
    setSearchInput,
    sortingData,
    setSortingData,
    editMode,
    setEditMode,
    sortedNotes,
    setNotes,
    notes,
    pinnedNotesFirst,
  };
  useEffect(() => {
    // console.log(notes);
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);
  return (
    <JournalContext.Provider value={journalContextValue}>
      <div className={styles.wrapContainer}>
        <div className={`${styles.overlayContainer} ${editMode ? styles.editMode : ''}`}>
          <AppHeader />
          <NotesList />
        </div>
      </div>
      <ToastContainer />
    </JournalContext.Provider>
  );
};
export default Journal;
