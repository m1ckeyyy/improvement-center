import React from 'react';
export type HabitContextType = {
  toggleHabitPanelVisibility: () => void;
};
export const defaultState: HabitContextType = {
  toggleHabitPanelVisibility: () => {},
};
