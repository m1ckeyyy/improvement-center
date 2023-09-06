import React, { useContext, useState } from 'react';
import styles from './../styles/HabitTracker.module.scss';
import { useHabitTrackerContext } from './HabitContext';
import { IoMdAddCircleOutline } from 'react-icons/io';
type HabitDataType = {
  name: string;
  category: string;
  daysOfWeek: {
    Monday: boolean;
    Tuesday: boolean;
    Wednesday: boolean;
    Thursday: boolean;
    Friday: boolean;
    Saturday: boolean;
    Sunday: boolean;
  };
};

export const AddNewHabitPanel: React.FC = () => {
  const { toggleHabitPanelVisibility, addHabit } = useHabitTrackerContext();
  const [categories, setCategories] = useState(['Recharging', 'Personal Development', 'Hobbies', 'Health & Fitness']);

  const [habitData, setHabitData] = useState<HabitDataType>({
    name: '',
    category: '',
    daysOfWeek: {
      Monday: false,
      Tuesday: false,
      Wednesday: false,
      Thursday: false,
      Friday: false,
      Saturday: false,
      Sunday: false,
    },
  });
  console.log(habitData);

  const handleDayOfWeekChange = (day: string) => {
    setHabitData({
      ...habitData,
      daysOfWeek: {
        ...habitData.daysOfWeek,
        [day]: !habitData.daysOfWeek[day as keyof typeof habitData.daysOfWeek],
      },
    });
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
      <form onSubmit={handleSubmit}>
        <h2 className={styles.title}>
          <IoMdAddCircleOutline /> New Habit:
        </h2>
        <div>
          <label htmlFor="name">Habit Name:</label>
          <input type="text" id="name" name="name" value={habitData.name} onChange={handleInputChange} required />
        </div>
        <div>
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
