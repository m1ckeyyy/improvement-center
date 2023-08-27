import { useEffect } from 'react';
export const useCurrentSection = ({ currentSection, workTime, breakTime, setSecondsLeft }) => {
  useEffect(() => {
    switch (currentSection) {
      case 'work':
        setSecondsLeft(workTime * 60);
        break;
      case 'break':
        setSecondsLeft(breakTime * 60);
        break;
      default:
        setSecondsLeft(workTime * 60);
    }
  }, [workTime, breakTime]);
};
