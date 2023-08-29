import React, { useContext, useState } from 'react';
import styles from './Settings.module.scss';
import { BackgroundMusicOptions } from './BackgroundMusic/BackgroundMusic';
import { formatTime, toggleAlarm, toggleNotis } from './components/toggles';
import { IconButtons } from './components/iconButtons';
import { MdSettingsInputComponent } from 'react-icons/md';
import { TimerContext } from '../../PomodoroTimer';
import { notifySettingsApplied } from '../Notifications/Notifications';

export const Settings = () => {
  const { workTime, breakTime, setWorkTimePreference, setBreakTimePreference, toggleVisibility, timeFormat, setTimeFormat, notification, setNotification, alarmSound, setAlarmSound } =
    useContext(TimerContext);

  const [isMusicMenuOpen, setIsMusicMenuOpen] = useState(false);

  const applySettings = (e: React.FormEvent<HTMLFormElement>) => {
    notifySettingsApplied();
    e.preventDefault();
    toggleVisibility();

    const formElement = e.currentTarget as HTMLFormElement;
    const workTimeInput = formElement.elements.namedItem('workTimeInput') as HTMLInputElement;
    const breakTimeInput = formElement.elements.namedItem('breakTimeInput') as HTMLInputElement;

    setWorkTimePreference(parseInt(workTimeInput.value));
    setBreakTimePreference(parseInt(breakTimeInput.value));
  };

  const toggleTimeFormat = () => {
    formatTime(timeFormat, setTimeFormat);
  };
  const toggleAlarmSound = () => {
    toggleAlarm(setAlarmSound);
  };
  const toggleNotifications = () => {
    toggleNotis(setNotification);
  };

  return (
    <div className={styles.container}>
      <div className={styles.settingsContainer}>
        <h2>
          <MdSettingsInputComponent />
          <span>Settings</span>
        </h2>
        <form onSubmit={applySettings}>
          <hr />
          <h4>Set Time Preferences (Minutes)</h4>
          <div className={styles.workTimePreference}>
            <span>Work time: </span>
            <input type="number" defaultValue={workTime} id="workTimeInput" min="0" max="90" />
          </div>
          <div className={styles.breakTimePreference}>
            <span>Break time: </span>
            <input type="number" defaultValue={breakTime} id="breakTimeInput" min="0" max="90" />
          </div>

          <hr />
          <h4>Other Settings</h4>
          <div className={styles.backgroundMusic}>
            <span>Music: </span>
            <button type="button">
              <BackgroundMusicOptions isMusicMenuOpen={isMusicMenuOpen} setIsMusicMenuOpen={setIsMusicMenuOpen} />
            </button>
          </div>
          <div className={styles.alarmSound}>
            <span>Alarm Sound: </span>
            <button type="button" onClick={toggleAlarmSound}>
              {alarmSound}
            </button>
          </div>

          <div className={styles.toggleNotifications}>
            <span>Notifications: </span>
            <button type="button" onClick={toggleNotifications}>
              {notification === 'ON' ? 'ON' : 'OFF'}
            </button>
          </div>
          <div className={styles.switchDisplay}>
            <span>Time Format: </span>
            <button type="button" onClick={toggleTimeFormat}>
              {timeFormat === 'minutes' ? 'Minutes' : 'Percentage'}
            </button>
          </div>
          <hr />
          <IconButtons />
        </form>
      </div>
    </div>
  );
};
