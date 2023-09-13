import { useState, useEffect } from 'react';
import { HabitDataType, DaysOfWeek } from './../hooks/useHabitData';

export function useFormattedHabits(habits: HabitDataType[]) {
  const [formattedHabits, setFormattedHabits] = useState<HabitDataType[]>([]);

  useEffect(() => {
    const updatedHabits = habits.map((habit: HabitDataType) => {
      const noDaysSelected = Object.values(habit.daysOfWeek).every((e) => e === false);

      if (noDaysSelected) {
        for (const key of Object.keys(habit.daysOfWeek)) {
          habit.daysOfWeek[key as keyof typeof habit.daysOfWeek] = true;
        }
      }
      const filteredDays = Object.entries(habit.daysOfWeek).filter(([day, isTrue]) => isTrue);
      const filteredDaysObject: DaysOfWeek = Object.fromEntries(filteredDays);

      habit.daysOfWeek = filteredDaysObject;

      return habit;
    });

    setFormattedHabits(updatedHabits);
  }, [habits]);

  return { formattedHabits };
}
