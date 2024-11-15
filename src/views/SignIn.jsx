import React from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { Link } from 'react-router-dom';

let validateForm = () => {
	let userName = document.querySelector('#sign-in-userName').value;
	let password = document.querySelector('#sign-in-password').value;
	let userNameError = document.querySelector('#username-error-message');
	let passwordError = document.querySelector('#password-error-message');

	let isValid = true;

	// Kontrollera användarnamn
	if (userName === '') {
		userNameError.textContent = 'You have to enter a username';
		userNameError.style.display = 'block';
		isValid = false;
	} else {
		userNameError.style.display = 'none';
	}

	// Kontrollera lösenord
	if (password === '') {
		passwordError.textContent = 'You have to enter a password';
		passwordError.style.display = 'block';
		isValid = false;
	} else {
		passwordError.style.display = 'none';
	}

	// Rensa fälten om valideringen är godkänd
	if (isValid) {
		document.querySelector('#sign-in-userName').value = '';
		document.querySelector('#sign-in-password').value = '';
	}
};

const SignIn = ({ isDarkMode }) => {
	return (
		<>
			<div className={isDarkMode ? 'account-page dark-mode' : 'account-page'}>
				<div className="container">
					<form id="signInForm" className="signInForm" onSubmit={(e) => e.preventDefault()}>
						<div className="form-input-group">
							<h2>Sign in</h2>
							<input onChange={validateForm} type="text" id="sign-in-userName" placeholder="Username" />
							<span id="username-error-message" style={{ display: 'none', color: 'red', fontSize: '12px' }}></span>
						</div>
						<div className="form-input-group">
							<input onChange={validateForm} type="password" id="sign-in-password" placeholder="Password" />
							<span id="password-error-message" style={{ display: 'none', color: 'red', fontSize: '12px' }}></span>
						</div>
						<Link className="forgot-link" to={'/Account/ForgotPassword'}>
							<div className="forgot-text">Forgot your password?</div>
						</Link>
						<button className="sign-in-btn" onClick={validateForm}>
							Sign in
						</button>
						<div className="register">
							<hr className="line-separator"></hr>
							<h5>Have no account yet?</h5>
							<Link className="sign-up-link" to={'/Account/Register'}>
								<button className="sign-up-btn">Create your account</button>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default SignIn;
