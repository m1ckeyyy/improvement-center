import styles from './../Journal.module.scss';
import { useRef } from 'react';
import { BsBoxArrowRight } from 'react-icons/bs';
import { useNewNote } from './useNewNote';

export const NewNote = ({ setNotes }) => {
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const { title, content, focusOnContent, focusOnTitle, handleTitleChange, handleContentChange, handleSubmit } = useNewNote({ contentRef, titleRef, setNotes });

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
