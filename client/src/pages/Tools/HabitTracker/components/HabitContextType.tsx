import React from 'react';
export type HabitContextType = {
  setHabitPanelVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
export const defaultState: HabitContextType = {
  setHabitPanelVisible: () => {},
};
