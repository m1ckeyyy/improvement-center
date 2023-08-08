import styles from './../Journal.module.scss';

export const SearchInput = ({ setSearchInput }) => {
  return <input type="text" id="searchInput" className={styles.searchInput} placeholder="🔎 Search notes" onChange={(e) => setSearchInput(e.target.value)} />;
};
