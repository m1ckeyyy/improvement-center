import React, { useContext } from 'react';
import styles from './../HabitTracker.module.scss';
import { HabitContext } from './HabitContext';

export const AddNewHabitPanel = () => {
  const { toggleHabitPanelVisibility } = useContext(HabitContext);

  return (
    <>
      <div>AddNewHabitPanel</div>
      <button onClick={toggleHabitPanelVisibility}>Cancel</button>
    </>
  );
};
