import React, { useState } from 'react';

type HabitDataType = {
  name: string;
  category: string;
  daysOfWeek: {
    Everyday: boolean;
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
    daysOfWeek: {
      Everyday: false,
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

  return { habitData, setHabitData, categories, setCategories };
};
