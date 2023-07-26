import { useEffect } from 'react';

export function useClickOutside(isMenuOpen, setIsMenuOpen) {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.tagName !== 'svg' && event.target.tagName !== 'path' && event.target.tagName !== 'UL' && isMenuOpen) {
        setIsMenuOpen((prev) => !prev);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);
}
