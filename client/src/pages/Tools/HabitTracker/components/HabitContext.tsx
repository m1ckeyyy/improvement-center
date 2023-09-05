import React, { createContext } from 'react';
import { HabitContextType, defaultState } from './HabitContextType';

type ProviderProps = {
  children: React.ReactNode;
  value: HabitContextType;
};

export const HabitContext = createContext<HabitContextType>(defaultState);

export const HabitContextProvider = ({ children, value }: ProviderProps) => {
  return <HabitContext.Provider value={value}>{children}</HabitContext.Provider>;
};
