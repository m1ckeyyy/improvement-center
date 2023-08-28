import { useState } from 'react';

export const states = () => {
  const [timeFormat, setTimeFormat] = useState<'minutes' | 'percentage'>('minutes');
  const [notification, setNotification] = useState<'ON' | 'OFF'>('ON');
  const [alarmSound, setAlarmSound] = useState<'ON' | 'OFF'>('ON');
  const [settingsVisible, setSettingsVisible] = useState(false);
  const [workTime, setWorkTimePreference] = useState(25); // 25 minutes in seconds
  const [breakTime, setBreakTimePreference] = useState(5); // 5 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(workTime * 60);
  const [currentSection, setCurrentSection] = useState<'work' | 'break'>('work');
  const [selectedMusicOption, setSelectedMusicOption] = useState<'Brown Noise' | 'Rain' | 'OFF'>('OFF');
  const [backgroundTheme, setBackgroundTheme] = useState<'Brown Noise' | 'Rain' | 'OFF'>('OFF');

  return {
    timeFormat,
    setTimeFormat,
    notification,
    setNotification,
    alarmSound,
    setAlarmSound,
    settingsVisible,
    setSettingsVisible,
    workTime,
    setWorkTimePreference,
    breakTime,
    setBreakTimePreference,
    isRunning,
    setIsRunning,
    secondsLeft,
    setSecondsLeft,
    currentSection,
    setCurrentSection,
    selectedMusicOption,
    setSelectedMusicOption,
    backgroundTheme,
    setBackgroundTheme,
  };
};
