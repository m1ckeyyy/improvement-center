import { useMemo } from 'react';

export const useSorting = ({ searchbarFilteredNotes, sortingData }) => {
  const sortedNotes = useMemo(() => {
    if (sortingData.mode === 'alphabetically') {
      const sorted = [...searchbarFilteredNotes];
      sorted.sort((a, b) => {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        return sortingData.sortOrderRising ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
      });
      return sorted;
    }

    if (sortingData.mode === 'length') {
      const sorted = [...searchbarFilteredNotes];
      sorted.sort((a, b) => {
        const lengthA = (a.title + a.content).length;
        const lengthB = (b.title + b.content).length;
        return sortingData.sortOrderRising ? lengthB - lengthA : lengthA - lengthB;
      });
      return sorted;
    }

    if (sortingData.mode === 'date') {
      const sorted = [...searchbarFilteredNotes];
      sorted.sort((a, b) => {
        const dateA = new Date(a.date.exactTime);
        const dateB = new Date(b.date.exactTime);
        return sortingData.sortOrderRising ? dateB - dateA : dateA - dateB;
      });
      return sorted;
    }

    return searchbarFilteredNotes;
  }, [searchbarFilteredNotes, sortingData.mode, sortingData.sortOrderRising]);

  return sortedNotes;
};
