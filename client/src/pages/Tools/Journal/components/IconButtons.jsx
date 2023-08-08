import { BiUser, BiHomeAlt, BiPencil } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import styles from './../Journal.module.scss';

export const IconButtons = () => {
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

      <button type="button" className={styles.editBtn} title="back">
        <BiPencil size="35" />
      </button>
    </div>
  );
};
