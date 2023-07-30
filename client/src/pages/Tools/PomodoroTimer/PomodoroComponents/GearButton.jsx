import { BsFillGearFill } from 'react-icons/bs';
import styles from './../PomodoroTimer.module.scss';

export const GearButton = ({ onClick }) => {
  return (
    <button className={styles.gearButton} onClick={onClick}>
      <BsFillGearFill size="35" color="#0a789b" title="settings" />
    </button>
  );
};
