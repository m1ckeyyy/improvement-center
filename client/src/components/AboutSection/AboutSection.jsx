import styles from './AboutSection.module.scss';
import { useEffect, useRef, useState } from 'react';
import { TextHighlight } from './components/TextHighlight';

export const AboutSection = () => {
  const aboutRef = useRef(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current && window.scrollY + window.innerHeight > aboutRef.current.offsetTop + 100) {
        setShowContent(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.container} id="about" ref={aboutRef}>
      <div className={`${styles.aboutHeader} ${showContent ? styles.runAboutHeaderEffect : ''}`}>ABOUT ME</div>
      <section className={styles.aboutSection}>
        <div className={styles.leftContent}>
          <div className={styles.aboutText}>
            <p>
              Hi, I'm <TextHighlight>Mikolaj Krawczynski</TextHighlight>, the creator of this website. I'm a web developer with a passion for creating beautiful and functional websites.
            </p>
            <br />
            <p>
              You can find me on{' '}
              <TextHighlight>
                <a href="https://github.com/m1ckeyyy" target="_blank">
                  GitHub
                </a>
              </TextHighlight>{' '}
              and{' '}
              <TextHighlight>
                <a href="https://www.linkedin.com/in/mikolaj-krawczynski-a82ba5240/" target="_blank">
                  LinkedIn
                </a>
              </TextHighlight>
              , where I share my latest projects.
            </p>
            <br />

            <p>
              If you have any suggestions for the website, please feel free to send <span>feedback</span> using the box below.
            </p>
          </div>
        </div>
        <div className={styles.rightContent}>
          <img src="images/presenter3.png" alt="presenter" className={styles.presenterImg} />
        </div>
      </section>
    </div>
  );
};
