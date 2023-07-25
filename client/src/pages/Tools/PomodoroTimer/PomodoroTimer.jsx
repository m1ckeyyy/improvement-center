import styles from './PomodoroTimer.module.scss';
import { useState, useEffect } from 'react';
import { BsFillGearFill } from 'react-icons/bs';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';
import { Settings } from './PomodoroComponents/Settings/Settings';
import { Controls } from './PomodoroComponents/Controls';
import { useSounds } from './PomodoroComponents/Sounds/sounds';

// import { breakFinished } from './PomodoroComponents/Notifications/Notifications';
// import { ToastContainer } from 'react-toastify';

function PomodoroTimer() {
  const { startSound, endSound, rainSound, brownNoise } = useSounds();

  const [timeFormat, setTimeFormat] = useState('minutes');
  const [notification, setNotification] = useState('ON');
  const [alarmSound, setAlarmSound] = useState('ON');

  const [settingsVisible, setSettingsVisible] = useState(false);
  const [workTime, setWorkTimePreference] = useState(25); // 25 minutes in seconds
  const [breakTime, setBreakTimePreference] = useState(5); // 5 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(workTime * 60);
  const [currentSection, setCurrentSection] = useState('work');
  const [selectedMusicOption, setSelectedMusicOption] = useState('OFF');

  useEffect(() => {
    switch (selectedMusicOption) {
      case 'Rain':
        rainSound.play();
        rainSound.loop = true;
        brownNoise.pause();
        break;
      case 'OFF':
        rainSound.pause();
        brownNoise.pause();
        break;
      case 'Brown Noise':
        brownNoise.play();
        brownNoise.loop = true;
        rainSound.pause();
        break;
    }
  }, [selectedMusicOption]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isRunning & (secondsLeft > 0)) {
        setSecondsLeft((prev) => prev - 1);
      } else if (secondsLeft === 0) {
        if (currentSection === 'work') {
          // post request to server about finished session (dateStarted, timeTaken)
          // workFinished();
          if (alarmSound === 'ON') endSound.play();
          setCurrentSection('break');
          setSecondsLeft(breakTime * 60);
        } else {
          breakFinished();
          if (alarmSound === 'ON') startSound.play();
          setCurrentSection('work');
          setSecondsLeft(workTime * 60);
        }
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [isRunning, secondsLeft, currentSection]);

  useEffect(() => {
    switch (currentSection) {
      case 'work':
        setSecondsLeft(workTime * 60);
        break;
      case 'break':
        setSecondsLeft(breakTime * 60);
        break;
      default:
        setSecondsLeft(workTime * 60);
    }
  }, [workTime, breakTime]);

  const handleStartStop = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    currentSection === 'work' ? setSecondsLeft(workTime * 60) : setSecondsLeft(breakTime * 60);
  };

  const handleSkipSection = () => {
    setIsRunning(true);
    if (currentSection === 'work') {
      setCurrentSection('break');
      setSecondsLeft(breakTime * 60);
    } else if (currentSection === 'break') {
      setCurrentSection('work');
      setSecondsLeft(workTime * 60);
    }
  };

  const formatTimePercentage = (timeInSeconds) => {
    const totalSeconds = currentSection === 'work' ? workTime * 60 : breakTime * 60;
    const progress = 100 - (timeInSeconds / totalSeconds) * 100;
    return Math.ceil(progress).toString();
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    if (timeFormat === 'minutes') {
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
      return formatTimePercentage(timeInSeconds) + '%';
    }
  };

  const toggleVisibility = () => {
    setSettingsVisible((prev) => !prev);
  };

  return (
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

        {!settingsVisible ? <Controls isRunning={isRunning} handleStartStop={handleStartStop} handleReset={handleReset} handleSkipSection={handleSkipSection} /> : ''}

        <button className={styles.gearButton} onClick={toggleVisibility}>
          <BsFillGearFill size="35" color="#0a789b" title="settings" />
        </button>

        {settingsVisible && (
          <Settings
            workTime={workTime}
            breakTime={breakTime}
            setWorkTimePreference={setWorkTimePreference}
            setBreakTimePreference={setBreakTimePreference}
            toggleVisibility={toggleVisibility}
            timeFormat={timeFormat}
            setTimeFormat={setTimeFormat}
            selectedMusicOption={selectedMusicOption}
            setSelectedMusicOption={setSelectedMusicOption}
            notification={notification}
            setNotification={setNotification}
            alarmSound={alarmSound}
            setAlarmSound={setAlarmSound}
          />
        )}
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
}

export default PomodoroTimer;
