import { HabitDataType } from './../hooks/useHabitData';

export type HabitContextType = {
  toggleHabitPanelVisibility: () => void;
  addHabit: (newHabit: HabitDataType) => void;
  habits: HabitDataType[];
  setHabits: React.Dispatch<React.SetStateAction<HabitDataType[]>>
};

// export const defaultState: HabitContextType = {
//   toggleHabitPanelVisibility: () => {},
//   addHabit: (obj: HabitDataType) => {},
//   habits: [],
// };
