// import Navbar from "./../../components/Navbar";
import styles from "./navbar.module.scss";
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
			<div className={styles.navContainer}>
				<header className={styles.header}>
					<Link to="/" className={styles.logo} onClick={handleLogoClick}>
						<AiOutlineHome
							className={styles.animatedLogoIcon}
							color="#b4e4ff"
							size="28px"
							style={{
								marginRight: "4px",
								marginBottom: "4px",
								marginTop: "4px",
								minWidth: "28px",
								minHeight: "28px",
							}}
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
						<li>
							<Link
								to="/login"
								className={`${styles.navbarElement} ${styles.phoneMedia}`}
							>
								<AiOutlineUser style={{ marginRight: "3px" }} />
								Login
							</Link>
						</li>
						<li>
							<Link
								to="/register"
								className={`${styles.navbarElement} ${styles.phoneMedia}`}
							>
								<AiOutlineUser style={{ marginRight: "3px" }} />
								Register
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
						<div tabIndex="0">
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
