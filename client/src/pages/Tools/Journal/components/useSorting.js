export const useSorting = ({ filteredNotes, sortingMode }) => {
  //mode of sort
  console.log(sortingMode);
  const sortedNotes = [...filteredNotes];
  sortedNotes.sort((a, b) => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
  });
  return sortedNotes;
};
