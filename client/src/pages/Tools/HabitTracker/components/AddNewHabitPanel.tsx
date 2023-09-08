import React from 'react';
import styles from './../styles/HabitTracker.module.scss';
import { useHabitTrackerContext } from './HabitContext';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { useHabitData } from './useHabitData';

export const AddNewHabitPanel: React.FC = () => {
  const { toggleHabitPanelVisibility, addHabit } = useHabitTrackerContext();
  const { habitData, setHabitData, categories, setCategories } = useHabitData();
  // console.log(habitData.daysOfWeek);
  const handleDayOfWeekChange = (day: string) => {
    if (day === 'Everyday') {
      handleEverydayClick(day);
      return;
    }
    setHabitData({
      ...habitData,
      daysOfWeek: {
        ...habitData.daysOfWeek,
        [day]: !habitData.daysOfWeek[day as keyof typeof habitData.daysOfWeek],
      },
    });
  };

  const handleEverydayClick = (day: string) => {
    const updatedDaysOfWeek = { ...habitData.daysOfWeek };
    //@ts-ignore
    const allDaysChecked = Object.values(habitData.daysOfWeek).every((isChecked:boolean) => isChecked);
    for (const key in updatedDaysOfWeek) {
      if (Object.hasOwnProperty.call(updatedDaysOfWeek, key)) {
        //@ts-ignore
        allDaysChecked ? (updatedDaysOfWeek[key] = false) : (updatedDaysOfWeek[key] = true);
      }
    }
    setHabitData({
      ...habitData,
      daysOfWeek: updatedDaysOfWeek,
    });
    return;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setHabitData({ ...habitData, [name]: value });
  };

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
          <label>Days of the Week:</label>
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

        <button type="submit">Add Habit</button>
        <button type="button" onClick={toggleHabitPanelVisibility}>
          Cancel
        </button>
      </form>
    </div>
  );
};
