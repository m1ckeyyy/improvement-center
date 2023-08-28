type SkipSectionProps = {
  setIsRunning: (option: boolean) => void;
  setSecondsLeft: (option: number) => void;
  currentSection: 'work' | 'break';
  setCurrentSection: (option: 'work' | 'break') => void;
  breakTime: number;
  workTime: number;
};

export const useSkipSection = ({ setIsRunning, currentSection, setCurrentSection, setSecondsLeft, breakTime, workTime }: SkipSectionProps) => {
  setIsRunning(true);
  if (currentSection === 'work') {
    setCurrentSection('break');
    setSecondsLeft(breakTime * 60);
  } else if (currentSection === 'break') {
    setCurrentSection('work');
    setSecondsLeft(workTime * 60);
  }
};
