import React, { useContext } from 'react';
import styles from './../styles/HabitTracker.module.scss';
import { useHabitTrackerContext } from './HabitContext';

export const DisplayHabits = () => {
  const { toggleHabitPanelVisibility, habits } = useHabitTrackerContext()!;

  return (
    <>
      <div>DisplayHabits</div>
      <button onClick={toggleHabitPanelVisibility}>Add new habit</button>
    </>
  );
};
