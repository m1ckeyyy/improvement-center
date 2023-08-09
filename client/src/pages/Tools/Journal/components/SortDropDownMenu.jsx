import styles from './../Journal.module.scss';
import { AiOutlineSortAscending, AiFillFileText } from 'react-icons/ai';
import { BsCalendarDate } from 'react-icons/bs';
import { SortingOption } from './SortingOption';

export const SortDropDownMenu = ({ isSortMenuOpen }) => {
  return (
    <div className={`${styles.sortDropDownMenu} ${isSortMenuOpen ? '' : styles.hideMenu}`}>
      <SortingOption label="Alphabetically" type="alphabetically" icon={<AiOutlineSortAscending />} orderLabels={['(A-Z)', '(Z-A)']} />

      <hr />
      <SortingOption label="By date" type="date" icon={<BsCalendarDate />} orderLabels={['(Newest)', '(Oldest)']} />

      <hr />
      <SortingOption label="By length" type="length" icon={<AiFillFileText />} orderLabels={['(Largest)', '(Smallest)']} />
    </div>
  );
};
