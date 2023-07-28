export const useFormatTime = ({ timeInSeconds, timeFormat, formatTimePercentage }) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  if (timeFormat === 'minutes') {
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  } else {
    return formatTimePercentage(timeInSeconds) + '%';
  }
};
