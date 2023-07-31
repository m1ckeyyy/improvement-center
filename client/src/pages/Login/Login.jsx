import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { useHeaderEffect } from './../effects/hackerEffect';
import { handleIconMouseOut, handleIconMouseOver } from './components/handleHover';
import { LoginForm } from './components/LoginForm';
import styles from './log.module.scss';

export default Login = () => {
  const header = useRef(null);
  useEffect(() => {
    useHeaderEffect(header.current);
  }, []);

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.loginLeft}>
          <Link to="/">
            <div className={styles.iconsContainer} onMouseOver={({ target }) => handleIconMouseOver(target)} onMouseOut={({ target }) => handleIconMouseOut(target)}>
              <AiOutlineHome size="2em" color="black" />
            </div>
          </Link>
          <div className={styles.loginHeader} ref={header}>
            <h1 data-value="IMPROVEMENT" className={styles.improvement}>
              IMPROVEMENT
            </h1>
            <h1 data-value="CENTER" className={styles.center}>
              CENTER
            </h1>
            <p>
              Welcome Back! <br />
              Sign In to Your Account
            </p>
          </div>
          <LoginForm />
        </div>
        <div className={styles.loginRight}>
          <img src="images/login-img.png" />
        </div>
      </div>
    </div>
  );
};
