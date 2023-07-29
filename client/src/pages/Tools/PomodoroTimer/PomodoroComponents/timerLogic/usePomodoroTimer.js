import { useEffect } from 'react';
import { notifyBreakFinished, notifyWorkFinished } from './../Notifications/Notifications';
import { useSounds } from '../Sounds/sounds';

export const usePomodoroTimer = ({ isRunning, secondsLeft, setSecondsLeft, currentSection, notification, alarmSound, setCurrentSection, breakTime, workTime }) => {
  const { startSound, endSound } = useSounds();

  useEffect(() => {
    const timer = setInterval(() => {
      if (isRunning & (secondsLeft > 0)) {
        setSecondsLeft((prev) => prev - 1);
      } else if (secondsLeft === 0) {
        if (currentSection === 'work') {
          // post request to server about finished session (dateStarted, timeTaken)
          if (notification === 'ON') notifyWorkFinished();
          if (alarmSound === 'ON') endSound.play();
          setCurrentSection('break');
          setSecondsLeft(breakTime * 60);
        } else {
          if (notification === 'ON') notifyBreakFinished();
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
};
