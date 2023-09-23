import React from 'react';
import styles from './../styles/HabitTracker.module.scss';
import { useHabitTrackerContext } from './HabitContext';
import { useTimeFormatState } from '../hooks/useTimeFormatState';

export const SelectedDate = () => {
  const { selectedDay } = useHabitTrackerContext()!;
  const { timeFormat, toggleTimeFormat } = useTimeFormatState();

  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'numeric', year: 'numeric' };

  if (timeFormat === 'long') {
    options.weekday = 'long';
    options.month = 'long';
  }

  const selectedDate = new Date(selectedDay).toLocaleDateString('en-GB', options);

  return (
    <h3 className={styles.selectedDate}>
      Your habits for&nbsp; <span onClick={toggleTimeFormat}>{selectedDate}</span>
    </h3>
  );
};
