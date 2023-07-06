import styles from './PomodoroTimer.module.scss';
import { useState, useEffect, useRef } from 'react';
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from 'react-icons/ai';
import { RxReset } from 'react-icons/rx';
import { BsSkipForward, BsFillGearFill } from 'react-icons/bs';
import { MdAlarmOff } from 'react-icons/md';

import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Settings from './PomodoroComponents/Settings';

import endSoundFile from '/sounds/endSound.mp3';
import startSoundFile from '/sounds/startSound.mp3';
import brownNoiseFile from '/sounds/brownNoise.mp3';

function PomodoroTimer() {
  const startSoundRef = useRef(new Audio(startSoundFile));
  const endSoundRef = useRef(new Audio(endSoundFile));

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
    const timer = setInterval(() => {
      if (isRunning & (secondsLeft > 0)) {
        setSecondsLeft((prev) => prev - 1);
      } else if (secondsLeft === 0) {
        if (currentSection === 'work') {
          // post request to server about finished session (dateStarted, timeTaken)
          if (alarmSound === 'ON') endSoundRef.current.play();
          setCurrentSection('break');
          setSecondsLeft(breakTime * 60);
        } else {
          if (alarmSound === 'ON') startSoundRef.current.play();
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
    if (currentSection === 'work') {
      setSecondsLeft(workTime * 60);
    } else if (currentSection === 'break') setSecondsLeft(breakTime * 60);
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
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    if (timeFormat === 'minutes') {
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
      const totalSeconds = currentSection === 'work' ? workTime * 60 : breakTime * 60;
      const progress = 100 - (timeInSeconds / totalSeconds) * 100;
      return `${Math.ceil(progress)}%`;
    }
  };
  const formatTimePercentage = (timeInSeconds) => {
    const totalSeconds = currentSection === 'work' ? workTime * 60 : breakTime * 60;
    const progress = 100 - (timeInSeconds / totalSeconds) * 100;
    return Math.ceil(progress);
  };

  const toggleVisibility = (event) => {
    setSettingsVisible((prev) => !prev);
  };

  return (
    <div className={styles.overlayContainer}>
      <div className={styles.app}>
        <div className={styles.timer}>
          <h1>{currentSection === 'work' ? 'Work Time' : 'Break Time'}</h1>
          <div className={styles.circularProgressBar} onClick={handleStartStop}>
            <CircularProgressbarWithChildren
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
          <div className={styles.controls}>
            {isRunning ? (
              <AiOutlinePauseCircle color="#0a789b" size="3em" cursor="pointer" onClick={handleStartStop} />
            ) : (
              <AiOutlinePlayCircle color="#0a789b" size="3em" cursor="pointer" onClick={handleStartStop} />
            )}

            <MdAlarmOff onClick={handleReset} color="#0a789b" size="3em" cursor="pointer" />
            <BsSkipForward onClick={handleSkipSection} color="#0a789b" size="3em" cursor="pointer" />
          </div>
        </div>
        <div className={styles.buttons}>
          {!settingsVisible && (
            <button className={styles.gearButton} onClick={toggleVisibility}>
              <BsFillGearFill size="30" color="#0a789b" />
            </button>
          )}
        </div>

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
    </div>
  );
  return (
    <div className={styles.container}>
      <div className={styles.app}>
        <img src="images/pomodoro2icon.png" alt="pomodoro" className={styles.pomodoroImg} />
        <div className={styles.controls}>
          <AiOutlinePlayCircle color="black" size="3em" cursor="pointer" />
          <AiOutlinePauseCircle color="black" size="3em" cursor="pointer" />
          <RxReset color="black" size="3em" cursor="pointer" />
          <BsSkipForward color="black" size="3em" cursor="pointer" />
        </div>
        <div className={styles.timer}>
          <CircularProgressbarWithChildren
            value={'percentage'}
            // text={timeInMinutes ? `${timePassed}` : `${percentage}%`}
            strokeWidth={6}
            circleRatio={0.75}
            className={styles.progress}
            // background
            // backgroundPadding={6}
            styles={buildStyles({
              pathTransitionDuration: 0.5,
              strokeLinecap: 'butt',
              rotation: 1 / 2 + 1 / 8,
              //   pathColor: `rgba(${(63 / percentage) * 100}, ${
              //     percentage < 15 ? 160 : 199
              //   }, 44)`,
              //   textColor: `rgba(${(63 / percentage) * 100}, ${
              //     percentage < 15 ? 160 : 199
              //   }, 44)`,
              trailColor: 'lightgray',
              fontSize: '10px',
              //   backgroundColor: "#061A94",
            })}
          />
        </div>
      </div>
    </div>
  );
}

export default PomodoroTimer;
