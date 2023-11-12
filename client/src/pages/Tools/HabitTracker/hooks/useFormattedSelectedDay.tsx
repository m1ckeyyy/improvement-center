import { useHabitTrackerContext } from './../components/HabitContext';

export const useFormattedSelectedDays = () => {
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday '];
  const { selectedDay } = useHabitTrackerContext()!;
  const selectedDayIndex = new Date(selectedDay).getDay();
  const selectedDayOfWeek = dayNames[selectedDayIndex];
  return { selectedDayOfWeek };
};
