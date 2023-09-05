import React, { useContext } from 'react';
import styles from './../styles/HabitTracker.module.scss';
import { HabitContext } from './HabitContext';

export const DisplayHabits = () => {
  const { toggleHabitPanelVisibility } = useContext(HabitContext);

  return (
    <>
      <div>DisplayHabits</div>
      <button onClick={toggleHabitPanelVisibility}>Add new habit</button>
    </>
  );
};
