import { random } from 'nanoid';

export const handleDelete = ({ id, pinnedNotesFirst, setNotes }) => {
  const updatedNotes = pinnedNotesFirst.filter((note) => note.id !== id);
  setNotes(updatedNotes);
};
export const handlePin = ({ id, pinnedNotesFirst, setNotes }) => {
  const updatedNotes = pinnedNotesFirst.map((note) => (note.id === id ? { ...note, pinned: !note.pinned } : note));
  setNotes(updatedNotes);
};
export const handleChangeColor = ({ id, pinnedNotesFirst, setNotes }) => {
  function getBrightness(hexColor) {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);

    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    return brightness;
  }

  function getRandomHexColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const hexColor = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    return hexColor;
  }

  function textTheme(hexColor) {
    const brightnessThreshold = 128;
    const brightness = getBrightness(hexColor);

    if (brightness < brightnessThreshold) {
      return 'white';
    } else {
      return 'black';
    }
  }

  const randomHexColor = getRandomHexColor();
  const textColor = textTheme(randomHexColor);

  const updatedNotes = pinnedNotesFirst.map((note) => (id === note.id ? { ...note, color: [randomHexColor, textColor] } : note));
  setNotes(updatedNotes);
};
