import styles from '../navbar.module.scss';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-scroll';

export const HomeIcon = () => {
  return (
    <Link to="home" smooth={true} duration={500} className={styles.logo}>
      <AiOutlineHome
        className={styles.animatedLogoIcon}
        color="#b4e4ff"
        size="28px"
        style={{
          marginRight: '4px',
          marginBottom: '4px',
          marginTop: '4px',
          minWidth: '28px',
          minHeight: '28px',
        }}
      />
      <span className={styles.title}>Improvement Center</span>
    </Link>
  );
};
