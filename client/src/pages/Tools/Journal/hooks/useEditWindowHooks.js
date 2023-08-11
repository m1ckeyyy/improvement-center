export const handleDelete = ({ id, sortedNotes, setNotes }) => {
  const updatedNotes = sortedNotes.filter((note) => note.id !== id);
  setNotes(updatedNotes);
};
export const handlePin = ({ id, sortedNotes, setNotes }) => {
  const updatedNotes = sortedNotes.map((note) => (note.id === id ? { ...note, pinned: !note.pinned } : note));
  setNotes(updatedNotes);
};

