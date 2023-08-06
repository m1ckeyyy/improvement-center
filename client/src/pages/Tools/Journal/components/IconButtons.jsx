import { BiUser, BiHomeAlt, BiExit, BiPencil } from 'react-icons/bi';
import styles from './../Journal.module.scss';

export const IconButtons = () => {
  return (
    <div className={styles.iconButtons}>
      <button type="button" className={styles.profileBtn} title="profile">
        <a href="/profile">
          <BiUser size="35" />
        </a>
      </button>
      <button type="button" className={styles.homeIcon} title="home">
        <a href="/">
          <BiHomeAlt size="35" />
        </a>
      </button>

      <button type="button" className={styles.editBtn} title="back">
        <BiPencil size="35" />
      </button>
    </div>
  );
};
