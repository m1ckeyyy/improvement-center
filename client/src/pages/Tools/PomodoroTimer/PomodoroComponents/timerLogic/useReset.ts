type ResetProps = {
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  currentSection: 'work' | 'break';
  setSecondsLeft: React.Dispatch<React.SetStateAction<number>>;
  workTime: number;
  breakTime: number;
};
export const useReset = ({ setIsRunning, currentSection, setSecondsLeft, workTime, breakTime }: ResetProps) => {
  setIsRunning(false);
  currentSection === 'work' ? setSecondsLeft(workTime * 60) : setSecondsLeft(breakTime * 60);
};
