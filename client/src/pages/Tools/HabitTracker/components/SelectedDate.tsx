import React from 'react';
import styles from './../styles/HabitTracker.module.scss';
import { useHabitTrackerContext } from './HabitContext';

export const SelectedDate = () => {
  const { selectedDay } = useHabitTrackerContext()!;

  const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  const currentDate = new Date(selectedDay).toLocaleDateString('en-US', options);

  return <h3 className={styles.currentDate}>Selected: ({currentDate})</h3>;
};
