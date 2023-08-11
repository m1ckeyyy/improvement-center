import { useMemo } from 'react';

export const usePinSorting = ({ sortedNotes }) => {
  const prioritizedAndSortedNotes = useMemo(() => {
    const pinnedNotes = sortedNotes.filter((note) => note.pinned);
    const unpinnedNotes = sortedNotes.filter((note) => !note.pinned);
    return [...pinnedNotes, ...unpinnedNotes];
  }, [sortedNotes]);

  return prioritizedAndSortedNotes;
};
