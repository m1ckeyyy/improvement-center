import styles from './../Journal.module.scss';
import {Note} from './Note.jsx'
export const NotesList = ({notes}) => {
  return <div>{notes.map((note)=><Note id={note.id} text={note.text} date={note.date}/>)}</div>;
};
