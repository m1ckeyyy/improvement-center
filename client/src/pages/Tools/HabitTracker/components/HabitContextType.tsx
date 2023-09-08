import { HabitDataType } from './useHabitData';

export type HabitContextType = {
  toggleHabitPanelVisibility: () => void;
  addHabit: (obj: HabitDataType) => void;
  // habits: HabitDataType;
};

// export const defaultState: HabitContextType = {
//   toggleHabitPanelVisibility: () => {},
//   addHabit: (obj: HabitDataType) => {},
//   habits: [],
// };
