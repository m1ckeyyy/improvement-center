import Navbar from "./../../components/Navbar";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.background}
          style={{ backgroundImage: `url('/client/public/images/man-with-a-book.jpg'))` }}
        />
        <div className={styles.header}>
          <h1>Hello, World!</h1>
          <p>This is some text on top of the background image.</p>
        </div>
      </div>
    </>
  );
}
