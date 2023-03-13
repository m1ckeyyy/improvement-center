import React, { useRef, useEffect } from "react";
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
				<div className={styles["login-left"]}>
					<div className={styles["login-header"]} ref={header}>
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
							<div
								className={`${styles["form-item"]} ${styles["repeat-password"]}`}
							>
								<label>Repeat Password</label>
								<input type="text" id="repeat-password" />
							</div>
							<div className={styles.buttons}>
								<div className={styles.line}></div>

								<button type="submit" className={styles["submit-btn"]}>
									Sign Up
								</button>
								<button className={styles["login-btn"]}>
									<Link to="/login" className={styles["login-href"]}>
										Already a user?
									</Link>
								</button>
							</div>
						</div>
					</form>
				</div>
				<div className={styles["login-right"]}>
					<img src="images/img3.png" />
				</div>
			</div>
		</div>
	);
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
						Getting started is quick and simple, just fill out the info below!
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
							<button className={styles["login-btn"]}>
								<Link to="/login" className={styles["login-href"]}>
									Already a user?
								</Link>
							</button>
						</div>
					</div>
				</form>
			</div>
			<div className={styles["login-right"]}>
				<img src="images/frog1.png" />
			</div>
		</div>
	);
}
