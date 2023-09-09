import React, { useContext } from 'react';
import styles from './../styles/HabitTracker.module.scss';
import { useHabitTrackerContext } from './HabitContext';
import { MdOutlineLibraryAdd } from 'react-icons/md';

export const NoHabitsUI = () => {
  const { toggleHabitPanelVisibility } = useHabitTrackerContext()!;

  return (
    <div className={styles.noHabitsUI}>
      <span className={styles.addFirstHabitBtn} onClick={toggleHabitPanelVisibility}>
        Add your first habit <MdOutlineLibraryAdd />
      </span>
    </div>
  );
};
