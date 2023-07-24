import styles from './../Settings.module.scss';
import { BiExit, BiHomeAlt, BiUser } from 'react-icons/bi';

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

      <button type="submit" className={styles.closeBtn} title="back">
        <BiExit size="35" />
      </button>
    </div>
  );
};
