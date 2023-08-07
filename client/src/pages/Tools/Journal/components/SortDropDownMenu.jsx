import styles from './../Journal.module.scss';
import { AiOutlineSortAscending, AiFillFileText } from 'react-icons/ai';
import { BsCalendarDate } from 'react-icons/bs';

export const SortDropDownMenu = ({ isSortMenuOpen, setSortingMode,setIsSortMenuOpen }) => {
  const triggerSortingMode = (mode) => {
    setIsSortMenuOpen((prev) => !prev);
    setSortingMode(mode);
  };
  return (
    <div className={`${styles.sortDropDownMenu} ${isSortMenuOpen ? '' : styles.hideMenu}`}>
      <div className={styles.sortMenuElement} onClick={triggerSortingMode('alphabetically')}>
        <AiOutlineSortAscending />
        <span>Alphabetically</span>
      </div>
      <hr />
      <div className={styles.sortMenuElement} onClick={triggerSortingMode('date')}>
        <BsCalendarDate />
        <span>By date</span>
      </div>
      <hr />
      <div className={styles.sortMenuElement} onClick={triggerSortingMode('length')}>
        <AiFillFileText />
        <span>By length</span>
      </div>
    </div>
  );
};
