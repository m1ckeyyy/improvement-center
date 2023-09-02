import React, { createContext } from 'react';
import { TimerContextType, defaultState } from './PomodoroComponents/timerLogic/TimerContextType';

type ProviderProps = {
  children: React.ReactNode;
  value: typeof defaultState;
};

export const TimerContext = createContext<TimerContextType>(defaultState);

export const TimerContextProvider = ({ children, value }: ProviderProps) => {
  return <TimerContext.Provider value={value}>{children}</TimerContext.Provider>;
};
