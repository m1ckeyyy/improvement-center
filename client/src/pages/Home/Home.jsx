import Navbar from "./../../components/Navbar";
import styles from "./home.module.scss";
import { Link } from "react-router-dom";

const handleLogoClick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <img
            src="/images/logo3.png"
            alt="Logo"
            className={styles.logo}
            onClick={handleLogoClick}
          />
          <nav className={styles.navbar}>
            <Link to="/tools" className={styles.navbarElement}>
              Tools
            </Link>
            <Link to="/about" className={styles.navbarElement}>
              About
            </Link>
            <Link to="/login" className={styles.navbarElement}>
              Login
            </Link>
            <Link to="/register" className={styles.navbarElement}>
              Register
            </Link>
            {/* <h1>Hello, World!</h1> */}
            {/* <p>This is some text on top of the background image.</p> */}
          </nav>
        </div>
      </div>
    </>
  );
}
