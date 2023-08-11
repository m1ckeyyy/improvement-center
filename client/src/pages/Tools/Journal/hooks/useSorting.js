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
        return sortingData.sortOrderRising ? lengthA - lengthB : lengthB - lengthA;
      });
      return sorted;
    }

    if (sortingData.mode === 'date') {
      const sorted = [...searchbarFilteredNotes];
      sorted.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return sortingData.sortOrderRising ? dateA - dateB : dateB - dateA;
      });
      return sorted;
    }

    return searchbarFilteredNotes;
  }, [searchbarFilteredNotes, sortingData.mode, sortingData.sortOrderRising]);

  return sortedNotes;
};
