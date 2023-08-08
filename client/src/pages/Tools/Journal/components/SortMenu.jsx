import styles from './../Journal.module.scss';
import { FiChevronDown } from 'react-icons/fi';
import { SortDropDownMenu } from './SortDropDownMenu';
import { BiSortDown } from 'react-icons/bi';
import { useState, useRef } from 'react';
import { useGlobalClick } from './../hooks/useGlobalClick';

export const SortMenu = ({ sortingData, setSortingData }) => {
  const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
  const dropDownMenuRef = useRef(null);

  useGlobalClick({ dropDownMenuRef, setIsSortMenuOpen });

  const toggleSortMenu = (event) => {
    if (dropDownMenuRef.current && dropDownMenuRef.current.contains(event.target)) {
      event.stopPropagation();
      return;
    }
    setIsSortMenuOpen((prev) => !prev);
  };

  return (
    <div className={styles.sortMenu} onClick={toggleSortMenu}>
      <BiSortDown size="16" />
      <span>Sort by</span> <FiChevronDown size="16" />
      <div ref={dropDownMenuRef}>
        <SortDropDownMenu isSortMenuOpen={isSortMenuOpen} sortingData={sortingData} setSortingData={setSortingData} setIsSortMenuOpen={setIsSortMenuOpen} />
      </div>
    </div>
  );
};
