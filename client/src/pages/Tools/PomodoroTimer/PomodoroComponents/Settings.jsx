import React from "react";
import styles from "./Settings.module.scss";
import { BiExit, BiHomeAlt, BiUser } from "react-icons/bi";
const Settings = ({
  workTime,
  breakTime,
  setWorkTimePreference,
  setBreakTimePreference,
  toggleVisibility,
}) => {
  const applySettings = (e) => {
    e.preventDefault();
    toggleVisibility();
    setWorkTimePreference(parseInt(e.target.elements[0].value));
    setBreakTimePreference(parseInt(e.target.elements[1].value));
  };

  return (
    <div className={styles.container}>
      <div className={styles.settingsContainer}>
        <h2>Settings</h2>
        <form onSubmit={applySettings}>
          <h4>Set Time Preferences (Minutes)</h4>
          <div className={styles.workTimePreference}>
            <span>Work time: </span>
            <input type="number" defaultValue={workTime} min="5" max="90" />
          </div>
          <div className={styles.breakTimePreference}>
            <span>Break time: </span>
            <input type="number" defaultValue={breakTime} min="5" max="90" />
          </div>
          <div className={styles.submitBtnWrap}>
            <button type="submit" className={styles.submitBtn}>
              Apply
            </button>
          </div>
          <h4>Other Settings</h4>

          <div className={styles.backgroundMusic}>
            <span>Background Music: </span>
          </div>
          <div className={styles.alarmSound}>
            <span>Alarm Sound: </span>
          </div>

          <div className={styles.switchDisplay}>
            <span>Time Format: </span>
            <button type="button">Minutes</button>
          </div>
          <div className={styles.toggleNotifications}>
            <span>Notifications: </span>
            <button type="button">ON</button>
          </div>
        </form>
        <div className={styles.iconButtons}>
          <button type="button" className={styles.profileBtn}>
            <a href="/profile">
              <BiUser />
            </a>{" "}
          </button>
          <button type="button" className={styles.homeIcon}>
            <a href="/">
              {" "}
              <BiHomeAlt />
            </a>
          </button>
          <button
            type="button"
            onClick={toggleVisibility}
            className={styles.closeBtn}
          >
            <BiExit />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
