import styles from './../Journal.module.scss';
import { useState, useRef } from 'react';
import { BsBoxArrowRight } from 'react-icons/bs';

export const NewNote = ({ setNotes }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const titleRef = useRef(null);
  const contentRef = useRef(null);

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
      // TOASTIFY
      return;
    }

    const time = new Date(Date.now());
    const day = String(time.getDate()).padStart(2, '0');
    const month = String(time.getMonth() + 1).padStart(2, '0');
    const year = time.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    const newNote = {
      title: title,
      content: content,
      date: formattedDate,
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
    setTitle('');
    setContent('');
  };

  return (
    <form className={`${styles.note} ${styles.newNote} ${styles.scrollableContainer}`} onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={handleTitleChange} placeholder="Enter title..." className={styles.newNoteTitle} onKeyDown={focusOnContent} ref={titleRef} />
      <textarea value={content} onChange={handleContentChange} placeholder="Enter content..." className={styles.newNoteContent} ref={contentRef} onKeyDown={focusOnTitle} />
      <button className={styles.submitNote} type="submit" title="submit">
        <BsBoxArrowRight size="2em" />
      </button>
    </form>
  );
};
