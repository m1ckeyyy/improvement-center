import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import styles from './navbar.module.scss';
import { AiOutlineUser, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link as RouterLink } from 'react-router-dom';
import { navbarVisibility } from './components/NavbarVisibility';
import { IndependentScrollIcon } from './components/ScrollIcon';
import { HomeIcon } from './components/HomeIcon';
import { NavbarElement } from './components/NavbarElement';

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
            <NavbarElement to="home" content="Home" isScroll={true} duration={500} offset={0} />
            <NavbarElement to="tools" content="Tools" isScroll={true} duration={500} offset={20} />
            <NavbarElement to="about" content="About" isScroll={true} duration={500} offset={-30} />
            <NavbarElement to="/login" content="Login" phoneMedia={true} />
            <NavbarElement to="/register" content="Register" phoneMedia={true} />
          </ul>

          <div className={styles.main}>
            <AiOutlineUser color="#b4e4ff" size="28px" style={{ marginRight: '7px' }} />
            <NavbarElement to="/login" content="Login" phoneMedia={false} />
            <NavbarElement to="/register" content="Register" />
            <div tabIndex="0">{isMenuOpen ? <AiOutlineClose className={styles.menuIcon} onClick={toggleMenu} /> : <AiOutlineMenu className={styles.menuIcon} onClick={toggleMenu} />}</div>
          </div>
        </header>
        <IndependentScrollIcon />
      </div>
    </>
  );
}
