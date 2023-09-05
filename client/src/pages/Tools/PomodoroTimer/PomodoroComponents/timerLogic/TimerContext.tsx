import React, { createContext } from 'react';
import { TimerContextType, defaultState } from './TimerContextType';

type ProviderProps = {
  children: React.ReactNode;
  value: typeof defaultState; //or TimerContextType
};

export const TimerContext = createContext<TimerContextType>(defaultState);

export const TimerContextProvider = ({ children, value }: ProviderProps) => {
  return <TimerContext.Provider value={value}>{children}</TimerContext.Provider>;
};
