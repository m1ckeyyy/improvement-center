import React, { useRef, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import styles from "./log.module.scss";
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHeaderEffect } from "./../effects/hackerEffect";
export default function Login() {
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
									target.style.color = "rgb(175, 175, 175)";
									return;
								}
								target.children[0].style.color = "rgb(175, 175, 175)";
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
							Welcome Back! <br />
							Sign In to Your Account
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
				</div>
				<div className={styles.loginRight}>
					<img src="images/login-img.png" />
				</div>
			</div>
		</div>
	);
}
