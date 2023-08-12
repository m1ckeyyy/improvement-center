export const useSaveUpdatedNote = ({ e, setNotes, pinnedNotesFirst, id }) => {
  e.stopPropagation();
  const newData = e.target.innerText;
  const noteIndex = pinnedNotesFirst.findIndex((note) => note.id === id);
  const updatedNotes = [...pinnedNotesFirst];
  const oldData = pinnedNotesFirst[noteIndex];

  if (e.target.id === 'title' && newData === oldData.title) return;
  if (e.target.id === 'content' && newData === oldData.content) return;

  if (e.target.id === 'title') {
    updatedNotes[noteIndex] = {
      ...updatedNotes[noteIndex],
      title: newData,
    };
  }
  if (e.target.id === 'content') {
    updatedNotes[noteIndex] = {
      ...updatedNotes[noteIndex],
      content: newData,
    };
  }
  setNotes(updatedNotes);
};
