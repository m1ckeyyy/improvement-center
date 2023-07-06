import styles from './../navbar.module.scss';
import { AiOutlineHome } from 'react-icons/ai';
import { scrollTo } from './ScrollTo';

export const HomeIcon = () => {
  return (
    <a href="#" className={styles.logo} onClick={scrollTo}>
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
    </a>
  );
};
