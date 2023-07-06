import React, { useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import styles from './landingPage.module.scss';

export const LandingPage = () => {
  const handleScrollClick = () => {
    window.scrollTo({
      top: window.pageYOffset + window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className={styles.mainSection}>
      <div className={styles.mainContent}>
        <div className={styles.leftContent}>
          <h1 className={styles.mainHeading}>
            The Ultimate
            <br />
            Productivity Hub
          </h1>
          <p className={styles.mainDescription}>
            "The secret of getting ahead is getting started." <br />- Mark Twain
          </p>
          <div className={styles.btnContainer}>
            <Link smooth={true} offset={0} duration={500} to="tools" className={styles.btnGetStarted}>
              So Get Started
            </Link>
          </div>
        </div>
        <div className={styles.rightContent}>
          <img src="images/wmn3.png" alt="woman" className={styles.womanImg} />
        </div>
      </div>
    </section>
  );
};
