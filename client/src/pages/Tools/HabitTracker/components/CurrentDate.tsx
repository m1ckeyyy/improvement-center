import React from 'react';
import styles from './../styles/HabitTracker.module.scss';

export const CurrentDate = () => {
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  const currentDate = new Date().toLocaleDateString('en-US', options);

  return <h3 className={styles.currentDate}>Today is {currentDate}</h3>;
};
