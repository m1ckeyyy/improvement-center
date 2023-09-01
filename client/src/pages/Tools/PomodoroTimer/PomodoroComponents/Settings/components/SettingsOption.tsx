import React from 'react';
import styles from './../Settings.module.scss';

type ButtonType = {
  children: React.ReactNode;
  style: 'workTimePreference' | 'breakTimePreference' | 'backgroundMusic' | 'alarmSound' | 'toggleNotifications' | 'switchDisplay';
  title: 'Work time: ' | 'Break time: ' | 'Music: ' | 'Alarm Sound: ' | 'Notifications: ' | 'Time Format: ';
};

export const SettingsOption = (props: ButtonType) => {
  const { style, title, children } = props;
  return (
    <div className={styles[style]}>
      <span>{title}</span>
      {children}
    </div>
  );
};
