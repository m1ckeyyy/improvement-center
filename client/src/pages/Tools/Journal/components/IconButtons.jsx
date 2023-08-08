import { BiUser, BiHomeAlt, BiPencil, BiCheckSquare } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import styles from './../Journal.module.scss';

export const IconButtons = ({ editMode, setEditMode }) => {
  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
  };
  return (
    <div className={styles.iconButtons}>
      <button type="button" className={styles.profileBtn} title="profile">
        <Link to="/profile">
          <BiUser size="35" />
        </Link>
      </button>
      <button type="button" className={styles.homeIcon} title="home">
        <Link to="/">
          <BiHomeAlt size="35" />
        </Link>
      </button>

      <button type="button" className={styles.editBtn} title="edit" onClick={toggleEditMode}>
        {editMode ? <BiCheckSquare size="35" /> : <BiPencil size="35" />}
      </button>
    </div>
  );
};
