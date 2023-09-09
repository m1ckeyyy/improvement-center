import React from 'react';
import styles from './styles/HabitTracker.module.scss';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { HabitContextProvider } from './components/HabitContext';
// import { useHabitTrackerContext } from './components/HabitContext';
import { NoHabitsUI } from './components/NoHabitsUI';
import { CalendarContainer } from './styles/CalendarContainer.styled';
import { AddNewHabitPanel } from './components/AddNewHabitPanel';
import { DisplayHabits } from './components/DisplayHabits';
import { HabitDataType } from './components/useHabitData';
import Calendar from 'react-calendar';

type DateValue = Date | null;
type Value = DateValue | [DateValue, DateValue];

const HabitTracker = () => {
  const [value, onChange] = useState<Value>(new Date());
  const [newHabitPanelVisible, setHabitPanelVisible] = useState(false);
  const [habits, setHabits] = useState<HabitDataType[]>([]);

  const toggleHabitPanelVisibility = () => {
    setHabitPanelVisible((prev) => !prev);
  };
  const addHabit = (newHabit: HabitDataType) => {
    console.log('Added Habit: ', newHabit);
    setHabits([...habits, newHabit]);
  };
  const habitTrackerValue = { toggleHabitPanelVisibility, addHabit, habits };
  // console.log(habits);

  return (
    <HabitContextProvider value={habitTrackerValue}>
      <div className={styles.wrapContainer}>
        <div className={styles.overlayContainer}>
          <section className={styles.habitsWrap}>
            <div className={styles.habitsContainer}>
              {habits.length > 0 ? newHabitPanelVisible ? <AddNewHabitPanel /> : <DisplayHabits /> : newHabitPanelVisible ? <AddNewHabitPanel /> : <NoHabitsUI />}
            </div>
          </section>

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

/*
2 scanerios 
0 habits
a) NoHabitsUI
b) AddNewHabitPanel
1 or multiple habits
a) Display Habits
b) AddNewHabitPanel
*/
