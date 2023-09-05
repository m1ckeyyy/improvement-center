import React from 'react';
import styles from './styles/HabitTracker.module.scss';
import { useContext, createContext, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { HabitContextProvider } from './components/HabitContext';
import { NoHabitsUI } from './components/NoHabitsUI';
import { CalendarContainer } from './styles/CalendarContainer.styled';
import Calendar from 'react-calendar';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const HabitTrackerContext = createContext({});
export const useHabitTrackerContext = () => useContext(HabitTrackerContext);

const HabitTracker = () => {
  const [value, onChange] = useState<Value>(new Date());
  const [newHabitPanelVisible, setHabitPanelVisible] = useState(false);

  const TEST_VALUE = 'Hello World';
  const habitTrackerValue = { setHabitPanelVisible };

  const habits = [];
  return (
    <HabitContextProvider value={habitTrackerValue}>
      <div className={styles.wrapContainer}>
        <div className={styles.overlayContainer}>
          <section className={styles.habitDisplay}>{habits.length > 0 ? '<DisplayHabits/>' : <NoHabitsUI />}</section>
          <section className={styles.calendarWrap}>
            <CalendarContainer>
              <Calendar onChange={onChange} value={value} className={styles.reactCalendar} locale="en-US" />
            </CalendarContainer>
          </section>
        </div>
        <ToastContainer />
      </div>
    </HabitContextProvider>
  );
};
export default HabitTracker;
