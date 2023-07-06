import styles from './../navbar.module.scss';
import { Link } from 'react-scroll';
import { BsMouse } from 'react-icons/bs';

export const ScrollIcon = () => {
  return (
    <div className={styles.iconContainer}>
      <Link smooth={true} offset={0} duration={500} to="tools">
        <BsMouse color="white" className={styles.scrollIcon} />
      </Link>
    </div>
  );
};
