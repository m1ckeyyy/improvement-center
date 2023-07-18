import { useState, useEffect, useRef } from 'react';
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

  const menuRef = useRef(false);
  const buttonRef = useRef(false);

  const handleClickOutside = (event) => {
    // console.log(event.target);
    // if (menuRef.current && !menuRef.current.contains(event.target)) {
    //   setIsMenuOpen(false);
    // }
    // console.log(isMenuOpen);
    // if (buttonRef.current.contains(event.target)) {
    //   console.log('RETURN');
    // }
    // if (isMenuOpen && event.target != menuRef.current) {
    //   // setIsMenuOpen((prev) => !prev);
    // }
    // console.log(event.target);

    // 1. klikniecie w ikone => return
    // 2. menuIsOpen === false => return
    // 3. kliknicie poza <ul> => setIsMenuOpen(!isMenuOpen)

    console.log(buttonRef.current, buttonRef.current.contains(event.target));
    console.log(event.target);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <>
      <div className={styles.navContainer}>
        <header className={`${styles.header} ${showNav ? '' : styles.hideNav} ${navBg ? styles.navBackground : ''}`}>
          <HomeIcon />
          <ul className={`${styles.navbar} ${isMenuOpen ? styles.menuOpen : ''}`} ref={menuRef}>
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
            <div tabIndex="0" ref={buttonRef}>
              {isMenuOpen ? <AiOutlineClose className={styles.menuIcon} onClick={toggleMenu}/> : <AiOutlineMenu className={styles.menuIcon} onClick={toggleMenu} />}
            </div>
          </div>
        </header>
        <IndependentScrollIcon />
      </div>
    </>
  );
}
