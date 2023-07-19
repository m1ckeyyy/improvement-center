import { useEffect } from 'react';
export const handleScroll = (setShowContent, aboutSectionHeight) => {
  const handler = () => {
    const isAboutSectionVisible = window.scrollY + window.innerHeight > aboutSectionHeight.offsetTop + 100;

    if (aboutSectionHeight && isAboutSectionVisible) {
      setShowContent(true);
      window.removeEventListener('scroll', handleScroll);
    }
  };
  window.addEventListener('scroll', handler);
  return () => window.removeEventListener('scroll', handler);
};
