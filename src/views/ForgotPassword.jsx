import React from 'react';

const ForgotPassword = () => {
	const validateEmail = () => {
		let emailInput = document.querySelector('#reset-email');
		let emailError = document.querySelector('#email-error-message');
		let successMessage = document.querySelector('#success-message');
		let emailValue = emailInput.value;
		let isValid = true;

		// Validera e-postadressen
		if (emailValue === '') {
			emailError.textContent = 'You have to enter an email address';
			emailError.style.display = 'block';
			successMessage.style.display = 'none'; // Dölj framgångsmeddelandet vid fel
			isValid = false;
		} else if (!/\S+@\S+\.\S+/.test(emailValue)) {
			emailError.textContent = 'Please enter a valid email address';
			emailError.style.display = 'block';
			successMessage.style.display = 'none';
			isValid = false;
		} else {
			emailError.style.display = 'none';
		}

		// Om e-postadressen är giltig, rensa fältet och visa framgångsmeddelandet
		if (isValid) {
			emailInput.value = '';
			successMessage.textContent =
				'A link to reset your password has been sent to you. Please check your email inventory!';
			successMessage.style.display = 'block';
		}
	};

	return (
		<div className="forgot-password-page">
			<div className="forgot-password-content">
				<h2>Forgot Password</h2>
				<p>Please enter your email address to reset your password.</p>
				<div className="reset-email-input">
					<input type="email" id="reset-email" placeholder="Email Address" />
					<button className="reset-btn" onClick={validateEmail}>
						Reset Password
					</button>
				</div>
				<span
					id="email-error-message"
					style={{ display: 'none', color: 'red', fontSize: '12px', marginTop: '1rem' }}
				></span>
				<span
					id="success-message"
					style={{ display: 'none', color: 'green', fontSize: '12px', marginTop: '1rem' }}
				></span>
			</div>
		</div>
	);
};

export default ForgotPassword;
