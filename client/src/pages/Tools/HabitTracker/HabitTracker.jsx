import styles from './HabitTracker.module.scss'

const HabitTrackerContext = createContext();
export const useHabitTrackerContext = () => useContext(HabitTrackerContext);



const HabitTracker = () => {
    const habitTrackerValue = {}
    return (
        <HabitTracker.Provider value={habitTrackerValue}>
          <div className={styles.wrapContainer}>
            <div className={`${styles.overlayContainer} ${editMode ? styles.editMode : ''}`}>
              <AppHeader />
              <NotesList />
            </div>
          </div>
          <ToastContainer />
        </HabitTracker.Provider>
      );
}
export default HabitTracker;