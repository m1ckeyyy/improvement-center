import React, { useEffect, useState } from 'react';
import styles from './../styles/HabitTracker.module.scss';
// import { useHabitTrackerContext } from './HabitContext';
import { useTimeFormatState } from '../hooks/useTimeFormatState';

export const Clock = () => {
  const [time, setTime] = useState(new Date());
  const { timeFormat, toggleTimeFormat } = useTimeFormatState();

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  };

  if (timeFormat === 'long') {
    options.weekday = 'long';
    options.month = 'long';
  }

  const currentDate = new Date(time).toLocaleDateString('en-GB', options);

  return (
    <div className={styles.clock} onClick={toggleTimeFormat}>
      <span>{currentDate}</span>
    </div>
  );
};
