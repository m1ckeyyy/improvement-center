export const formatTime = (setTimeFormat: (prev: any) => void) => {
  setTimeFormat((prev: string) => (prev === 'minutes' ? 'percentage' : 'minutes'));
};

export const toggleAlarm = (setAlarmSound: (prev: any) => void) => {
  setAlarmSound((prev: string) => (prev === 'ON' ? 'OFF' : 'ON'));
};

export const toggleNotis = (setNotification: (arg: any) => void) => {
  setNotification((prev: string) => (prev === 'ON' ? 'OFF' : 'ON'));
};
