import { useState } from 'react';

export type DaysOfWeek = {
  Monday?: boolean;
  Tuesday?: boolean;
  Wednesday?: boolean;
  Thursday?: boolean;
  Friday?: boolean;
  Saturday?: boolean;
  Sunday?: boolean;
};
export type HabitDataType = {
  name: string;
  category: string;
  completed: boolean;
  daysOfWeek: DaysOfWeek;
};

export const useHabitData = () => {
  const [habitData, setHabitData] = useState<HabitDataType>({
    name: '',
    category: '',
    completed: false,
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
  const [categories, setCategories] = useState(['Recharging', 'Personal Development', 'Hobbies', 'Health & Fitness']);

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
    const daysOfWeek = { ...habitData.daysOfWeek };
    const allDaysChecked = Object.values(habitData.daysOfWeek).every((isChecked: boolean) => isChecked);
    for (const key in daysOfWeek) {
      if (Object.hasOwnProperty.call(daysOfWeek, key)) {
        allDaysChecked ? (daysOfWeek[key as keyof typeof habitData.daysOfWeek] = false) : (daysOfWeek[key as keyof typeof habitData.daysOfWeek] = true);
      }
    }
    setHabitData({
      ...habitData,
      daysOfWeek: daysOfWeek,
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setHabitData({ ...habitData, [name]: value });
  };

  return { habitData, categories, handleDayOfWeekChange, handleEverydayClick, handleInputChange };
};
