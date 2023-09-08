import React, { createContext, useContext } from 'react';
import { HabitContextType } from './HabitContextType';

type ProviderProps = {
  children: React.ReactNode;
  value: HabitContextType;
};

const HabitContext = createContext<HabitContextType | null>(null);
export const useHabitTrackerContext = () => useContext(HabitContext);

export const HabitContextProvider = ({ children, value }: ProviderProps) => {
  return <HabitContext.Provider value={value}>{children}</HabitContext.Provider>;
};
