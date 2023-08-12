import { useState } from 'react';

export const useNotesFetch = () => {
  const [notes, setNotes] = useState(() => {
    const notesLocalStorage = JSON.parse(localStorage.getItem('notes'));
    return notesLocalStorage && notesLocalStorage.length > 0 ? notesLocalStorage : [];
  });

  return { notes, setNotes };
};