export const useReset = ({ setIsRunning, currentSection, setSecondsLeft, workTime, breakTime }) => {
  setIsRunning(false);
  currentSection === 'work' ? setSecondsLeft(workTime * 60) : setSecondsLeft(breakTime * 60);
};
