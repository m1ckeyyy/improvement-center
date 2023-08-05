import styles from './Journal.module.scss';
const Journal = () => {
  return (
    <div className={styles.overlayContainer}>
      <div className={styles.inputWrap}>
        <input type="text" id="searchInput" className={styles.searchInput} placeholder="🔎 Search notes" />
        <div className={styles.app}>
          <div className={styles.note}>Note 1</div>
          <div className={styles.note}>Note 2</div>
          <div className={styles.note}>Note 3</div>
          <div className={styles.note}>Note 4</div>
        </div>
      </div>
    </div>
  );
};
export default Journal;
