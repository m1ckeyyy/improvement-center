import React from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import styles from './../navbar.module.scss';

export const NavbarElement = ({ content, isScroll, duration, offset, to, phoneMedia }) => {
  //scroll link
  //console.log(isScroll);
  if (isScroll) {
    return (
      <li>
        <Link to={to} smooth={true} duration={duration} offset={offset} className={styles.navbarElement}>
          {content}
        </Link>
      </li>
    );
  } else if (phoneMedia) {
    return (
      <li>
        <RouterLink to={to} className={`${styles.navbarElement} ${styles.phoneMedia}`}>
          <AiOutlineUser style={{ marginRight: '3px' }} />
          {content}
        </RouterLink>
      </li>
    );
  } else if (!phoneMedia && !isScroll) {
    return (
      <RouterLink to={to} className={`${styles.navbarElement} ${styles.userNavbarElement}`}>
        {content}
      </RouterLink>
    );
  }
};
