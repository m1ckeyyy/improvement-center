// import Navbar from "./../../components/Navbar";
import styles from "./home.module.scss";
import {
	AiOutlineHome,
	AiOutlineUser,
	AiOutlineMenu,
	AiOutlineClose,
} from "react-icons/ai";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const handleLogoClick = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};
export default function Home() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<div className={styles.container}>
				<header className={styles.header}>
					<Link to="/" className={styles.logo} onClick={handleLogoClick}>
						<AiOutlineHome
							color="#b4e4ff"
							size="28px"
							style={{ marginRight: "3px" }}
						/>
						<span className={styles.title}>Improvement Center</span>
					</Link>
					<ul
						className={`${styles.navbar} ${isMenuOpen ? styles.menuOpen : ""}`}
					>
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
					</ul>
					<div className={styles.main}>
						<Link to="/login" className={styles.user}>
							<AiOutlineUser
								color="#b4e4ff"
								size="28px"
								style={{ marginRight: "7px" }}
							/>
							<span>Login</span>
						</Link>
						<Link to="/register">
							<span>Register</span>
						</Link>
						<div>
							{isMenuOpen ? (
								<AiOutlineClose
									className={styles.menuIcon}
									onClick={toggleMenu}
								/>
							) : (
								<AiOutlineMenu
									className={styles.menuIcon}
									onClick={toggleMenu}
								/>
							)}
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
