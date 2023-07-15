import styles from './../log.module.scss';
import { Link } from 'react-router-dom';

export function LoginForm() {
  return (
    <form className={styles.loginForm}>
      <div className={styles.loginFormContent}>
        <div className={styles.formItem}>
          <label>Enter Email</label>
          <input type="text" id="email" autoFocus />
        </div>
        <div className={`${styles.formItem} ${styles.password}`}>
          <label>Enter Password</label>
          <input type="password" id="password" />
          <div className={styles.checkbox}>
            <input type="checkbox" id="rememberMeCheckbox" />
            <label htmlFor="rememberMeCheckbox" className={styles.checkboxLabel}>
              Remember Me
            </label>
          </div>
        </div>

        <div className={styles.buttons}>
          <div className={styles.line}></div>
          <button type="submit" className={styles.submitBtn}>
            Sign In
          </button>
          <button className={styles.createAccountBtn}>
            <Link to="/register" className={styles.createAccountHref}>
              Create Account
            </Link>
          </button>
        </div>
      </div>
    </form>
  );
}
