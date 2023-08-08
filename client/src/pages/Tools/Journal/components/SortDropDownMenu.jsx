import styles from './../Journal.module.scss';
import { AiOutlineSortAscending, AiFillFileText } from 'react-icons/ai';
import { BsCalendarDate } from 'react-icons/bs';

export const SortDropDownMenu = ({ isSortMenuOpen, setSortingData, sortingData }) => {
  const triggerSortingMode = (mode) => () => {
    setSortingData((prev) => {
      return {
        mode: mode,
        sortOrderRising: prev.mode === mode ? !prev.sortOrderRising : true,
      };
    });
  };

  return (
    <div className={`${styles.sortDropDownMenu} ${isSortMenuOpen ? '' : styles.hideMenu}`}>
      <div className={`${styles.sortMenuElement} ${sortingData.mode === 'alphabetically' ? styles.highlight : ''}`} onClick={triggerSortingMode('alphabetically')}>
        <AiOutlineSortAscending />
        <span>
          Alphabetically<p>{sortingData.mode === 'alphabetically' ? (sortingData.sortOrderRising ? '(A-Z)' : '(Z-A)') : ''}</p>
        </span>
      </div>
      <hr />
      <div className={`${styles.sortMenuElement} ${sortingData.mode === 'date' ? styles.highlight : ''}`} onClick={triggerSortingMode('date')}>
        <BsCalendarDate />
        <span>
          By date<p>{sortingData.mode === 'date' ? (sortingData.sortOrderRising ? '(Newest)' : '(Oldest)') : ''}</p>
        </span>
      </div>
      <hr />
      <div className={`${styles.sortMenuElement} ${sortingData.mode === 'length' ? styles.highlight : ''}`} onClick={triggerSortingMode('length')}>
        <AiFillFileText />
        <span>
          By length<p>{sortingData.mode === 'length' ? (sortingData.sortOrderRising ? '(Largest)' : '(Smallest)') : ''}</p>
        </span>
      </div>
    </div>
  );
};
