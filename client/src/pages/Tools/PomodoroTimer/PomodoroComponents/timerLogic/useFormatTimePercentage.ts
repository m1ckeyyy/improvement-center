export const useFormatTimePercentage = ({ timeInSeconds, currentSection, workTime, breakTime }) => {
  const totalSeconds = currentSection === 'work' ? workTime * 60 : breakTime * 60;
  const progress = 100 - (timeInSeconds / totalSeconds) * 100;
  return Math.ceil(progress);
};
