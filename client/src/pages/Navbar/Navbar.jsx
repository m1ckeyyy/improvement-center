import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styles from './navbar.module.scss';
import { AiOutlineUser, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link as RouterLink } from 'react-router-dom';

import { navbarVisibility } from './components/NavbarVisibility';
import { scrollTo } from './components/ScrollTo';
import { ScrollIcon } from './components/ScrollIcon';
import { HomeIcon } from './components/HomeIcon';
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      navbarVisibility(showNav, prevScrollY, setNavBg, setShowNav, setPrevScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={styles.navContainer}>
        <header className={`${styles.header} ${showNav ? '' : styles.hideNav} ${navBg ? styles.navBackground : ''}`}>
          <HomeIcon />
          <ul className={`${styles.navbar} ${isMenuOpen ? styles.menuOpen : ''}`}>
            <li>
              <a onClick={scrollTo} href="#" className={`${styles.navbarElement} ${styles.active}`}>
                Home
              </a>
            </li>
            <li>
              <Link to="tools" smooth={true} offset={20} duration={500} className={styles.navbarElement}>
                Tools
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={-30} duration={500} className={styles.navbarElement}>
                About
              </Link>
            </li>
            <li>
              <RouterLink to="/login" className={`${styles.navbarElement} ${styles.phoneMedia}`}>
                <AiOutlineUser style={{ marginRight: '3px' }} />
                Login
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/register" className={`${styles.navbarElement} ${styles.phoneMedia}`}>
                <AiOutlineUser style={{ marginRight: '3px' }} />
                Register
              </RouterLink>
            </li>
          </ul>
          <div className={styles.main}>
            <RouterLink to="/login" className={styles.user}>
              <AiOutlineUser color="#b4e4ff" size="28px" style={{ marginRight: '7px' }} />
              <span>Login</span>
            </RouterLink>
            <RouterLink to="/register">
              <span>Register</span>
            </RouterLink>
            <div tabIndex="0">{isMenuOpen ? <AiOutlineClose className={styles.menuIcon} onClick={toggleMenu} /> : <AiOutlineMenu className={styles.menuIcon} onClick={toggleMenu} />}</div>
          </div>
        </header>
        <ScrollIcon />
      </div>
    </>
  );
}
