import React from 'react';
import styles from './../HabitTracker.module.scss';
import { HiOutlineDocumentAdd } from 'react-icons/hi';
import { MdOutlineLibraryAdd } from 'react-icons/md';

export const NoHabitsUI = () => {
  return (
    <div className={styles.noHabitsUI}>
      <span className={styles.addFirstHabitBtn}>
        Add your first habit <MdOutlineLibraryAdd />
      </span>
    </div>
  );
};
