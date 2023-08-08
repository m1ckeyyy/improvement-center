import { useEffect } from 'react';

export const useGlobalClick = ({ dropDownMenuRef, setIsSortMenuOpen }) => {
  useEffect(() => {
    const handleGlobalClick = (event) => {
      if (!dropDownMenuRef.current.parentNode?.contains(event.target)) {
        setIsSortMenuOpen(false);
      }
    };
    document.addEventListener('click', handleGlobalClick);

    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);
};
