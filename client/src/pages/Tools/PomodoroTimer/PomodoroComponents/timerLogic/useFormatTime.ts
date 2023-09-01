type FormatProps = {
  timeInSeconds: number;
  timeFormat: 'minutes' | 'percentage';
  formatTimePercentage: (timeInSeconds: number) => void;
};
export const useFormatTime = ({ timeInSeconds, timeFormat, formatTimePercentage }: FormatProps) => {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  if (timeFormat === 'minutes') {
    //@ts-ignore
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  } else if (timeFormat === 'percentage') {
    return formatTimePercentage(timeInSeconds) + '%';
  }
};
