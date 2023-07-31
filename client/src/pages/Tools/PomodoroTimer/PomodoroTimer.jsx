import styles from './PomodoroTimer.module.scss';
import { createContext } from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { GearButton } from './PomodoroComponents/GearButton';
import 'react-circular-progressbar/dist/styles.css';
import { ToastContainer } from 'react-toastify';
import { Settings } from './PomodoroComponents/Settings/Settings';
import { Controls } from './PomodoroComponents/Controls/Controls';
import { states } from './PomodoroComponents/timerLogic/states';
import { useSelectMusic } from './PomodoroComponents/timerLogic/useSelectMusic';
import { useCurrentSection } from './PomodoroComponents/timerLogic/useCurrentSection';
import { usePomodoroTimer } from './PomodoroComponents/timerLogic/usePomodoroTimer';
import { useSkipSection } from './PomodoroComponents/timerLogic/useSkipSection';
import { useReset } from './PomodoroComponents/timerLogic/useReset';
import { useFormatTimePercentage } from './PomodoroComponents/timerLogic/useFormatTimePercentage';
import { useFormatTime } from './PomodoroComponents/timerLogic/useFormatTime';
export const TimerContext = createContext(null);

const PomodoroTimer = () => {
  // console.log('re-render');
  const allValues = states();
  const {
    timeFormat,
    notification,
    alarmSound,
    settingsVisible,
    setSettingsVisible,
    workTime,
    breakTime,
    isRunning,
    setIsRunning,
    secondsLeft,
    setSecondsLeft,
    currentSection,
    setCurrentSection,
    selectedMusicOption,
  } = allValues;

  useSelectMusic({ selectedMusicOption });

  usePomodoroTimer({ isRunning, secondsLeft, setSecondsLeft, currentSection, notification, alarmSound, setCurrentSection, breakTime, workTime });

  useCurrentSection({ currentSection, workTime, breakTime, setSecondsLeft });

  const handleSkipSection = () => {
    useSkipSection({ setIsRunning, currentSection, setCurrentSection, setSecondsLeft, breakTime, workTime });
  };

  const handleStartStop = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    useReset({ setIsRunning, currentSection, setSecondsLeft, workTime, breakTime });
  };

  const formatTimePercentage = (timeInSeconds) => useFormatTimePercentage({ timeInSeconds, currentSection, workTime, breakTime });
  const formatTime = (timeInSeconds) => useFormatTime({ timeInSeconds, timeFormat, formatTimePercentage });

  const toggleVisibility = () => {
    setSettingsVisible((prev) => !prev);
  };

  const timerContextData = { ...allValues, handleStartStop, handleReset, handleSkipSection, toggleVisibility };

  return (
    <TimerContext.Provider value={timerContextData}>
      <div className={styles.overlayContainer}>
        <div className={styles.app}>
          <div className={styles.timer}>
            <h1>{currentSection === 'work' ? 'Work Time' : 'Break Time'}</h1>
            <div onClick={handleStartStop}>
              <CircularProgressbarWithChildren
                className={styles.progressBar}
                value={formatTimePercentage(secondsLeft)}
                text={formatTime(secondsLeft)}
                circleRatio={0.75}
                strokeWidth={6}
                styles={buildStyles({
                  pathTransitionDuration: 0.5,
                  strokeLinecap: 'butt',
                  rotation: 1 / 2 + 1 / 8,
                  trailColor: 'lightgray',
                  textColor: '#0a789b',
                  pathColor: '#0a789b',
                })}
              />
            </div>
          </div>
          {settingsVisible ? <Settings /> : <Controls />}
          {settingsVisible || <GearButton onClick={toggleVisibility} />}
        </div>
        <ToastContainer />
      </div>
    </TimerContext.Provider>
  );
};

export default PomodoroTimer;
