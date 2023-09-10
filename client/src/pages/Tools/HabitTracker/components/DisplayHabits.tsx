import React, { useContext, useEffect, useState } from 'react';
import styles from './../styles/HabitTracker.module.scss';
import { useHabitTrackerContext } from './HabitContext';
import { MdOutlineLibraryAdd } from 'react-icons/md';

type TDay = [string, boolean];

export const DisplayHabits = () => {
  const { toggleHabitPanelVisibility, habits } = useHabitTrackerContext()!;
  const [formattedHabit, setFormattedHabits] = useState(habits);
  // console.log(
  //   habits.map((habit, index) => {
  //     // console.log('habit: ', habit);
  //     // console.log('Object.entries: ', Object.entries(habit.daysOfWeek));
  //   })
  // );
  useEffect(() => {
    // [{...},{...},{...}]
    const newHabits = { ...habits };
    console.log('ej halo hey: ', habits);
    console.log('exit array: ', newHabits);
  }, [habits]);
  // const test: { [index: string]: string } = { aa: 'yeah' };

  //get current day of the week
  return (
    <div className={styles.displayHabits}>
      <h3>Current Date (13th September 2023)</h3>
      {habits.map((habit, index) => (
        <div key={index} className={styles.habit}>
          <h3>{habit.name}</h3>
          <p>Category: {habit.category}</p>
          <p>Completed: {habit.completed ? 'Yes' : 'No'}</p>
          <>
            Days:
            {Object.entries(habit.daysOfWeek)
              .filter(([day, isCompleted]: TDay) => isCompleted)
              .map(([day, isCompleted]: TDay) => {
                return (
                  <span key={day} className={`${styles.habitDays} ${styles[day]}`}>
                    {day}
                  </span>
                );
              })}
          </>
        </div>
      ))}
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
