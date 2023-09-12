import { useState, useEffect } from 'react';

export const useNavbarVisiblity = () => {
    const [showNav, setShowNav] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [navBackground, setNavBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (showNav && currentScrollY > 150) {
        setNavBackground(true);
      } else {
        setNavBackground(false);
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
  }, [prevScrollY]);

  return { isMenuOpen, setIsMenuOpen, showNav, navBackground , setShowNav };
};
