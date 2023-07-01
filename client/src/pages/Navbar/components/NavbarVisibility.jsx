export const navbarVisibility = (showNav, prevScrollY, setNavBg, setShowNav, setPrevScrollY) => {
  const currentScrollY = window.scrollY;
  if (showNav && window.scrollY > 150) {
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
