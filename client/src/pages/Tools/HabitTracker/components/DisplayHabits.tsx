import React from 'react';
import styles from './../styles/HabitTracker.module.scss';
import { useHabitTrackerContext } from './HabitContext';
import { MdOutlineLibraryAdd } from 'react-icons/md';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { useFormattedHabits } from './../hooks/useFormattedHabits';
import { HabitDataType } from './../hooks/useHabitData';
import { SelectedDate } from './SelectedDate';

export const DisplayHabits = () => {
  const { toggleHabitPanelVisibility, habits, setHabits } = useHabitTrackerContext()!;
  const { formattedHabits } = useFormattedHabits(habits);
  // console.log('f: ', formattedHabits);
  // const test: { [index: string]: string } = { aa: 'yeah' };

  const toggleHabitCompletion = (habitToUpdate: HabitDataType) => {
    setHabits((habits: HabitDataType[]) => habits.map((habit) => (habit.id === habitToUpdate.id ? { ...habit, completed: !habit.completed } : habit)));
  };

  return (
    <div className={styles.displayHabits}>
      <SelectedDate />

      {formattedHabits.map((habit, index) => {
        return (
          <div key={index} className={styles.habit}>
            <h3>{habit.name}</h3>
            <p>Category: {habit.category}</p>
            <p className={styles.completedToggle} onClick={() => toggleHabitCompletion(habit)}>
              Completed: {habit.completed ? <BsToggleOn size="25" /> : <BsToggleOff size="25" />}
            </p>
            <div className={styles.daysTiles}>
              {Object.entries(habit.daysOfWeek).map(([day, _]) => {
                return (
                  <span key={day} className={`${styles.habitDays} ${styles[day]}`}>
                    {day}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
      <div className={styles.buttonsContainer}>
        <button onClick={toggleHabitPanelVisibility} className={styles.newHabitBtn}>
          <span>Add new habit</span> <MdOutlineLibraryAdd size={24} />
        </button>
        <button onClick={toggleHabitPanelVisibility} className={styles.editHabitBtn}>
          Edit habits
        </button>
      </div>
    </div>
  );
};
