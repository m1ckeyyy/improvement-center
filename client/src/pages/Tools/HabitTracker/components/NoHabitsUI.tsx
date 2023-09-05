import React, { useContext } from 'react';
import styles from './../styles/HabitTracker.module.scss';
import { HabitContext } from './HabitContext';
import { HiOutlineDocumentAdd } from 'react-icons/hi';
import { MdOutlineLibraryAdd } from 'react-icons/md';

export const NoHabitsUI = () => {
  const { setHabitPanelVisible } = useContext(HabitContext);

  const toggleHabitPanelVisibility = () => {
    setHabitPanelVisible((prev) => !prev);
  };

  return (
    <div className={styles.noHabitsUI}>
      <span className={styles.addFirstHabitBtn} onClick={toggleHabitPanelVisibility}>
        Add your first habit <MdOutlineLibraryAdd />
      </span>
    </div>
  );
};
