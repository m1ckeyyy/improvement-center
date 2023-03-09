import React from "react";
import styles from "./log.module.scss";
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHeaderEffect as startHeaderEffect } from "./../effects/hackerEffect";
export default function Login() {
  const pageTitle = document.querySelectorAll(`.${styles["login-header"]} h1`);
  startHeaderEffect(pageTitle);
  return (
    <div className={styles.container}>
      <div className={styles["login-left"]}>
        <div className={styles["login-header"]}>
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
        <form className={styles["login-form"]}>
          <div className={styles["login-form-content"]}>
            <div className={`${styles["form-item"]} ${styles["email"]}`}>
              <label>Enter Email</label>
              <input type="text" id="email" autoFocus />
            </div>
            <div className={`${styles["form-item"]} ${styles["password"]}`}>
              <label>Enter Password</label>
              <input type="password" id="password" />
              <div className={styles.checkbox}>
                <input type="checkbox" id="rememberMeCheckbox" />
                <label
                  htmlFor="rememberMeCheckbox"
                  className={styles.checkboxLabel}
                >
                  Remember Me
                </label>
              </div>
            </div>

            <div className={styles.buttons}>
              <div className={styles.line}></div>
              <button type="submit" className={styles["submit-btn"]}>
                Sign In
              </button>
              <button className={styles["create-account-btn"]}>
                <Link to="/register" className={styles["create-account-href"]}>
                  Create Account
                </Link>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className={styles["login-right"]}>
        <img src="images/login-img.png" />
      </div>
    </div>
  );
}