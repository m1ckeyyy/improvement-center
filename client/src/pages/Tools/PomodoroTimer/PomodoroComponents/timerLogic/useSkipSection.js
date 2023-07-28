export const useSkipSection = ({ setIsRunning, currentSection, setCurrentSection, setSecondsLeft, breakTime, workTime }) => {
  setIsRunning(true);
  if (currentSection === 'work') {
    setCurrentSection('break');
    setSecondsLeft(breakTime * 60);
  } else if (currentSection === 'break') {
    setCurrentSection('work');
    setSecondsLeft(workTime * 60);
  }
};
