import React from 'react';
import styles from './../styles/HabitTracker.module.scss';
import { useHabitTrackerContext } from './HabitContext';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { MdOutlineToday } from 'react-icons/md';
import { useHabitData } from './../hooks/useHabitData';
import { BsArrowRight } from 'react-icons/bs';

export const AddNewHabitPanel: React.FC = () => {
  const { toggleHabitPanelVisibility, addHabit } = useHabitTrackerContext()!;
  const { habitData, categories, handleDayOfWeekChange, handleInputChange } = useHabitData();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addHabit(habitData);
    toggleHabitPanelVisibility();
  };

  return (
    <div className={styles.addNewHabitPanel}>
      <form onSubmit={handleSubmit} autoComplete="off">
        <h2 className={styles.title}>
          <IoMdAddCircleOutline /> New Habit:
        </h2>

        <div className={styles.habitName}>
          <label htmlFor="name">Habit Name:</label>
          <input type="text" name="name" placeholder="Enter habit name..." value={habitData.name} onChange={handleInputChange} required />
        </div>

        <div className={styles.categoryName}>
          <label htmlFor="category">Category:</label>
          <select id="category" name="category" value={habitData.category} onChange={handleInputChange} required>
            <option value="" disabled hidden>
              Select a category
            </option>
            {categories.map((category, i) => {
              return (
                <option value={category} key={i}>
                  {category}
                </option>
              );
            })}
          </select>
        </div>

        <div className={styles.daysOfWeek}>
          <label>
            <MdOutlineToday className={styles.calendarIcon} />
            Days of the Week:
          </label>
          <label>
            <button type="button" name="Everyday" className={styles.everydayBtn} onClick={() => handleDayOfWeekChange('Everyday')}>
              <BsArrowRight className={styles.arrowIcon} />
              <span>Set for every day</span>
            </button>
          </label>
          {Object.keys(habitData.daysOfWeek).map((day) => {
            const dayOfWeek = day as keyof typeof habitData.daysOfWeek;
            const isChecked = habitData.daysOfWeek[dayOfWeek];
            return (
              <label key={day}>
                <input type="checkbox" name={day} checked={isChecked} onChange={() => handleDayOfWeekChange(day)} />
                {day}
              </label>
            );
          })}
        </div>

        <button type="submit" className={styles.addHabitBtn}>
          Add Habit
        </button>
        <button type="button" className={styles.cancelBtn} onClick={toggleHabitPanelVisibility}>
          Cancel
        </button>
      </form>
    </div>
  );
};
