import styles from './Footer.module.scss';
import { Link } from 'react-scroll';

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.copyright}>@2023 Mikołaj Krawczyński | All rights reserved.</div>

      <div className={styles.sectionOne}>
        <h2>IMPROVEMENT CENTER</h2>
        <h3>The Ultimate Productivity Hub</h3>
      </div>

      <div className={styles.sectionTwo}>
        <h2>Navigation</h2>
        <Link to="home" smooth={true} duration={500}>
          <h3> Home</h3>
        </Link>
        <Link to="tools" smooth={true} offset={20} duration={500}>
          <h3>Tools</h3>
        </Link>
        <Link to="about" smooth={true} offset={-20} duration={500}>
          <h3>About</h3>
        </Link>
      </div>

      <div className={styles.sectionThree}>
        <h2>Useful Links</h2>
        <a href="https://github.com/m1ckeyyy/login-app-frontend" target="_blank">
          <h3>GitHub Repository</h3>
        </a>
        <a href="https://github.com/m1ckeyyy" target="_blank">
          <h3>GitHub Profile</h3>
        </a>
        <a href="https://www.linkedin.com/in/mikolaj-krawczynski-a82ba5240/" target="_blank">
          <h3>LinkedIn</h3>
        </a>
      </div>

      <div className={styles.sectionFour}>
        <h2>Found a Bug? 🐛</h2>
        Send Feedback! Drop your e-mail
        <br />
        <div className={styles.form}>
          <input type="text" name="email" className={styles.formInput} />
          <input type="submit" value="⬅" className={styles.submitInput} />
        </div>
      </div>
    </div>
  );
};
