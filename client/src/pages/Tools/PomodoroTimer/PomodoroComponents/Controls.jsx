import styles from './../PomodoroTimer.module.scss';
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from 'react-icons/ai';
import { BsSkipForward } from 'react-icons/bs';
import { MdAlarmOff } from 'react-icons/md';

export function Controls({ isRunning, handleStartStop, handleReset, handleSkipSection }) {
  return (
    <div className={styles.controls}>
      {isRunning ? (
        <span onClick={handleStartStop}>
          <AiOutlinePauseCircle color="#0a789b" size="3em" cursor="pointer" title="pause" />
          <p>Pause</p>
        </span>
      ) : (
        <span onClick={handleStartStop}>
          <AiOutlinePlayCircle color="#0a789b" size="3em" cursor="pointer" title="play" />
          <p>Play</p>
        </span>
      )}
      <span onClick={handleReset}>
        <MdAlarmOff color="#0a789b" size="3em" cursor="pointer" title="reset" />
        <p>Reset</p>
      </span>
      <span onClick={handleSkipSection}>
        <BsSkipForward color="#0a789b" size="3em" cursor="pointer" title="skip section" />
        <p>Skip</p>
      </span>
    </div>
  );
}