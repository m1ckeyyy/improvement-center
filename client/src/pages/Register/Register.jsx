import React, { useRef, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";

import styles from "./reg.module.scss";
import { Link } from "react-router-dom";
import { useHeaderEffect } from "./../effects/hackerEffect";

// import styles from "./../../styles/RegisterStyles.scss?inline";

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
						<div
							className={styles.iconsContainer}
							onMouseOver={({ target }) => {
								if (!target.children[0]) {
									target.style.color = "rgba(18, 142, 91, 1)";
									return;
								}
								target.children[0].style.color = "rgba(18, 142, 91, 1)";
							}}
							onMouseOut={({ target }) => {
								if (!target.children[0]) return;
								target.children[0].style.color = "black";
							}}
						>
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
							Getting started is quick and simple, just fill out the info below!
						</p>
					</div>
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
									<label
										htmlFor="rememberMeCheckbox"
										className={styles.checkboxLabel}
									>
										Remember Me
									</label>
								</div>
							</div>
							<div className={`${styles.formItem} ${styles.repeatPassword}`}>
								<label>Repeat Password</label>
								<input type="text" id="repeat-password" />
							</div>
							<div className={styles.buttons}>
								<div className={styles.line}></div>

								<button type="submit" className={styles.submitBtn}>
									Sign Up
								</button>
								<button className={styles.loginBtn}>
									<Link to="/login" className={styles.loginHref}>
										Already a user?
									</Link>
								</button>
							</div>
						</div>
					</form>
				</div>
				<div className={styles.loginRight}>
					<img src="images/img3.png" />
				</div>
			</div>
		</div>
	);
}
