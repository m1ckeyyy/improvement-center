import React from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { useNavbarVisiblity } from './useNavbarVisiblity';
import styles from '../navbar.module.scss';

export const NavbarElement = ({ content, scrollableLink, duration, offset, to, mobileDisplay }) => {
  // setShowNav(true)
  const {setShowNav} = useNavbarVisiblity() 
  const logger = ()=>{
    
  } 
  if (scrollableLink) {
    return (
      <li>
        <Link onClick={logger} to={to} smooth={true} duration={duration} offset={offset} className={styles.navbarElement}>
          {content}
        </Link>
      </li>
    );
  } else if (mobileDisplay) {
    return (
      <li>
        <RouterLink to={to} className={`${styles.navbarElement} ${styles.mobileDisplay}`}>
          <AiOutlineUser style={{ marginRight: '3px' }} />
          {content}
        </RouterLink>
      </li>
    );
  } else if (!mobileDisplay && !scrollableLink) {
    return (
      <RouterLink to={to} className={`${styles.navbarElement} ${styles.userNavbarElement}`}>
        {content}
      </RouterLink>
    );
  }
};
