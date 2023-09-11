import { useState, useEffect } from 'react';
import { HabitDataType } from './../hooks/useHabitData';

type TDay = [string, boolean];

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
      // Remove daysOfWeek that are set to false, and modify the array
      // Object.entries(habit.daysOfWeek).filter(([day, isCompleted]: TDay) => isCompleted);

      return habit;
    });

    setFormattedHabits(updatedHabits);
  }, [habits]);

  return { formattedHabits };
}
