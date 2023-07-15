import React, { useRef, useEffect } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useHeaderEffect } from './../effects/hackerEffect';
import { RegisterForm } from './components/RegisterForm';
import { handleIconMouseOut, handleIconMouseOver } from './components/handleHover';
import styles from './reg.module.scss';

export default function Register() {
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
            <p>Getting started is quick and simple, just fill out the info below!</p>
          </div>
          <RegisterForm />
        </div>
        <div className={styles.loginRight}>
          <img src="images/img3.png" />
        </div>
      </div>
    </div>
  );
}
