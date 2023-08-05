import styles from './../Journal.module.scss';
import { useState } from 'react';
import { BsBoxArrowRight } from 'react-icons/bs';

export const NewNote = ({ setNotes }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
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
    <form className={`${styles.note} ${styles.newNote}`} onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={handleTitleChange} placeholder="Enter title..." className={styles.newNoteTitle} />
      <textarea value={content} onChange={handleContentChange} placeholder="Enter content..." className={styles.newNoteContent} />
      <button className={styles.submitNote} type="submit">
        <BsBoxArrowRight size="2em" />
      </button>
    </form>
  );
};
