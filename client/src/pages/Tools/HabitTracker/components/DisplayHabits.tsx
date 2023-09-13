import React from 'react';
import styles from './../styles/HabitTracker.module.scss';
import { useHabitTrackerContext } from './HabitContext';
import { MdOutlineLibraryAdd } from 'react-icons/md';
import { useFormattedHabits } from './../hooks/useFormattedHabits';
import { CurrentDate } from './CurrentDate';

export const DisplayHabits = () => {
  const { toggleHabitPanelVisibility, habits } = useHabitTrackerContext()!;
  const { formattedHabits } = useFormattedHabits(habits);
  // console.log('f: ', formattedHabits);
  // const test: { [index: string]: string } = { aa: 'yeah' };

  return (
    <div className={styles.displayHabits}>
      <CurrentDate />

      {formattedHabits.map((habit, index) => {
        return (
          <div key={index} className={styles.habit}>
            <h3>{habit.name}</h3>
            <p>Category: {habit.category}</p>
            <p>Completed: {habit.completed ? 'Yes' : 'No'}</p>
            <span className={styles.daysLabel}>Days:</span>
            <span className={styles.daysTiles}>
              {Object.entries(habit.daysOfWeek).map(([day, _]) => {
                return (
                  <span key={day} className={`${styles.habitDays} ${styles[day]}`}>
                    {day}
                  </span>
                );
              })}
            </span>
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
