import styles from './../navbar.module.scss';
import { Link } from 'react-scroll';
import { BsMouse } from 'react-icons/bs';

export const IndependentScrollIcon = () => {
  return (
    <div className={styles.iconContainer} tabIndex="-1">
      <Link smooth={true} offset={0} duration={500} to="tools">
        <BsMouse color="white" className={styles.scrollIcon} />
      </Link>
    </div>
  );
};
