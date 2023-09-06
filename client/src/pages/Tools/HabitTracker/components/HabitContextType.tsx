// import React from 'react';
export type HabitContextType = {
  toggleHabitPanelVisibility: () => void;
  addHabit: (obj: {}) => void;
};
export const defaultState: HabitContextType = {
  toggleHabitPanelVisibility: () => {},
  addHabit: (obj: {}) => {},
};
