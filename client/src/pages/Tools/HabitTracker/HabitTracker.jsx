import styles from './HabitTracker.module.scss';
import { useContext, createContext } from 'react';
import { ToastContainer } from 'react-toastify';

const HabitTrackerContext = createContext();
export const useHabitTrackerContext = () => useContext(HabitTrackerContext);

const HabitTracker = () => {
  const habitTrackerValue = {};
  return (
    <HabitTrackerContext.Provider value={habitTrackerValue}>
      <div className={styles.wrapContainer}>
        <div className={styles.overlayContainer}>HEY</div>
        <ToastContainer />
      </div>
    </HabitTrackerContext.Provider>
  );
};
export default HabitTracker;
