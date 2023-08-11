import styles from './Journal.module.scss';
import { createContext, useContext, useState } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer } from 'react-toastify';
import { NotesList } from './components/NotesList';
import { AppHeader } from './components/AppHeader';
import { useFilterNotes } from './hooks/useFilterNotes';
import { useSorting } from './hooks/useSorting';
import { usePinSorting } from './hooks/usePinSorting';

const JournalContext = createContext();
export const useJournalContext = () => useContext(JournalContext);

const Journal = () => {
  const [searchInput, setSearchInput] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [sortingData, setSortingData] = useState({ mode: 'date', sortOrderRising: true });
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      title: 'Exploring the Wilderness',
      content:
        'Embarked on a thrilling journey through untouched landscapes. From the dense forests to the rugged mountains, every step unveiled a new world waiting to be discovered. The crisp air and the calls of wild creatures created a symphony that echoed in my soul. I crossed rivers, climbed cliffs, and camped under the starlit sky. Each day brought new challenges and rewards, reminding me of the beauty and resilience of nature. This adventure will forever be etched in my heart.',
      date: '2023-08-10',
      pinned: false,
      color: 'lightgray',
    },
    {
      id: nanoid(),
      title: 'Recipe Discovery',
      content: 'Discovered a delicious new recipe that combines unexpected flavors.',
      date: '2023-08-09',
      pinned: false,
      color: 'lightgray',
    },
    {
      id: nanoid(),
      title: 'Artistic Inspirations',
      content: 'Found inspiration in the colors of sunset for a new painting project.',
      date: '2023-08-08',
      pinned: false,
      color: 'lightgray',
    },
  ]);

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
  console.log(notes);
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
