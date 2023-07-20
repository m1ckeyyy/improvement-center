export const handleScroll = (setShowContent, sectionRef) => {
  const handler = () => {
    const isAboutSectionVisible = window.scrollY + window.innerHeight > sectionRef.offsetTop + 100;

    if (sectionRef && isAboutSectionVisible) {
      setShowContent(true);
      window.removeEventListener('scroll', handleScroll);
    }
  };
  window.addEventListener('scroll', handler);
  return () => window.removeEventListener('scroll', handler);
};
