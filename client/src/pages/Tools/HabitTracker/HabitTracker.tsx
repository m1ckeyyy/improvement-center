import React from 'react';
import styles from './HabitTracker.module.scss';
import { useContext, createContext, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const HabitTrackerContext = createContext({});
export const useHabitTrackerContext = () => useContext(HabitTrackerContext);

const HabitTracker = () => {
  const [value, onChange] = useState<Value>(new Date());

  const habitTrackerValue = {};
  return (
    <HabitTrackerContext.Provider value={habitTrackerValue}>
      <div className={styles.wrapContainer}>
        <div className={styles.overlayContainer}>
          <Calendar onChange={onChange} value={value} />
        </div>
        <ToastContainer />
      </div>
    </HabitTrackerContext.Provider>
  );
};
export default HabitTracker;
