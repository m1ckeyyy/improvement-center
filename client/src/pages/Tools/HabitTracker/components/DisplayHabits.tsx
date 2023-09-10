import React, { useContext, useEffect, useState } from 'react';
import styles from './../styles/HabitTracker.module.scss';
import { useHabitTrackerContext } from './HabitContext';
import { MdOutlineLibraryAdd } from 'react-icons/md';
type TDay = [string, boolean];

export const DisplayHabits = () => {
  const { toggleHabitPanelVisibility, habits } = useHabitTrackerContext()!;

  // const test: { [index: string]: string } = { aa: 'yeah' };

  //get current day of the week
  return (
    <div className={styles.displayHabits}>
      <h3>Current Date (13th September 2023)</h3>
      {habits.map((habit, index) => {
        const noDaysSelected = Object.values(habit.daysOfWeek).every((e) => e === false);
        if (noDaysSelected) {
          for (const key of Object.keys(habit.daysOfWeek)) {
            habit.daysOfWeek[key as keyof typeof habit.daysOfWeek] = true;
          }
        }
        return (
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
