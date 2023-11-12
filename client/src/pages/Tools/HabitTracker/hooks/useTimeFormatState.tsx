import { useState } from 'react';

export const useTimeFormatState = () => {
  const [timeFormat, setTimeFormat] = useState<'long' | 'numeric'>('long');

  const toggleTimeFormat = () => {
    setTimeFormat((prevTimeFormat) => (prevTimeFormat === 'numeric' ? 'long' : 'numeric'));
  };

  return { timeFormat, toggleTimeFormat };
};
