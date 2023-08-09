import styles from './../Settings.module.scss';
import { BiExit, BiHomeAlt, BiUser } from 'react-icons/bi';
import { AiOutlineSave } from 'react-icons/ai';
export const IconButtons = () => {
  return (
    <div className={styles.iconButtons}>
      <button type="button" title="profile">
        <a href="/profile">
          <BiUser size="35" />
        </a>
      </button>

      <button type="button" title="home">
        <a href="/">
          <BiHomeAlt size="35" />
        </a>
      </button>

      <button type="submit" title="save">
        <AiOutlineSave size="35" />
      </button>
    </div>
  );
};
