import { useEffect } from 'react';

type SessionProps = {
  currentSection: 'work' | 'break';
  breakTime: number;
  workTime: number;
  setSecondsLeft: (arg: number) => void;
};

export const useCurrentSection = ({ currentSection, workTime, breakTime, setSecondsLeft }: SessionProps) => {
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
