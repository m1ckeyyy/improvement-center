import styles from './../Journal.module.scss';
import { AiOutlineSortAscending, AiFillFileText } from 'react-icons/ai';
import { BsCalendarDate } from 'react-icons/bs';
export const SortDropDownMenu = ({ isSortMenuOpen }) => {
  return (
    <div className={`${styles.sortDropDownMenu} ${isSortMenuOpen ? '' : styles.hideMenu}`}>
      <div className={styles.sortMenuElement}>
        <AiOutlineSortAscending />
        <span>Alphabetically</span>
      </div>
      <hr />
      <div className={styles.sortMenuElement}>
        <BsCalendarDate />
        <span>By date</span>
      </div>
      <hr />
      <div className={styles.sortMenuElement}>
        <AiFillFileText />
        <span>By length</span>
      </div>
    </div>
  );
};
