import { useState, useEffect } from 'react';
import { AiOutlineUser, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { navbarVisibility } from './components/NavbarVisibility';
import { IndependentScrollIcon } from './components/ScrollIcon';
import { HomeIcon } from './components/HomeIcon';
import { NavbarElement } from './components/NavbarElement';
import { useClickOutside } from './components/useClickOutside';
import styles from './navbar.module.scss';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    navbarVisibility(showNav, prevScrollY, setNavBg, setShowNav, setPrevScrollY);
  }, [prevScrollY]);

  useClickOutside(isMenuOpen, setIsMenuOpen);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.navContainer}>
      <header className={`${styles.header} ${showNav ? '' : styles.hideNav} ${navBg ? styles.navBackground : ''}`}>
        <HomeIcon />

        <ul className={`${styles.navbar} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <NavbarElement to="home" content="Home" scrollableLink={true} duration={500} offset={0} />
          <NavbarElement to="tools" content="Tools" scrollableLink={true} duration={500} offset={20} />
          <NavbarElement to="about" content="About" scrollableLink={true} duration={500} offset={-30} />
          <NavbarElement to="/login" content="Login" mobileDisplay={true} />
          <NavbarElement to="/register" content="Register" mobileDisplay={true} />
        </ul>

        <div className={styles.main}>
          <AiOutlineUser color="#b4e4ff" size="28px" style={{ marginRight: '7px' }} />
          <NavbarElement to="/login" content="Login" mobileDisplay={false} />
          <NavbarElement to="/register" content="Register" />
          <div tabIndex="0">{isMenuOpen ? <AiOutlineClose className={styles.menuIcon} onClick={toggleMenu} /> : <AiOutlineMenu className={styles.menuIcon} onClick={toggleMenu} />}</div>
        </div>
      </header>
      <IndependentScrollIcon />
    </div>
  );
}
