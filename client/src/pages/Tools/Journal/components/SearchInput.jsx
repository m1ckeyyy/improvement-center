import styles from './../Journal.module.scss';
import { useJournalContext } from './../Journal';

export const SearchInput = () => {
  const { setSearchInput } = useJournalContext();

  return <input type="text" id="searchInput" className={styles.searchInput} placeholder="🔎 Search notes" onChange={(e) => setSearchInput(e.target.value)} />;
};
