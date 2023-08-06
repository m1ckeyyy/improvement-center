import { useEffect, useState } from 'react';

export const useScrollable = ({ checkIfScrollable }) => {
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const note = checkIfScrollable.current;

    if (note) {
      setIsScrollable(note.scrollHeight > note.clientHeight);
    }
  }, []);

  return { isScrollable };
};
