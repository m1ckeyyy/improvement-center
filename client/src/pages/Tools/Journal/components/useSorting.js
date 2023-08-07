import { useMemo } from 'react';

export const useSorting = (notes, searchInput) => {
    const sortedNotes = useMemo(() => {
        if (!searchInput) return notes;
        const lowerCaseSearchInput = searchInput.toLowerCase();

        return notes.filter((note) => {
          const lowerCaseNote = (note.title + ' ' + note.content).toLowerCase();
          return lowerCaseNote.includes(lowerCaseSearchInput);
        });
      }, [notes, searchInput]);
    
      return sortedNotes;
}