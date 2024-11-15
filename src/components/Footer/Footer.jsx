import React, { useState } from 'react';
import bellicon from '../../assets/notification-icon-1.svg fill.svg';
import emailicon from '../../assets/EmailIcon.svg';

export const Footer = () => {
	const [email, setEmail] = useState('');
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

	const validateEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setError('');
		setSuccess('');

		if (!email) {
			setError('Please enter your email address.');
		} else if (!validateEmail(email)) {
			setError('Please enter a valid email address.');
		} else {
			setSuccess('Thank you for subscribing to our newsletter!');
			setEmail('');
		}
	};

	return (
		<>
			<footer className="footer">
				<div className="container">
					<div className="subscribe-wrapper">
						<div className="subscribe-section">
							<div className="bell-icon">
								<img src={bellicon} alt="notification bell" />
							</div>
							<div className="subscribe-text">
								<h3>Subscribe to our newsletter</h3>
								<span className="extra-text">to stay informed about latest updates</span>
							</div>
						</div>
						<form className="subscribe-form" onSubmit={handleSubmit}>
							<div className="input-group">
								<div className="email-icon">
									<img src={emailicon} alt="Email icon" />
								</div>
								<input type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
								<button className="subscribe-btn" type="submit">
									Subscribe
								</button>
							</div>
						</form>
					</div>
							<div className="subscribe-message">
								{error && <p className="error-message">{error}</p>}
								{success && <p className="success-message">{success}</p>}
							</div>
					<div className="silicon-rights">
						<span className="rights">© 2024 Silicon. All rights reserved.</span>
						<span className="credits">Credit Madras Themes</span>
					</div>
				</div>
			</footer>
		</>
	);
};
