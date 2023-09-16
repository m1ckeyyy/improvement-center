import { HabitDataType } from './../hooks/useHabitData';

export type HabitContextType = {
  toggleHabitPanelVisibility: () => void;
  addHabit: (newHabit: HabitDataType) => void;
  habits: HabitDataType[];
  setHabits: React.Dispatch<React.SetStateAction<HabitDataType[]>>;
  selectedDay: Date | any;
};
