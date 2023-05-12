import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <h1>Foooooooooooooter</h1>
      <form>
        <label>
          Found a Bug? 🪲 Send Feedback! <input type="text" name="email" />
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Footer;
