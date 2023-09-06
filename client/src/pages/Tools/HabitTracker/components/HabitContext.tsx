import React, { createContext, useContext } from 'react';
import { HabitContextType, defaultState } from './HabitContextType';

type ProviderProps = {
  children: React.ReactNode;
  value: HabitContextType;
};

const HabitContext = createContext<HabitContextType>(defaultState);
export const useHabitTrackerContext = () => useContext(HabitContext);

export const HabitContextProvider = ({ children, value }: ProviderProps) => {
  return <HabitContext.Provider value={value}>{children}</HabitContext.Provider>;
};
