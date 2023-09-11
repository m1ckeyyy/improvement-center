import {  useState } from 'react';

export type HabitDataType = {
  name: string;
  category: string;
  completed: boolean;
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
  // useEffect(() => {
  //   //format no-days to every-day
  //   console.log('habitData ', habitData.daysOfWeek);

  //   const noDaysSelected = Object.values(habitData.daysOfWeek).every((e) => e === false);
  //   if (noDaysSelected) {
  //     for (const key of Object.keys(habitData.daysOfWeek)) {
  //       habitData.daysOfWeek[key as keyof typeof habitData.daysOfWeek] = true;
  //     }
  //   }
  // }, [habitData]);
  const handleEverydayClick = (day: string) => {
    const daysOfWeek = { ...habitData.daysOfWeek };
    const allDaysChecked = Object.values(habitData.daysOfWeek).every((isChecked: boolean) => isChecked);
    for (const key in daysOfWeek) {
      if (Object.hasOwnProperty.call(daysOfWeek, key)) {
        //@ts-ignore
        allDaysChecked ? (daysOfWeek[key] = false) : (daysOfWeek[key] = true);
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
