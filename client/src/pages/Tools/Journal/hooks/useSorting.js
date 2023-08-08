export const useSorting = ({ filteredNotes, sortingData }) => {
  if (sortingData.mode === 'alphabetically') {
    const sortedNotes = [...filteredNotes];
    sortedNotes.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();
      if (titleA < titleB) {
        return sortingData.sortOrderRising ? -1 : 1;
      }
      if (titleA > titleB) {
        return sortingData.sortOrderRising ? 1 : -1;
      }
      return 0;
    });
    return sortedNotes;
  }
  if (sortingData.mode === 'length') {
    const sortedNotes = [...filteredNotes];
    sortedNotes.sort((a, b) => {
      const lengthA = (a.title + a.content).length;
      const lengthB = (b.title + b.content).length;
      return sortingData.sortOrderRising ? lengthB - lengthA : lengthA - lengthB;
    });
    return sortedNotes;
  }

  if (sortingData.mode === 'date') {
    const sortedNotes = [...filteredNotes];
    sortedNotes.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortingData.sortOrderRising ? dateB - dateA : dateA - dateB;
    });
    return sortedNotes;
  }
  return filteredNotes;
};
