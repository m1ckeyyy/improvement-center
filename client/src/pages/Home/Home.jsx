import Navbar from "./../../components/Navbar";
import styles from "./home.module.scss";

export default function Home() {
	console.log(styles);
	return (
		<div className={styles.pageBody}>
			{/* <Navbar /> */}
			<h1>Homes</h1>
			<div className={styles.spiralDiv}>
				<img src="images/spiral.jpg" className={styles.spiral} />
			</div>
		</div>
	);
}
