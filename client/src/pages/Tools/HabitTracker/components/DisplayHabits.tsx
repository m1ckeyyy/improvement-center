import React from 'react';
import styles from './../styles/HabitTracker.module.scss';
import { useHabitTrackerContext } from './HabitContext';
import { MdOutlineLibraryAdd } from 'react-icons/md';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { useFormattedHabits } from './../hooks/useFormattedHabits';
import { HabitDataType } from './../hooks/useHabitData';
import { SelectedDate } from './SelectedDate';
import { useFormattedSelectedDays } from './../hooks/useFormattedSelectedDay';
import { NoHabitsForToday } from './NoHabitsForToday';

export const DisplayHabits = () => {
  const { toggleHabitPanelVisibility, habits, setHabits } = useHabitTrackerContext()!;
  const { formattedHabits } = useFormattedHabits(habits);
  const { selectedDayOfWeek } = useFormattedSelectedDays();

  const toggleHabitCompletion = (habitToUpdate: HabitDataType) => {
    setHabits((habits: HabitDataType[]) => habits.map((habit) => (habit.id === habitToUpdate.id ? { ...habit, completed: !habit.completed } : habit)));
  };

  return (
    <div className={styles.displayHabits}>
      <SelectedDate />
      {/* { <NoHabitsForToday /> } */}

      {formattedHabits
        .filter((habit) => Object.keys(habit.daysOfWeek).includes(selectedDayOfWeek))
        .map((habit, index) => {
          return (
            <div key={index} className={styles.habit}>
              <h3>{habit.name}</h3>
              <p>Category: {habit.category}</p>
              <p className={styles.completedToggle}>
                Completed:{' '}
                {habit.completed ? <BsToggleOn size="25" onClick={() => toggleHabitCompletion(habit)} /> : <BsToggleOff size="25" onClick={() => toggleHabitCompletion(habit)} />}
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
      {formattedHabits.length === 0 && <p>No habits for {selectedDayOfWeek}</p>}
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
