import React from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { Link } from 'react-router-dom';

const SignIn = ({ isDarkMode }) => {
	const validateForm = (e) => {
		e.preventDefault();
		let isValid = true;

		const fields = [
			{ id: 'firstName', message: 'Please enter your first name' },
			{ id: 'lastName', message: 'Please enter your last name' },
			{ id: 'email', message: 'Please enter a valid email address', pattern: /\S+@\S+\.\S+/ },
			{ id: 'userName', message: 'Please enter a username' },
			{
				id: 'password',
				message: 'Must be at least 5 characters long and contain 1 number',
				pattern: /^(?=.*\d).{5,}$/,
			},
			{
				id: 'repeat-password',
				message: 'Passwords do not match',
				compareTo: 'password',
			},
		];

		fields.forEach(({ id, message, pattern, compareTo }) => {
			const input = document.querySelector(`#${id}`);
			const errorMessage = input.nextElementSibling;

			if (compareTo) {
				const compareToInput = document.querySelector(`#${compareTo}`);
				if (input.value !== compareToInput.value) {
					errorMessage.textContent = message;
					errorMessage.style.display = 'block';
					isValid = false;
				} else {
					errorMessage.style.display = 'none';
				}
			} else if (!input.value || (pattern && !pattern.test(input.value))) {
				errorMessage.textContent = message;
				errorMessage.style.display = 'block';
				isValid = false;

				// Särskilt felmeddelande för lösenordskrav
				if (id === 'password') {
					const passwordRequirementMessage = document.querySelector('#password-requirement-message');
					passwordRequirementMessage.style.display = 'block';
				}
			} else {
				errorMessage.style.display = 'none';

				// Dölj lösenordskravmeddelandet om lösenordet är giltigt
				if (id === 'password') {
					const passwordRequirementMessage = document.querySelector('#password-requirement-message');
					passwordRequirementMessage.style.display = 'none';
				}
			}
		});

		// Kontrollera att checkboxen är markerad
		const terms = document.querySelector('#terms');
		const termsError = terms.nextElementSibling.nextElementSibling;
		if (!terms.checked) {
			termsError.textContent = 'You must accept the terms';
			termsError.style.display = 'block';
			isValid = false;
		} else {
			termsError.style.display = 'none';
		}

		// Visa framgångsmeddelande om alla fält är giltiga
		if (isValid) {
			alert('Registration successful! A confirmation email has been sent.');
			document.querySelector('#regForm').reset();
		}
	};

	return (
		<>
			<div className={isDarkMode ? 'account-page dark-mode' : 'account-page'}>
				<div className="container">
					<form id="regForm" className="regForm" onSubmit={validateForm}>
						<h2>Create new account</h2>
						<div className="regForm-input-group">
							<label htmlFor="firstName" className="label">
								First Name
							</label>
							<input type="text" id="firstName" className="form-input" placeholder="First Name" />
							<p className="invalid-input" style={{ display: 'none', color: 'red' }}>
								Error Msg
							</p>
						</div>
						<div className="regForm-input-group">
							<label htmlFor="lastName" className="label">
								Last Name
							</label>
							<input type="text" id="lastName" className="form-input" placeholder="Last Name" />
							<p className="invalid-input" style={{ display: 'none', color: 'red' }}>
								Error Msg
							</p>
						</div>
						<div className="regForm-input-group">
							<label htmlFor="email" className="label">
								Email
							</label>
							<input type="text" id="email" className="form-input" placeholder="Email" />
							<p className="invalid-input" style={{ display: 'none', color: 'red' }}>
								Error Msg
							</p>
						</div>
						<div className="regForm-input-group">
							<label htmlFor="userName" className="label">
								Username
							</label>
							<input type="text" id="userName" className="form-input" placeholder="Username" />
							<p className="invalid-input" style={{ display: 'none', color: 'red' }}>
								Error Msg
							</p>
						</div>
						<div className="regForm-input-group">
							<label htmlFor="password" className="label">
								Password
							</label>
							<input type="password" id="password" className="form-input" placeholder="Password" />
							<small className="tip">Must be at least 5 characters long and contain 1 number</small>
							<p id="password-requirement-message" style={{ display: 'none', color: 'red' }}>
								Password must meet the specified requirements.
							</p>
							<p className="invalid-input" style={{ display: 'none', color: 'red' }}>
								Error Msg
							</p>
						</div>
						<div className="regForm-input-group">
							<label htmlFor="repeat-password" className="label">
								Repeat Password
							</label>
							<input type="password" id="repeat-password" className="form-input" placeholder="Repeat Password" />
							<p className="invalid-input" style={{ display: 'none', color: 'red' }}>
								Error Msg
							</p>
						</div>
						<div className="regForm-input-group">
							<input type="checkbox" id="terms" className="form-check" />
							<label htmlFor="terms" className="label-for-terms">
								I accept the terms
							</label>
							<p className="invalid-input" style={{ display: 'none', color: 'red' }}>
								Error Msg
							</p>
						</div>
						<button type="submit" className="regform-btn" id="regform-btn">
							Register
						</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default SignIn;
