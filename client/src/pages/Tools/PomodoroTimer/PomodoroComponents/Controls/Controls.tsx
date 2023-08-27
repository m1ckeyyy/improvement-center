import styles from './../../PomodoroTimer.module.scss';
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from 'react-icons/ai';
import { BsSkipForward } from 'react-icons/bs';
import { MdAlarmOff } from 'react-icons/md';
import { useContext } from 'react';
import { TimerContext } from '../../PomodoroTimer';
import { ControlsItem } from './ControlsItem';

export const Controls = () => {
  const { isRunning, handleStartStop, handleReset, handleSkipSection } = useContext(TimerContext);
  return (
    <div className={styles.controls}>
      <div className={styles.controlsItems}>
        {isRunning ? <ControlsItem name="Pause" iconSrc={AiOutlinePauseCircle} onClick={handleStartStop} /> : <ControlsItem name="Play" iconSrc={AiOutlinePlayCircle} onClick={handleStartStop} />}

        <ControlsItem name="Reset" iconSrc={MdAlarmOff} onClick={handleReset} />
        <ControlsItem name="Skip" iconSrc={BsSkipForward} onClick={handleSkipSection} />
      </div>
    </div>
  );
};
