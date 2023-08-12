import { useState } from 'react';
import { nanoid } from 'nanoid';
import { notifyNoteIncomplete } from './Notifications';

export const useNewNote = ({ contentRef, titleRef, setNotes }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const focusOnContent = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (titleRef.current.value.trim() !== '') {
        contentRef.current.focus();
      }
    }
  };

  const focusOnTitle = (event) => {
    if (event.key === 'Backspace' && contentRef.current.value === '') {
      event.preventDefault();
      titleRef.current.focus();
    }
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title || !content) {
      notifyNoteIncomplete();
      return;
    }

    const time = new Date(Date.now());
    const day = String(time.getDate()).padStart(2, '0');
    const month = String(time.getMonth() + 1).padStart(2, '0');
    const year = time.getFullYear();
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    const seconds = String(time.getSeconds()).padStart(2, '0'); // Add this line

    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    
    const newNote = {
      id: nanoid(),
      title: title,
      content: content,
      date: { day: formattedDate, exactTime: `${formattedDate} ${formattedTime}` },
      color: ['lightgray', 'black'],
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
    setTitle('');
    setContent('');
  };
  return { title, content, focusOnContent, focusOnTitle, handleTitleChange, handleContentChange, handleSubmit };
};
