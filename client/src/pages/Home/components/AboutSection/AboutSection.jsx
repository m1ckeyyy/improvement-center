import styles from './AboutSection.module.scss';
import { useEffect, useRef, useState } from 'react';
import { TextHighlight } from './components/TextHighlight';
import { handleScroll } from './components/handleScroll';

export const AboutSection = () => {
  const aboutRef = useRef(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    handleScroll(setShowContent, aboutRef.current);
  }, []);

  return (
    <div className={styles.container} id="about" ref={aboutRef}>
      <div className={`${styles.aboutHeader} ${showContent ? styles.runAboutHeaderEffect : ''}`}>ABOUT ME</div>
      <section className={styles.aboutSection}>
        <div className={styles.leftContent}>
          <div className={styles.aboutText}>
            <p>
              Hi, I'm <TextHighlight>Mikolaj Krawczynski</TextHighlight>, the creator of this website. I'm a QA / Web Dev with a passion for developing secure projects.
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
            <div className={styles.aboutTextAfter}></div>
          </div>
        </div>
        <div className={styles.rightContent}>
          <img src="images/presenter3.png" alt="presenter" className={styles.presenterImg} />
        </div>
      </section>
    </div>
  );
};
