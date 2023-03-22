import Navbar from "./../../components/Navbar";
import styles from "./home.module.scss";
import { AiOutlineHome, AiOutlineUser, AiOutlineMenu } from "react-icons/ai";

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
        <header className={styles.header}>
          <Link to="/" className={styles.logo}>
            <AiOutlineHome
              color="greenyellow"
              size="28px"
              style={{ marginRight: "3px" }}
            />
            <span>IC</span>
          </Link>
          <ul className={styles.navbar}>
            <li>
              <Link
                to="/"
                className={`${styles.navbarElement} ${styles.active}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={styles.navbarElement}>
                About
              </Link>
            </li>
            <li>
              <Link to="/tools" className={styles.navbarElement}>
                Tools
              </Link>
            </li>
            <li>
              <Link to="/login" className={styles.navbarElement}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className={styles.navbarElement}>
                Register
              </Link>
            </li>
          </ul>
          <div className={styles.main}>
            <Link to="#" className={styles.user}>
              <AiOutlineUser
                color="greenyellow"
                size="28px"
                style={{ marginRight: "7px" }}
              />
              Login
            </Link>
            <Link to="#">Register</Link>
            <div>
              <AiOutlineMenu className={styles.menuIcon} />
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
{
  /* <img
            src="/images/logo3.png"
            alt="Logo"
            className={styles.logo}
            onClick={handleLogoClick}
          /> */
}
