export const formatTime = (prevFormat, setTimeFormat) => {
  if (prevFormat === 'minutes') {
    setTimeFormat('percentages');
  } else {
    setTimeFormat('minutes');
  }
};


export const toggleAlarm = (setAlarmSound) => {
  setAlarmSound((prev) => {
    if (prev === 'ON') {
      return 'OFF';
    } else {
      return 'ON';
    }
  });
};
