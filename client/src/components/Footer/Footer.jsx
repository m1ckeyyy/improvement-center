import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <h1>Foooooooooooooter</h1>
      <form>
        <label>
          Found a Bug? 🪲 Send Feedback! <input type="text" name="email" />
        </label>
        <input type="submit" value="submit" />
      </form>
    </>
  );
};

export default Footer;
