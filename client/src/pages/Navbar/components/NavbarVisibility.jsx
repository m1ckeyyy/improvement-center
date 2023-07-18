import { useEffect } from 'react';
export const navbarVisibility = (showNav, prevScrollY, setNavBg, setShowNav, setPrevScrollY) => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (showNav && currentScrollY > 150) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
    if (currentScrollY > prevScrollY) {
      setShowNav(false);
      setPrevScrollY(currentScrollY);
    } else {
      setShowNav(true);
      setPrevScrollY(currentScrollY);
      return;
    }
    if (window.scrollY > 100) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};
