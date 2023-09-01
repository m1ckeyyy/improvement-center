import React, { useContext, useState } from 'react';
import styles from './Settings.module.scss';
import { BackgroundMusicOptions } from './BackgroundMusic/BackgroundMusic';
import { formatTime, toggleAlarm, toggleNotis } from './components/toggles';
import { IconButtons } from './components/iconButtons';
import { MdSettingsInputComponent } from 'react-icons/md';
import { TimerContext } from '../../PomodoroTimer';
import { notifySettingsApplied } from '../Notifications/Notifications';
import { TimePreferenceInput } from './components/TimePreferenceInput';
import { SettingsOption } from './components/SettingsOption';

export const Settings = () => {
  const { workTime, breakTime, setWorkTimePreference, setBreakTimePreference, toggleVisibility, timeFormat, setTimeFormat, notification, setNotification, alarmSound, setAlarmSound } =
    useContext(TimerContext);

  const [isMusicMenuOpen, setIsMusicMenuOpen] = useState(false);

  const applySettings = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget as HTMLFormElement;
    const workTimeInput = formElement.elements.namedItem('workTimeInput') as HTMLInputElement;
    const breakTimeInput = formElement.elements.namedItem('breakTimeInput') as HTMLInputElement;

    const newWorkTime = parseInt(workTimeInput.value);
    const newBreakTime = parseInt(breakTimeInput.value);
    toggleVisibility();

    if (newWorkTime === workTime && newBreakTime === breakTime) {
      return;
    }

    setWorkTimePreference(newWorkTime);
    setBreakTimePreference(newBreakTime);
    notifySettingsApplied();
  };

  const toggleTimeFormat = () => {
    formatTime(setTimeFormat);
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

          <SettingsOption title="Work time: " style="workTimePreference">
            <TimePreferenceInput defaultValue={workTime} id="workTimeInput" min={0} max={90} />
          </SettingsOption>

          <SettingsOption title="Break time: " style="breakTimePreference">
            <TimePreferenceInput defaultValue={breakTime} id="breakTimeInput" min={0} max={90} />
          </SettingsOption>

          <hr />

          <h4>Other Settings</h4>

          <SettingsOption title="Music: " style="backgroundMusic">
            <button type="button">
              <BackgroundMusicOptions isMusicMenuOpen={isMusicMenuOpen} setIsMusicMenuOpen={setIsMusicMenuOpen} />
            </button>
          </SettingsOption>

          <SettingsOption title="Alarm Sound: " style="alarmSound">
            <button type="button" onClick={toggleAlarmSound}>
              {alarmSound}
            </button>
          </SettingsOption>

          <SettingsOption title="Notifications: " style="toggleNotifications">
            <button type="button" onClick={toggleNotifications}>
              {notification === 'ON' ? 'ON' : 'OFF'}
            </button>
          </SettingsOption>

          <SettingsOption title="Time Format: " style="switchDisplay">
            <button type="button" onClick={toggleTimeFormat}>
              {timeFormat === 'minutes' ? 'Minutes' : 'Percentage'}
            </button>
          </SettingsOption>
          <hr />
          <IconButtons />
        </form>
      </div>
    </div>
  );
};
