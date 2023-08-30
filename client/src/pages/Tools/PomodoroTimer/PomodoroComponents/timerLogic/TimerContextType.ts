export type TimerContextType = {
  timeFormat: 'minutes' | 'percentage';
  setTimeFormat: (format: 'minutes' | 'percentage') => void;
  notification: 'ON' | 'OFF';
  setNotification: (option: 'ON' | 'OFF') => void;
  alarmSound: 'ON' | 'OFF';
  setAlarmSound: (option: 'ON' | 'OFF') => void;
  settingsVisible: boolean;
  setSettingsVisible: (option: boolean) => void;
  workTime: number;
  setWorkTimePreference: (option: number) => void;
  breakTime: number;
  setBreakTimePreference: (option: number) => void;
  isRunning: boolean;
  setIsRunning: (option: boolean) => void;
  secondsLeft: number;
  setSecondsLeft: (option: number) => void;
  currentSection: 'work' | 'break';
  setCurrentSection: (option: 'work' | 'break') => void;
  selectedMusicOption: 'OFF' | 'Brown Noise' | 'Rain';
  setSelectedMusicOption: (option: 'OFF' | 'Brown Noise' | 'Rain') => void;
  backgroundTheme: 'OFF' | 'Brown Noise' | 'Rain';
  setBackgroundTheme: (option: 'OFF' | 'Brown Noise' | 'Rain') => void;
  toggleVisibility: () => void;
};
export const defaultState: TimerContextType = {
  timeFormat: 'minutes',
  setTimeFormat: () => {},
  notification: 'ON',
  setNotification: () => {},
  alarmSound: 'ON',
  setAlarmSound: () => {},
  settingsVisible: false,
  setSettingsVisible: () => {},
  workTime: 25,
  setWorkTimePreference: () => {},
  breakTime: 5,
  setBreakTimePreference: () => {},
  isRunning: false,
  setIsRunning: () => {},
  secondsLeft: 25 * 60,
  setSecondsLeft: () => {},
  currentSection: 'work',
  setCurrentSection: () => {},
  selectedMusicOption: 'OFF',
  setSelectedMusicOption: () => {},
  backgroundTheme: 'OFF',
  setBackgroundTheme: () => {},
  toggleVisibility: () => {},
};
