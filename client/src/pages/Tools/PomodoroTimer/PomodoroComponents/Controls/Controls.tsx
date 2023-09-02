import React from 'react';
import styles from './../../PomodoroTimer.module.scss';
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from 'react-icons/ai';
import { BsSkipForward } from 'react-icons/bs';
import { MdAlarmOff } from 'react-icons/md';
import { useContext } from 'react';
import { TimerContext } from '../timerLogic/TimerContext';
import { ControlsItem } from './ControlsItem';
import { VolumeIcon } from './../VolumeIcon';

type ControlsProps = {
  isRunning: boolean;
  alarmSound: 'ON' | 'OFF';
  handleStartStop: () => void;
  handleReset: () => void;
  handleSkipSection: () => void;
};

export const Controls = () => {
  const { isRunning, handleStartStop, handleReset, handleSkipSection }: ControlsProps = useContext(TimerContext);
  return (
    <div className={styles.controls}>
      <VolumeIcon />
      <div className={styles.controlsItems}>
        {isRunning ? <ControlsItem name="Pause" iconSrc={AiOutlinePauseCircle} onClick={handleStartStop} /> : <ControlsItem name="Play" iconSrc={AiOutlinePlayCircle} onClick={handleStartStop} />}
        <ControlsItem name="Reset" iconSrc={MdAlarmOff} onClick={handleReset} />
        <ControlsItem name="Skip" iconSrc={BsSkipForward} onClick={handleSkipSection} />
      </div>
    </div>
  );
};
