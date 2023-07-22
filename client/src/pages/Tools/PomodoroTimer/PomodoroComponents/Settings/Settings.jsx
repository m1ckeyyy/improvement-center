import React, { useState } from 'react';
import styles from './Settings.module.scss';
import { BiExit, BiHomeAlt, BiUser } from 'react-icons/bi';
import { BackgroundMusicOptions } from './BackgroundMusic/BackgroundMusic';
import { formatTime, toggleAlarm } from './components/toggles';

export const Settings = ({
  workTime,
  breakTime,
  setWorkTimePreference,
  setBreakTimePreference,
  toggleVisibility,
  timeFormat,
  setTimeFormat,
  selectedMusicOption,
  setSelectedMusicOption,
  notification,
  setNotification,
  alarmSound,
  setAlarmSound,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const applySettings = (e) => {
    e.preventDefault();
    toggleVisibility();
    setWorkTimePreference(parseInt(e.target.elements[0].value));
    setBreakTimePreference(parseInt(e.target.elements[1].value));
  };

  
  const toggleTimeFormat = () => {
    formatTime(timeFormat, setTimeFormat);
  };
  const toggleAlarmSound = () => {
    toggleAlarm(setAlarmSound);
  };

  return (
    <div className={styles.container}>
      <div className={styles.settingsContainer}>
        <h2>Settings</h2>
        <form onSubmit={applySettings}>
          <h4>Set Time Preferences (Minutes)</h4>
          <div className={styles.workTimePreference}>
            <span>Work time: </span>
            <input type="number" defaultValue={workTime} min="0" max="90" />
          </div>
          <div className={styles.breakTimePreference}>
            <span>Break time: </span>
            <input type="number" defaultValue={breakTime} min="0" max="90" />
          </div>
          <div className={styles.submitBtnWrap}>
            <button type="submit" className={styles.submitBtn}>
              Apply
            </button>
          </div>
          <h4>Other Settings</h4>

          <div className={styles.backgroundMusic}>
            <span>Music: </span>
            <button type="button">
              <BackgroundMusicOptions isOpen={isOpen} setIsOpen={setIsOpen} selectedMusicOption={selectedMusicOption} setSelectedMusicOption={setSelectedMusicOption} />
            </button>
          </div>

          <div className={styles.alarmSound}>
            <span>Alarm Sound: </span>
            <button type="button" onClick={toggleAlarmSound}>
              {alarmSound === 'ON' ? 'ON' : 'OFF'}
            </button>
          </div>

          <div className={styles.switchDisplay}>
            <span>Time Format: </span>
            <button type="button" onClick={toggleTimeFormat}>
              {timeFormat === 'minutes' ? 'Minutes' : 'Percentage'}
            </button>
          </div>

          <div className={styles.toggleNotifications}>
            <span>Notifications: </span>
            <button
              type="button"
              onClick={() =>
                setNotification((prev) => {
                  if (prev === 'ON') {
                    return 'OFF';
                  } else {
                    return 'ON';
                  }
                })
              }
            >
              {notification === 'ON' ? 'ON' : 'OFF'}
            </button>
          </div>
        </form>
        <div className={styles.iconButtons}>
          <button type="button" className={styles.profileBtn}>
            <a href="/profile">
              <BiUser />
            </a>{' '}
          </button>
          <button type="button" className={styles.homeIcon}>
            <a href="/">
              {' '}
              <BiHomeAlt />
            </a>
          </button>
          <button type="button" onClick={toggleVisibility} className={styles.closeBtn}>
            <BiExit />
          </button>
        </div>
      </div>
    </div>
  );
};
